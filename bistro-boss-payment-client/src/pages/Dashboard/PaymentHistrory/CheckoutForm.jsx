import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
  //
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      // Can't find a form element on the page.
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("Error", error);
      setCardError(error.message);
    }
    if (paymentMethod) {
      setCardError("");
      console.log("PaymentMethod", paymentMethod);
    }
  };

  return (
    <div className="bg-zinc-50">
      <form className="w-full md:w-2/3 m-8 mx-auto" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn mt-6  btn-primary btn-block"
          type="submit"
          disabled={!stripe}
        >
          Pay Now
        </button>
      </form>
      {cardError && <p className="mt-6 text-center text-red-600">{cardError}</p>}
    </div>
  );
};

export default CheckoutForm;

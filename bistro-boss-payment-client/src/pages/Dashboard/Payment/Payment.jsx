import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./Payment.css"
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  // Get the cart from useCart Hook:
  const [cart] = useCart();
  // Count total amout:
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  // Calculate total price in 2 decimal places
  const price = parseFloat(totalPrice.toFixed(2));

  return (
    <div className="max-h-screen p-10 w-full ">
      <Helmet>
        <title>Bistro Boss | Payment History</title>
      </Helmet>
      <SectionTitle
        heading="Payment History "
        subHeading="Please Pay Your Bill"
      ></SectionTitle>
      <div className="mt-20 bg-zinc-50">
        {/* Use stripe checkout form using elements and stripePromise props */}
        <Elements stripe={stripePromise}>
          <CheckoutForm cart={cart} price={price}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;

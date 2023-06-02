import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const PaymentHistrory = () => {
  return (
    <div className="max-h-screen p-10 w-full ">
      <Helmet>
        <title>Bistro Boss | Payment History</title>
      </Helmet>
      <SectionTitle
        heading="Payment History "
        subHeading="Please Pay Your Bill"
      ></SectionTitle>
      {/* Use stripe checkout form using elements and stripePromise props */}
      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  );
};

export default PaymentHistrory;

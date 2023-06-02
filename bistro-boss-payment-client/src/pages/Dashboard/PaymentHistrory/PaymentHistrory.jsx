import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

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
    </div>
  );
};

export default PaymentHistrory;

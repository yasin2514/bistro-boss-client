import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutFrom from "./CheckoutFrom";

// T0DO: provide publishable key
const stripePromise = loadStripe(`${import.meta.env.VITE_Payment_Gateway_PK}`);
const Payment = () => {
    return (
        <div className="p-8">
            <SectionTitle heading={'Payment'} subHeading={'please process payment'}>

            </SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckoutFrom></CheckoutFrom>
            </Elements>
        </div>
    );
};

export default Payment;
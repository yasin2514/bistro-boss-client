import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutFrom from "./CheckoutFrom";
import useCart from "../../../Hooks/useCart";

// T0DO: provide publishable key
const stripePromise = loadStripe(`${import.meta.env.VITE_Payment_Gateway_PK}`);
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className="p-8">
            <SectionTitle heading={'Payment'} subHeading={'please process payment'}>
            </SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckoutFrom cart={cart} price={price}></CheckoutFrom>
            </Elements>
        </div>
    );
};

export default Payment;
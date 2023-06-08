import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const CheckoutFrom = ({ price }) => {
    const { user } = useAuth();
    const [clientSecret, setClientSecret] = useState();
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState();
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        console.log(price)
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret)
            })
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }


        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setCardError(error.message)
        }
        else {
            setCardError('');
            // console.log({ paymentMethod });
        }
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || "anonymous",
                        email: user?.email || 'unknown'
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message)
        }

        console.log({ paymentIntent });
        setProcessing(false)
        if (paymentIntent.status === "succeeded") {
            setTransactionId(paymentIntent.id)
            // TODO:Next steps
        }
    }


    return (
        <form className="w-2/3 mx-auto mt-20" onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" className="btn btn-primary btn-sm mt-10" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
            <div className="mt-20">
                <p className="text-red-600">{cardError}</p>
                {transactionId && <p className="text-green-600">Transaction complete with transactionId:{transactionId}</p>}
            </div>
        </form>
    );
};

export default CheckoutFrom;
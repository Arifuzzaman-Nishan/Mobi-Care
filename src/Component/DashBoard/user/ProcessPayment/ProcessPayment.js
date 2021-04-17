import React, { useContext, useEffect, useMemo, useState } from "react";
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement
} from "@stripe/react-stripe-js";

import './ProcessPayment.css';
import { userContext } from "../../../../App";



const useOptions = () => {

    const options = useMemo(
        () => ({
            style: {
                base: {
                    fontSize: '16px',
                    color: "#424770",
                    letterSpacing: "0.025em",
                    fontFamily: "Source Code Pro, monospace",
                    "::placeholder": {
                        color: "#aab7c4"
                    }
                },
                invalid: {
                    color: "#9e2146"
                }
            }
        }),
        []
    );

    return options;
};




const ProcessPayment = ({ specificService }) => {

    const { name, img, price, description } = specificService;

    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();

    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardNumberElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            // console.log('[PaymentMethod]', paymentMethod);
            setPaymentSuccess(paymentMethod.id);

            const newOrder = {
                name: sessionStorage.getItem('name'),
                email: sessionStorage.getItem('email'),
                img: img,
                serviceName: name,
                // price: price,
                description: description,
                // brand: paymentMethod.card.brand,
                funding: paymentMethod.card.funding,
                status: 'Pending'
            }

            successFullPayment(newOrder);


            setPaymentError(null);

            elements.getElement(CardNumberElement).clear();
            elements.getElement(CardExpiryElement).clear();
            elements.getElement(CardCvcElement).clear();
        }

    };



    const successFullPayment = (newOrder) => {
        console.log(newOrder);
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(result => {
                if (result) {
                    // alert('successfully inserted');
                }
            })
    }

    const handleRemoveText = () => {
        setPaymentSuccess(null);
        setPaymentError(null);
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Card number
                <CardNumberElement onFocus={handleRemoveText} options={options} />
                </label>
                <br />
                <label>
                    Expiration date
                <CardExpiryElement options={options} />
                </label>
                <br />
                <label>
                    CVC
                <CardCvcElement options={options} />
                </label>
                <br />
                <h6 className='text-success'>Your Service charged will be {price}</h6>
                <button type="submit" disabled={!stripe}>
                    Pay
            </button>
            </form>
            {
                paymentError &&
                <div class="mt-4 alert alert-danger">
                    <strong className='mr-3'>Error!</strong>
                    {paymentError}
                </div>
            }
            {
                paymentSuccess &&
                <div class="mt-4 alert alert-success">
                    <strong className='mr-3'>Successfully</strong>
                Payment done
                </div>
            }
        </>
    );
};

export default ProcessPayment;
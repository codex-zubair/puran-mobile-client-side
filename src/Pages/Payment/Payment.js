
import { useLoaderData } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useNavigation } from 'react-router-dom';
import CheckoutForm from '../../Components/CheckoutForm/CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_stripe_key);
// console.log(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
    const item = useLoaderData();
    const product = item[0]

    // console.log("product", product);




    const { category, item_name, resale_price } = product;

    const navigation = useNavigation()
    if (navigation.state === 'loading') {
        //TODO use loader
    }
    return (
        <div>
            <h1>Payment Now</h1>
            <h2 className='text-start ml-10 text-xl'>
                Please pay :
                <span className='text-blue-600 font-bold'> ${resale_price}</span>
            </h2>
            <h2 className='text-start ml-10'>For,</h2>
            <h2 className='text-start ml-10'>
                <span className='mr-3 text-2xl'>Brand : {category} , </span>
                <span className='mr-3 text-xl'>Model : {item_name}</span>
            </h2>
            {/* <div className='my-12 w-96'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm bookings={product} />
                </Elements>
            </div> */}
        </div>
    );
};

export default Payment;






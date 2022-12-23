import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from '../../Components/CheckoutForm/CheckoutForm';

const Payment = () => {

    const stripePromise = loadStripe(process.env.REACT_APP_stripe_key);



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
            <h1 className='text-center text-4xl font-semibold my-2'>Pay For {item_name}</h1>
            <div className='mx-5 font-semibold grid grid-cols-2 my-24'>
                <div>
                    <h2 className='text-start text-2xl ml-10'>
                        Please pay :
                        <span className='text-blue-600 font-bold'> ${resale_price}</span>
                    </h2>
                    <h2 className='text-start text-xl my-2 ml-10'>For,</h2>
                    <h2 className='text-start ml-10'>
                        <span className='mr-3  text-2xl'>Brand : {category} , </span>
                        <span className='mr-3  text-2xl'>Model : {item_name}</span>
                    </h2>

                    <div className='my-12 flex ml-5 '>
                        <button className='btn btn-success ml-5'>Pay Now</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Payment;


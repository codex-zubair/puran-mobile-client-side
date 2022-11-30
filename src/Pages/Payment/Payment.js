import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {

    const item = useLoaderData();

    const product = item[0]
    
    


    return (
        <div>
            <h1 className='text-2xl font-semibold'>payment for {product.item_name}</h1>
            <p>Please pay {product.resale_price}</p>
            <p></p>


        </div>
    );
};

export default Payment;
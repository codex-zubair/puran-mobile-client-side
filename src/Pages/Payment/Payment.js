
import { useLoaderData } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useNavigation } from 'react-router-dom';
import CheckoutForm from '../../Components/CheckoutForm/CheckoutForm';
 
 
const stripePromise = loadStripe('pk_test_51MHWpLLWTZ55Tnqdi6NqdRsQpGougZxHhM2uBAwm1c5IXDL6bMdBsorkSrsxWTqgMOArQlai7JRneVhc1YKNMPUa00RUrkQigS');
// console.log(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
const bookings = useLoaderData();
const item = useLoaderData();
const product = item[0]

console.log("product", product);


   
    // const { productCategory, productModel, resellPrice } = bookings;
 
    // const navigation = useNavigation()
    // if (navigation.state === 'loading') {
    //     //TODO use loader
    // }
    // return (
    //     <div>
    //         <h1>Payment Now</h1>
    //         <h2 className='text-start ml-10 text-xl'>
    //             Please pay :
    //             <span className='text-blue-600 font-bold'> ${resellPrice}</span>
    //         </h2>
    //         <h2 className='text-start ml-10'>For,</h2>
    //         <h2 className='text-start ml-10'>
    //             <span className='mr-3 text-2xl'>Brand : {productCategory} , </span>
    //             <span className='mr-3 text-xl'>Model : {productModel}</span>
    //         </h2>
    //         <div className='my-12 w-96'>
    //             <Elements stripe={stripePromise}>
    //                 <CheckoutForm bookings={bookings} />
    //             </Elements>
    //         </div>
    //     </div>
    // );
};
 
export default Payment;










// const Payment = () => {

    
    


//     return (
//     );
// };

//         <div>
//             <h1 className='text-2xl font-semibold'>payment for {product.item_name}</h1>
//             <p>Please pay {product.resale_price}</p>
//             <p></p>


//         </div>
// export default Payment;
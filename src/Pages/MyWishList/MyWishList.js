import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userAuthContext } from '../../Context/UserContext/UserContext';

const MyWishList = () => {
    const { user } = useContext(userAuthContext);
    const email = user?.email;


    const { data: orders = [] } = useQuery({
        queryKey: ['wish-list', email],
        queryFn: () => fetch(`https://puran-mobile-server-side.vercel.app/wish-list/${email}`)
            .then(res => res.json())

    })







    return (
        <div>
        {orders?.map(order => <div key={order._id} className='card mt-5  items-center lg:flex lg:flex-row gap-5 border my-2 px-5'>
            <img className='w-36 h-40' src={order.image} alt="img" />
            <div className=' gap-2 items-center w-7/12 flex flex-col font-semibold'>
                <h1 className='text-xl'> {order.item_name}</h1>
                <h2>Seller Name: {order.seller_name}</h2>
                <h2>Selling price: {order.resale_price}</h2>

            </div>
            <div className='flex gap-2'>
                <div>
                    {order.paid ?
                        <button className='btn'>Paid</button>
                        : <Link to={`/dashboard/buy/${order._id}`} className='btn'>Pay NOW</Link>}

                </div>
                <button className='btn'>Delete</button>
            </div>
        </div>)}
    </div>

    );
};

export default MyWishList;
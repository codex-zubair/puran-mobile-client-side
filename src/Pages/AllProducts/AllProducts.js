import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { userAuthContext } from '../../Context/UserContext/UserContext';

const AllProducts = () => {
    
    
    const { user } = useContext(userAuthContext);

    // My products list
    const [myProducts, setProducts] = useState([]);


    useEffect(() => {
        axios.get(`https://puran-mobile-server-side.vercel.app/all-product/list`)
            .then(data =>{
                setProducts(data.data)
                console.log(data.data)
              
            })
    }, [user])


    // Item Delete system
    const deleteHandler = (id, name) => {
        const confirm = window.confirm(`do you really wants to delete? ${name}`)


        if (confirm) {
            axios.delete(`https://puran-mobile-server-side.vercel.app/product/delete/${id}`)
                .then(data => {
                    if (data.data.acknowledged) {
                        toast.success("Delete Successful!")
                    }
                })
        }
    }




  


  



    // Item available system
    const advertiseHandler = (id) => {
        axios.put(`https://puran-mobile-server-side.vercel.app/product/advertise/${id}`)
            .then(data => {
                if (data.data.acknowledged) {
                    toast.success(`item now on Homepage!`)
                }
            })
    }





    return (
        <div className=' grid gap-4'>
            <Toaster></Toaster>




            <div>
                {myProducts?.map(order => <div key={order._id} className='card mt-5  items-center lg:flex lg:flex-row gap-5 border my-2 px-5 p-5'>
                    <img className='w-36 h-40' src={order.image} alt="img" />
                    <div className=' gap-2 items-center w-7/12 flex flex-col font-semibold'>
                        <h1 className='text-xl'> {order.item_name}</h1>
                        <p>Original price: {order.original_price}</p>
                        <p>Selling price: {order.resale_price}</p>
                        

                    </div>
                    <div className='flex gap-2 flex-col'>
                        <button onClick={() => deleteHandler(order._id, order.item_name)} className='btn'>Delete product</button>
                        <button onClick={() => advertiseHandler(order._id)} className='btn'>Advertise item</button>

                    </div>
                </div>)}
            </div>




        </div>

    );
};

export default AllProducts;
import axios from 'axios';
import React, { useState } from 'react';

const Advertised = () => {

    const [items, setItems] = useState()

    axios.get('https://puran-mobile-server-side.vercel.app/product/advertise')
        .then(data => setItems(data.data))

    
    return (
        <section className='text-center my-5'>

     
           
            <div className='flex gap-5 justify-center items-center flex-wrap'>

                {items?.map(item => <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
            
                    <figure><img className='h-48 p-5' src={item.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">{item.item_name}</h2>
                       <div className='text-left'>
                       <p className='text-xl'><strong>Original price:</strong> {item.original_price} tk</p>
                        <p className='text-xl'><strong>selling price:</strong> {item.resale_price} tk</p>
                        <p className='text-xl'><strong>seller:</strong> {item.seller_name}</p>
                        <p className='text-xl'><strong>Location:</strong> {item.location}</p>
                        <p className='text-xl'><strong>Upload time: </strong> {item.date}</p>
                       </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy NOW!</button>
                        </div>
                    </div>
                </div>)}

            </div>

        </section>
    );
};

export default Advertised;
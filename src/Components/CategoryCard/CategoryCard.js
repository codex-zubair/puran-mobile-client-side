import React, { useContext } from 'react';
import { userAuthContext } from '../../Context/UserContext/UserContext';
import { FaHeart } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';




const CategoryCard = ({ phone, setSelected }) => {
   

    const { _id, item_name, image, location, original_price, resale_price, seller_name, date, years_of_use, verified } = phone;

    // user context
    const { user } = useContext(userAuthContext);


    const addToWishList = () => {

        phone.email = user.email;

        fetch(`https://puran-mobile-server-side.vercel.app/wish-list/${_id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(phone)
        })
            .then(res => res.json())
            .then(result => {
                if (result.upsertedCount) {
                    toast.success("Successfully Added to wish List!")
                }

                else {
                    toast.error("Product already added to wish list!")
                }

            })

    }






    return (

        <div>
            <Toaster></Toaster>
            <div className="border card lg:card-side bg-base-100 rounded-none shadow-xl">
                <figure><img className='w-56' src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl"> {item_name}</h2>
                    <p className='text-xl '><strong>Year of use : </strong>{years_of_use}</p>
                    <p className='text-xl '><strong>original PRICE : </strong>{original_price}</p>
                    <p className='text-xl '><strong>resale PRICE : </strong>{resale_price}</p>
                    <p className='text-xl '><strong>Seller Name :</strong> {seller_name}</p>
                    <p className='text-xl '><strong>location : </strong>{location}</p>
                    <p className='text-xl '><strong>Post time :</strong> {date}</p>
                    <p className='text-xl '><strong>Product Added by:</strong> {verified ? <div className='flex items-center'><img className='w-12' src="https://thumbs.dreamstime.com/b/verified-icon-vector-illustration-guaranteed-stamp-badge-190908931.jpg" alt="" /> <p>verified Seller</p></div> : 'not verified Seller'}</p>

                    <div className="card-actions justify-end">
                        {/* Wish list button */}
                        <button onClick={addToWishList} className='btn btn-outline text-red-600 flex gap-1'><FaHeart></FaHeart> <p>Wish list</p></button>
                        <label onClick={() => setSelected(phone)} htmlFor="my-modal-6" className="btn btn-primary font-semibold">Book NOW</label>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default CategoryCard;
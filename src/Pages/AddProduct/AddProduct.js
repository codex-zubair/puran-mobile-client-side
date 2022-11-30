import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { userAuthContext } from '../../Context/UserContext/UserContext';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const AddProduct = () => {

    const { user } = useContext(userAuthContext);


    // using navigate
    const navigate = useNavigate();


    // Image BB KEY
    const imgkey = process.env.REACT_APP_img;



    // seller details.
    const [seller, setSeller] = useState([])









    // Categories Data
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://puran-mobile-server-side.vercel.app/categories")
            .then(res => res.json())
            .then(data => setCategories(data))


        axios.get(`https://puran-mobile-server-side.vercel.app/user/${user?.email}`)
            .then(data => setSeller(data.data[0]))
    }, [user?.email])


    const date = String(new Date()).slice(0, 21)





    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        const image = data.img[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgkey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgRes => {
                if (imgRes.success) {
                    const itemData = {
                        image: imgRes.data.url,
                        date,
                        item_name: data.item_name,
                        original_price: data.original_price,
                        resale_price: data.resale_price,
                        years_of_use: data.years_of_use,
                        location: data.location,
                        seller_mail: data.seller_mail,
                        seller_name: data.seller_name,
                        seller_number: data.seller_number,
                        category: data.category,
                        product_condition: data.product_condition,
                        product: 'available',
                        verified: seller.verified
                    }



                    // uploading
                    axios.post('https://puran-mobile-server-side.vercel.app/category-item', itemData)
                        .then(data => {
                            if (data.data.acknowledged) {

                                toast.success("Uploaded successfully!")
                                reset();
                                setTimeout(() => {
                                    navigate('/dashboard/my-products')
                                }, 1500)

                            }
                        })
                        .catch(error => {
                            alert("error");
                            console.log(error);
                        })
                }
            })


    };











    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <div className='flex flex-col justify-center items-center'>
            <Toaster></Toaster>


            <h1 className='text-5xl font-semibold my-5'>Add Product</h1>

            <form className='flex items-center justify-center flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}



                <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
                    <div>
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <input type='text' className='input wf input-bordered'  {...register("item_name")} />
                    </div>







                    <div>
                        <label className="label">
                            <span className="label-text">Original Price</span>
                        </label>
                        <input type='text' className='input input-bordered'  {...register("original_price")} />
                    </div>


                    <div>
                        <label className="label">
                            <span className="label-text">Resale Price</span>
                        </label>
                        <input type='text' className='input input-bordered'  {...register("resale_price")} />
                    </div>







                    <div>
                        <label className="label">
                            <span className="label-text">Years of use</span>
                        </label>
                        <input type='text' className='input input-bordered' {...register("years_of_use")} />
                    </div>



                    <div>
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type='text' className='input input-bordered' {...register("location")} />
                    </div>





                    <div>
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type='text' defaultValue={user?.email} className='input input-bordered' {...register("seller_mail")} />
                    </div>


                    <div>
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type='text' defaultValue={user?.displayName} className='input input-bordered' {...register("seller_name")} />
                    </div>


                    <div>
                        <label className="label">
                            <span className="label-text">Contact Number</span>
                        </label>
                        <input type='text' className='input input-bordered' {...register("seller_number", { required: true })} />
                    </div>



                    <div>
                        <label className="label">
                            <span className="label-text">Picture</span>
                        </label>
                        <input type='file' className=' input-bordered' {...register("img", { required: true })} />
                    </div>


                    <div>
                        <label className="label">
                            <span className="label-text">Select Category</span>
                        </label>

                        <select  {...register("category")}>
                            <option defaultValue={'OPPO'}>OPPO</option>
                            {categories.map(category => <option key={category._id} className='input' value={category.category}>{category.category}</option>)}
                        </select>

                    </div>



                    <div className=''>
                        <label className="label">
                            <span className="label-text">Mobile Condition</span>
                        </label>

                        <select {...register("product_condition")}>
                            <option defaultValue={'Excellent'}>Excellent</option>
                            <option value={"Good"}>Good</option>
                            <option value={"Fair"}>Fair</option>

                        </select>

                    </div>






                    {/* include validation with required or other standard HTML validation rules */}
                </div>

                {/* errors will return when field validation fails  */}
                {errors.img && <span className='font-semibold'>image field is required</span>}

                <input className='btn' type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;
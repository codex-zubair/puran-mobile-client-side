import React, { useEffect, useState } from 'react';
import CategoriesCard from '../CategoriesCard/CategoriesCard';


const Categories = () => {

    // Categories Data
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://puran-mobile-server-side.vercel.app/categories")
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])







    return (
        <section className='text-center my-32'>

            <h1 className='card shadow-md text-white  text-5xl font-semibold border py-14  bg-sky-400  my-20'>Mobile Categories List</h1>


            <div className='flex gap-5 border justify-center items-center flex-wrap'>

                {categories?.map(category => <CategoriesCard key={category._id} phoneCategory={category}></CategoriesCard>)}



            </div>


        </section>
    );
};

export default Categories;
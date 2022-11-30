import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookNowModal from '../../Components/BookNowModal/BookNowModal';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import { userAuthContext } from '../../Context/UserContext/UserContext';

const Category = () => {

    const { user } = useContext(userAuthContext);

    // Getting category ID
    const name = useLoaderData();

    // Category




    const { data: category, refetch } = useQuery({
        queryKey: ['category'], queryFn: () => fetch(`https://puran-mobile-server-side.vercel.app/category/${name}`)
            .then(res => res.json())
    })






    // fetch(`https://puran-mobile-server-side.vercel.app/category/${name}`)
    //     .then(res => res.json())
    //     .then(data => setCategory(data[0]?.list))



    const [selected, setSelected] = useState(null);







    // !MODAL




    return (
        <section className='flex flex-col gap-5 my-10'>
            <h1 className='text-center text-5xl font-semibold my-5'>{name}</h1>
            {category?.map((phone, index) =><div className='flex flex-col mx-5'> <CategoryCard refetch={refetch} setSelected={setSelected} selected={selected} key={index} categoryName={name} phone={phone}></CategoryCard></div>)

            }
            {selected && <BookNowModal user={user} setSelected={setSelected} phone={selected}></BookNowModal>}

        </section>
    );
};

export default Category;
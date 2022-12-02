import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookNowModal from '../../Components/BookNowModal/BookNowModal';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import { userAuthContext } from '../../Context/UserContext/UserContext';

const SearchResult = () => {

    // Searched data
    const items = useLoaderData();


    // user information 
    const {user} = useContext(userAuthContext);


 
        const [selected, setSelected] = useState(null);







        // !MODAL
    
    
    
    
        return (
            <section className='flex flex-col gap-5 my-10'>
                <h1 className='text-center text-5xl font-semibold my-5'>Search Result For {items[0].category}</h1>
                {items?.map((phone, index) =><div className='flex flex-col mx-5'> <CategoryCard  setSelected={setSelected} selected={selected} key={index} phone={phone}></CategoryCard></div>)
    
                }
                {selected && <BookNowModal user={user} setSelected={setSelected} phone={selected}></BookNowModal>}
    
            </section>
        );
};

export default SearchResult;
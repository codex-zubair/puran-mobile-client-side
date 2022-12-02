import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';


const SearchField = () => {


    // using use ref hook for searching.
    const searchRef = useRef();

    // Navigating after search
    const navigate = useNavigate();


    // Searching Field implementing
    const searchFiledHandler = ()=> {


        // Getting input value
        const search_text = searchRef.current.value
       
            navigate(`/search-result/${search_text}`)
    }



    return (
        <section className='items-center my-0 bg-primary flex justify-center'>
            <div className='flex items-center w-10/12 justify-center'>
                <input ref={searchRef}  type="text" className='input my-2 lg:my-10 input-bordered w-8/12 lg:w-5/12' />
                <button onClick={searchFiledHandler} type='submit' className="btn">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>

            </div>
            <label  htmlFor="my-drawer-2" className=" btn drawer-button rounded-none lg:hidden">My Account</label>
        </section>
    );
};

export default SearchField;
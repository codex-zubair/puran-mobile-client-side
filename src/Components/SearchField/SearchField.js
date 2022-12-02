import React from 'react';


const SearchField = () => {


    // Searching Field implementing
    const searchFiledHandler = (event)=> {


        event.preventDefault();
        // Getting Search Value for query
        const form = event.target;
        const search_text = form.value


        
       




    }



    return (
        <form onChange={searchFiledHandler} className='items-center my-0 bg-primary flex justify-center'>
            <div className='flex items-center w-10/12 justify-center'>
                <input  name='search_text' type="text" className='input my-2 lg:my-10 input-bordered w-8/12 lg:w-5/12' />
                <button type='submit' className="btn">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>

            </div>
            <label  htmlFor="my-drawer-2" className=" btn drawer-button rounded-none lg:hidden">My Account</label>
        </form>
    );
};

export default SearchField;
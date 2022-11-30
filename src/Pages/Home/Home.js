import React from 'react';
import Advertised from '../../Components/Advertised/Advertised';
import Banner from '../../Components/Banner/Banner';
import Categories from '../../Components/Categories/Categories';
import OfferSection from '../../Components/OfferSection/OfferSection';

const Home = () => {
    return (
        <div className='bg-sky-50'>
            <Banner></Banner>
            <Advertised></Advertised>
            <Categories></Categories>
            <OfferSection></OfferSection>
            
        </div>
    );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesCard = ({phoneCategory}) => {

    const {category} = phoneCategory;



    return (
        <Link to={`/category/${category}`} className="card btn-ghost font-semibold w-80 bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="card-actions justify-end">
                </div>
                <h2 className='text-2xl font-semibold'>{category}</h2>
            </div>
        </Link>

    );
};

export default CategoriesCard;
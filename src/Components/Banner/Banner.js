import React from 'react';

const Banner = () => {
    return (
        <section>
            <div className="hero bg-sky-50 mb-16">
                <div className="hero-content flex-col lg:flex-row">
                    <img alt='time' src="https://www.gsmarena.com.bd/images/products/Apple-iPhone-14-Pro-Max-Space-Black.jpg" className="min-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">WIN Iphone 14</h1>
                        <p className="py-6 text-xl font-semibold">Answer Some Question AND GET A Chance to win I phone</p>
                        <button className="btn btn-primary">Try now!</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
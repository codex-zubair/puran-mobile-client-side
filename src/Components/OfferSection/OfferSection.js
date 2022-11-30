import React from 'react';

const OfferSection = () => {
    return (
        <section className='py-24'>

            <h1 className='text-5xl text-center my-12'>GET Chance to make Extra Money!!!</h1>



                <div className='flex justify-center flex-col lg:flex-row gap-5'>



                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img className='w-64' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtE8QY5IG45rfURMXoC8dUvyes662hYGvEhA&usqp=CAU" alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Start making money!</h2>
                            <p>Click the button to know about it more!</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Post Ads FREE</button>
                            </div>
                        </div>
                    </div>





                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img className='w-64' src="https://www.jobs.ie/job-talk/wp-content/uploads/why-do-you-want-to-work-for-us.jpg" alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Work With US!</h2>
                            <p>Click the button to explore more.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Explore More</button>
                            </div>
                        </div>
                    </div>



                </div>
         

        </section>
    );
};

export default OfferSection;
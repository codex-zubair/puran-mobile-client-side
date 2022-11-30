import React from 'react';

const ErrorPage = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='card flex items-center justify-center'>
                <h1 className='text-3xl'>The page you are looking for is unavailable</h1>
                <img className='w-72' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=2000" alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;
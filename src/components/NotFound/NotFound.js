import React from 'react';
import { useRouteError } from 'react-router-dom';

const NotFound = () => {
    const errorPage = useRouteError();
    // console.log(errorPage)
    return (
        <div className='h-screen flex justify-center items-center text-center'>
            <div className='space-y-3'>
                <h1 className='text-4xl font-medium'>Oops!</h1>
                <p className='text-2xl font-semibold'>Sorry, an unexpected error has occurred.</p>
                <p className='text-xl font-bold'>
                    <i>{errorPage.statusText || errorPage.message}</i>
                </p>
                <p className='font-bold'>Error Code: 404</p>
            </div>
        </div>
    );
};

export default NotFound;
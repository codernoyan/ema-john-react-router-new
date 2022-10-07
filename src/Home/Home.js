import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/shop`);
    }

    return (
        <div className='flex justify-between items-center h-screen container mx-auto'>
            <div className='space-y-6'>
                <h2 className='text-7xl font-semibold'>Welcome to <br /> <span className='text-cyan-500'>Ema John</span> <br /> Shopping</h2>
                <p className='w-3/4 font-light text-gray-400'>In this shop, customers can buy Clothes, Electronics, Shoes, Bags, Computer Accessories, Smartphones, Smart Watches and many more daily need things.</p>
                <button onClick={handleNavigate} className='bg-cyan-500 text-white font-semibold px-6 py-2'>Shop Now</button>
            </div>
            <div>
                <img src={'https://cdn.dribbble.com/users/812639/screenshots/6486869/shooping_1-800x600.gif'} alt="" className='w-full' />
            </div>
        </div>
    );
};

export default Home;
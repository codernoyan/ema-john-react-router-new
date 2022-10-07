import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <div className='bg-cyan-500'>
            <nav className='container mx-auto flex justify-between items-center text-white h-16'>
                <div>
                    <ShoppingBagIcon className="h-8 w-8 text-white" />
                </div>
                <div className='flex gap-4 font-medium'>
                    <NavLink to='/home'>Home</NavLink>
                    <NavLink to='/shop'>Shop</NavLink>
                    <NavLink to='/orders'>Orders</NavLink>
                    <NavLink to='/inventory'>Inventory</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;
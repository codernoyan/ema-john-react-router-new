import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/shop'>Shop</NavLink>
            <NavLink to='/orders'>Orders</NavLink>
            <NavLink to='/inventory'>Inventory</NavLink>
        </div>
    );
};

export default Header;
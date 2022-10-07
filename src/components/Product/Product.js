import React from 'react';

const Product = ({ product, handleAddToCart }) => {
    const { img, name, price, seller, ratings } = product;
    const DEFAULT_IMAGE = "https://t4.ftcdn.net/jpg/00/89/55/15/360_F_89551596_LdHAZRwz3i4EM4J0NHNHy2hEUYDfXc0j.jpg";
    
    return (
        <div className='border-2 flex flex-col justify-between p-2 h-[450px] rounded'>
            {/* product image */}
            <div>
                <img className='w-full h-64 border rounded' src={img} onError={(e) => {
                    e.target.src = DEFAULT_IMAGE
                }} alt="shopping" />
            </div>
            {/* product info */}
            <div>
                <h3>{name}</h3>
                <h4>Price: {price}</h4>
                <h5><code>Seller: {seller}</code></h5>
                <p><small>Ratings: {ratings}</small></p>
            </div>
            {/* button */}
            <button onClick={()=> handleAddToCart(product)} className='font-semibold text-white bg-cyan-500 py-2 transition-all hover:bg-cyan-300'>Add to Cart</button>
        </div>
    );
};

export default Product;
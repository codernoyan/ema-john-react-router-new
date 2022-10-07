import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Shop = () => {
    const { products } = useLoaderData();
    // console.log(products)
    
    return (
        <div className='grid grid-cols-4 gap-4'>
            {/* products */}
            <div className='col-span-3'>
                <h4>Products:</h4>
                <div className='grid grid-cols-3 gap-4 m-12'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                        ></Product>)
                    }
                </div>
            </div>
            {/* product price summary */}
            <div className='bg-rose-500'>
                <h4>Price Summary:</h4>
            </div>
        </div>
    );
};

export default Shop;
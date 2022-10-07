import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const { products } = useLoaderData();
    // console.log(products)
    const [cart, setCart] = useState([]);

    const handleAddToCart = selectedProduct => {
        // console.log(selectedProduct);
        const previousCart = [...cart, selectedProduct];
        setCart(previousCart);
        // console.log(previousCart)
    }

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
                            handleAddToCart={handleAddToCart}
                        ></Product>)
                    }
                </div>
            </div>
            {/* product price summary */}
            <div className='bg-cyan-300'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
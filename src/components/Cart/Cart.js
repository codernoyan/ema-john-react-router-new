import React from 'react';

const Cart = ({ cart }) => {
    console.log(cart);

    let total = 0;
    let shippingCost = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price;
        shippingCost = shippingCost + product.shipping;
        // console.log(product)
    }

    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shippingCost + tax;

    return (
        <div className='sticky top-0 p-4'>
            <h2 className='text-xl font-semibold'>Price Summary:</h2>
            <hr className='border-black my-2' />
            <p><code>Selected Items: {cart.length}</code></p>
            <p><small>Quantity: {quantity}</small></p>
            <p className='font-bold'>Total Price: ${total}</p>
            <p className='font-bold'>Shipping Cost: ${shippingCost}</p>
            <p className='font-bold'>Tax: {tax}</p>
            <p className='font-bold'>Grand Total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;
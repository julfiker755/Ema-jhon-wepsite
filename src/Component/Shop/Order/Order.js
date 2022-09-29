import React from 'react';

const Order = ({cart}) => {
    let Total=0;
    let shipping=0;
    let quantity=0;
    for(const ProductPrice of cart){
        quantity=quantity+ProductPrice.quantity;
        Total=Total+ProductPrice.price*ProductPrice.quantity
        shipping=shipping+ProductPrice.shipping*ProductPrice.quantity
    }
    // how to tax
    const tax=(Total/100*2)
    const Grandtotal=Total+shipping+tax
    return (
         <div className='w-[300px] p-3 sticky top-0'>
            <h1 className='text-[20px] text-bold'>Order Summary</h1>
            <h2>Selected Items:{quantity}</h2>
            <h2>Total Price: ${Total}</h2>
            <h2>Total Shipping Charge: ${shipping}</h2>
            <h2>Tax: ${tax}</h2>
            <h2>Grand Total: ${Grandtotal}</h2>
       </div>
    );
};

export default Order;
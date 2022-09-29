import React from 'react';

const Product = ({Product,Handleclick}) => {
    var {name,img,price,ratings,seller}=Product
        return (
            <div className='w-[280px]  border-2 border-[#62f21f] rounded-md'>
            <img className='p-1' src={img} alt="" />
            <h1 className='text-[23px] text-bold'>{name}</h1>
            <h2  className='text-[23px] text-bold'>Price: ${price}</h2>
            <p className='mt-2 text-[16px]'>Seller : {seller}</p>
            <p className='text-[16px]'>Rating : {ratings}</p>
            <button onClick={()=>Handleclick(Product)} className='bg-[#2258ec] w-[277px] h-[30px] text-white'>Add to Cart</button>
        </div>
    );
};

export default Product;
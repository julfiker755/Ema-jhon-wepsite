import React from 'react';
import img from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='bg-[#1C2B35] text-white py-2'>
           <div className='container mx-auto flex justify-between items-center'>
              <img className='w-[180px] text-white' src={img} alt="image-logo" />
              <nav className='space-x-2'>
                <a className='text-[17px]' href="#">Order</a>
                <a className='text-[17px]' href="#">Order Review</a>
                <a className='text-[17px]' href="#">Manage Inventory</a>
                <a className='text-[17px]' href="#">Login</a>
              </nav>
           </div>
        </div>
    );
};

export default Header;
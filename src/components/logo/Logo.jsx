import React from 'react';
import logo from '../../assets/bank logo.png';
const Logo = () => {
    return (
        <div className='flex gap-2 items-center'>
            <img src={logo} alt="" />
            <h3 className='font-bold text-xl'>Fund Stack</h3>
        </div>
    );
};

export default Logo;
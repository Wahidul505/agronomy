import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-black text-gray-300 mt-20 text-center text-3xl flex flex-col md:flex-row gap-3 justify-between items-center px-12'>
            <img className='w-28 md:w-40' src="https://i.ibb.co/W59qgww/agronomy-01-2-1.png" alt="" />
            <div className='flex flex-col md:text-xl'>
            <Link to='/register' className='text-sm md:text-xl'>Join Us</Link>
            <hr />
            <Link to='/login' className='text-sm md:text-xl'>Login</Link>
            <hr />
            </div>
            <div>
                <p className='text-sm'>All Rights Reserved @ Agronomy 2022</p>
            </div>
        </div>
    );
};

export default Footer;
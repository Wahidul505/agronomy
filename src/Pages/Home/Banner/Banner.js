import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner flex flex-col md:flex-row justify-between gap-2 px-6 py-4 md:py-10'>
            <div>
                <h1 className='text-lg md:text-3xl text-amber-200 md:mb-4'>An Agro Farm Warehouse Management System</h1>
                <p className='text-sm md:text-xl text-white'>Here We Collect Agro Products and Allow Sellers to Manage and Add Product. <br /> Be Our Seller and Get Benefits from Agronomy.</p>
            </div>
            <div>
                <img className='w-1/3 md:w-full h-full rounded' src="https://i.ibb.co/3CdF5qx/volodymyr-dedyshyn-i-CE6-u-Nn-Hn4-u.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;
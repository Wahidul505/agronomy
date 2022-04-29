import React from 'react';

const Banner = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mb-20'>
            <div>
                <h1 className='text-lg md:text-3xl text-amber-200 md:mb-4'>An Agro Farm Warehouse Management System</h1>
                <p className='text-sm md:text-xl text-white'>Here We Collect Agro Products and Allow Sellers to Manage and Add Product. <br /> Be Our Seller and Get Benefits from Agronomy.</p>
            </div>
                <img className='w-full rounded' src="https://i.ibb.co/3CdF5qx/volodymyr-dedyshyn-i-CE6-u-Nn-Hn4-u.jpg" alt="" />
        </div>
    );
};

export default Banner;
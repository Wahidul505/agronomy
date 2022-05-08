import React from 'react';

const Banner = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mb-20 items-center'>
            <div data-aos="zoom-in-right"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <h1 className='text-xl md:text-3xl text-orange-300 md:mb-4'>An Agro Farm Warehouse Management System</h1>
                <p className='text-sm md:text-xl text-white'>Here We Collect Agro Products and Allow Sellers to Manage and Add Product. <br /> Be Our Seller and Get Benefits from Agronomy.</p>
            </div>
            <div data-aos="zoom-in-left"
                data-aos-easing="linear"
                data-aos-duration="1000">
                <img className='w-full' src="https://i.ibb.co/5BbTWV2/vegetables-removebg-preview-1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;
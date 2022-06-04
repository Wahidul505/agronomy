import React from 'react';

const Banner = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center gap-4'>
            <div>
                <h1 className='text-3xl md:text-5xl lg:text-6xl text-orange-300 md:mb-4'>Agronomy for managing your products.</h1>
                <p className='text-xl md:text-2xl lg:text-3xl text-white'>Here We Collect Agro Products and Allow Sellers to Manage and Add Product. Be Our Seller and Get Benefits from Agronomy.</p>
            </div>
            <div>
                <img className='w-full h-96 rounded-lg mx-auto' src="https://i.ibb.co/FnWzSZQ/emma-van-sant-Jkf-Npgk8o-Nw-unspla.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;
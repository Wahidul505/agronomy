import React, { useEffect, useState } from 'react';

const Survey = () => {
    const [expensiveProduct, setExpensiveProduct] = useState({});
    const [highestProduct, setHighestProduct] = useState({});
    useEffect(() => {
        fetch('https://agronomy.onrender.com/sortedItemByQuantity')
            .then(res => res.json())
            .then(data => setHighestProduct(data[0]));
    }, []);

    useEffect(() => {
        fetch('https://agronomy.onrender.com/highestPriceItem')
            .then(res => res.json())
            .then(data => setExpensiveProduct(data[0]));
    }, []);

    return (
        <div className='grid grid-col-1 md:grid-cols-2 gap-8 lg:gap-12'>
                <div className='flex items-center bg-gray-800 bg-opacity-70 md:px-4 rounded'>
                <img className='md:w-40 w-28' src="https://i.ibb.co/W59qgww/agronomy-01-2-1.png" alt="" />
                <p className='text-gray-200 text-xl md:text-3xl lg:text-4xl'>Products Survey</p>
                </div>
            <div className='row-span-2 flex flex-col bg-gray-800 bg-opacity-70 rounded overflow-hidden'>
                <img className='w-full h-96 rounded-t' src={expensiveProduct.image} alt="" />
                <div className='p-8 text-gray-200'>
                    <h1 className='text-3xl'>Most Expensive Product</h1>
                    <hr className='mb-2'/>
                    <p className='text-2xl text-green-300'>{expensiveProduct.name}</p>
                    <p className='text-xl'>{expensiveProduct.price} Tk</p>
                </div>
            </div>
            <div className='flex bg-gray-800 bg-opacity-70 rounded lg:flex-row flex-col overflow-hidden'>
                <img className='w-full lg:w-72 h-full rounded-l ' src={highestProduct.image} alt="" />
                <div className=' p-8 text-gray-200'>
                    <h1 className='text-3xl'>Most Stocked Product</h1>
                    <hr className='mb-2'/>
                    <p className='text-2xl text-green-300'>{highestProduct.name}</p>
                    <p className='text-xl'>Quantity: {highestProduct.quantity}</p>
                </div>
            </div>
        </div>
    );
};

export default Survey;
import React, { useEffect, useState } from 'react';

const ItemCount = () => {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        fetch('https://agronomy-warehouse.herokuapp.com/itemCount')
        .then(res => res.json())
        .then(data => setCount(data.count));
    },[]);
    return (
        <div className='mt-20'>
            <h1 className='w-28 h-28 mx-auto rounded-full bg-green-600 border-2 border-white flex justify-center items-center text-white text-3xl font-semibold'>{count}</h1>
            <h1 className='text-center text-white text-xl mt-2'>Total Different Items</h1>
        </div>
    );
};

export default ItemCount;
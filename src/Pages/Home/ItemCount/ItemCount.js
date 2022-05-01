import React, { useEffect, useState } from 'react';
import RoundedCard from '../RoundedCard/RoundedCard';

const ItemCount = () => {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        fetch('https://agronomy-warehouse.herokuapp.com/itemCount')
        .then(res => res.json())
        .then(data => setCount(data.count));
    },[]);
    return (
        <div className='text-center text-gray-300 py-12 bg-black -mx-8 mt-20'>
            <h1 className='text-8xl mb-2'>{count}</h1>
            <p className='text-xl'>Total Different Products</p>
        </div>
    );
};

export default ItemCount;
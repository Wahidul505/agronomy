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
        <div className='flex justify-center'>
            <RoundedCard>
                <h1>{count}</h1>
            </RoundedCard>
        </div>
    );
};

export default ItemCount;
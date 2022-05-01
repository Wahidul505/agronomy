import React, { useEffect, useState } from 'react';
import RoundedCard from '../RoundedCard/RoundedCard';

const SortedItems = () => {
    const [sortedItems, setSortedItems] = useState([]);
    useEffect(() => {
        fetch('https://agronomy-warehouse.herokuapp.com/sortedItem')
            .then(res => res.json())
            .then(data => setSortedItems(data));
    }, [])
    return (
        <div className='flex justify-between flex-col md:flex-row items-center lg:px-20'>
            {
                sortedItems.map(item => <RoundedCard key={item._id}>
                    <p className='text-4xl text-green-300'>{item.quantity}</p>
                    <p className='text-gray-300 font-semibold'>{item.name}</p>
                </RoundedCard>)
            }
        </div>
    );
};

export default SortedItems;
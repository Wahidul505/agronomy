import React, { useEffect, useState } from 'react';
import RoundedCard from './RoundedCard';

const SortedItems = () => {
    const [sortedItems, setSortedItems] = useState([]);
    useEffect(() => {
        fetch('https://agronomy-warehouse.herokuapp.com/sortedItemByQuantity')
            .then(res => res.json())
            .then(data => setSortedItems(data));
    }, [])
    return (
        <div className='mt-20'>
                <p className='text-center text-gray-300 text-4xl'>Most Stored Products</p>
                <hr className='mb-6'/>
            <div className='flex justify-between flex-col gap-6 md:gap-0 md:flex-row items-center lg:px-20'>
                {
                    sortedItems.map(item => <RoundedCard key={item._id}>
                        <p className='text-5xl text-green-300'>{item.quantity}</p>
                        <p className='text-gray-300 font-semibold'>{item.name}</p>
                    </RoundedCard>)
                }
            </div>
        </div>
    );
};

export default SortedItems;
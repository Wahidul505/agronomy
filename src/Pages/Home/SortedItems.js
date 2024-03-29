import React, { useEffect, useState } from 'react';
import RoundedCard from './RoundedCard';
import CountUp from 'react-countup';

const SortedItems = () => {
    const [sortedItems, setSortedItems] = useState([]);
    useEffect(() => {
        fetch('https://agronomy.onrender.com/sortedItemByQuantity')
            .then(res => res.json())
            .then(data => setSortedItems(data));
    }, [])
    return (
        <div>
            <p className='text-center text-gray-300 text-4xl'>Most Stored Products</p>
            <hr className='mb-6' />
            <div className='flex justify-between flex-col gap-6 md:gap-0 md:flex-row items-center lg:px-20'>
                {
                    sortedItems.map(item => <RoundedCard key={item._id}>
                        <p className='text-5xl text-green-300'>
                            <CountUp
                                end={item.quantity}
                                duration={6}
                            />
                        </p>
                        <p className='text-gray-300 font-semibold'>{item.name}</p>
                    </RoundedCard>)
                }
            </div>
        </div>
    );
};

export default SortedItems;
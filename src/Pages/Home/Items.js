import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemDetails from './ItemDetails';

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://agronomy-warehouse.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div>
            <h1 className='text-center text-4xl text-gray-200 mb-4'>Items</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left'>
            {
                items.map(item => <ItemDetails
                    key={item._id}
                    item={item}
                />)
            }
        </div>
        <p className='text-right mt-12'><Link to='/all-items' className='text-white hover:text-green-300 text-xl underline'>See All Items</Link></p>
        </div>
    );
};

export default Items;
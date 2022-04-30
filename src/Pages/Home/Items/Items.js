import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemDetails from '../ItemDetails/ItemDetails';

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://agronomy-warehouse.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {
                items.map(item => <ItemDetails
                    key={item._id}
                    item={item}
                />)
            }
        </div>
        <p className='text-right mt-12'><Link to='/manageInventories' className='text-white hover:text-green-300 text-xl underline'>Manage Inventories</Link></p>
        </div>
    );
};

export default Items;
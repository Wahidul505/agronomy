import React, { useEffect, useState } from 'react';
import ItemDetails from '../ItemDetails/ItemDetails';

const InventoryItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 px-6'>
            {
                items.map(item => <ItemDetails
                    key={item._id}
                    item={item}
                />)
            }
        </div>
    );
};

export default InventoryItems;
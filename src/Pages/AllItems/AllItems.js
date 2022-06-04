import React, { useEffect, useState } from 'react';
import ItemDetails from '../Home/ItemDetails';

const AllItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/all-items')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left'>
                {
                    items.map(item => <ItemDetails
                        key={item._id}
                        item={item}
                    />)
                }
            </div>
        </div>
    );
};

export default AllItems;
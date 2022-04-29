import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const id = useParams();
    const [item, setItem] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/item/${id}`)
        .then(res => res.json())
        .then(data => setItem(data));
    },[id]);
    return (
        <div>
            
        </div>
    );
};

export default Inventory;
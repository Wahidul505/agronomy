import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const {id} = useParams();
    const [item, setItem] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/item/${id}`)
        .then(res => res.json())
        .then(data => setItem(data));
    },[id]);
    return (
        <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className='md:col-span-2 text-white md:flex gap-3'>
                <img className='rounded-lg' src={item.image} alt="" />
                <div className='flex flex-col justify-between'>
                    <div>
                    <p className='text-2xl text-lime-200'>{item.name}</p>
                    <p><small>{item.description}</small></p>
                    <p className='text-lg'>Tk <span className='text-amber-300'>{item.price}</span></p>
                    <p className='text-lg'>Quantity: <span className='text-amber-300'>{item.quantity}</span></p>
                    </div>
                    <div className='border border-amber-200 rounded-lg px-2'>
                        <p><small>Supplier: {item.supplier}</small></p>
                        <p><small>Added by: {item.email? item.email:''}</small></p>
                    </div>
                </div>
            </div>
            <div>
                {/* div for updating quantity form  */}
            </div>
        </div>
    );
};

export default Inventory;
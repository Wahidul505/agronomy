import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemDetails = ({ item }) => {
    const { _id, name, image, description, price, quantity, supplier } = item;
    const navigate = useNavigate();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-white rounded'>
            <img className='w-60 h-full rounded' src={image} alt="" />
            <div className='flex flex-col justify-between'>
                <div>
                <p className='text-2xl text-amber-200'>{name}</p>
                <p>{description}</p>
                <div>
                    <p>Tk {price}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <p>From: {supplier}</p>
                </div>
                <button onClick={() => navigate(`/inventory/${_id}`)} className='mt-3 w-60 md:w-1/2 bg-white text-green-600 rounded px-1 font-semibold'>Modify</button>
            </div>
        </div>
    );
};

export default ItemDetails;
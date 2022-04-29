import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemDetails = ({ item }) => {
    const { _id, name, image, description, price, quantity, supplier } = item;
    const navigate = useNavigate();
    return (
        <div className='flex flex-col md:flex-row gap-4 bg-green-800 text-white rounded'>
            <img className='h-full' src={image} alt="" />
            <div>
                <p className='text-3xl'>{name}</p>
                <p>{description}</p>
                <div>
                    <p>Tk {price}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <p>From: {supplier}</p>
                <button onClick={() => navigate(`/inventory/${_id}`)} className='bg-white text-green-600 rounded px-1'>Modify</button>
            </div>
        </div>
    );
};

export default ItemDetails;
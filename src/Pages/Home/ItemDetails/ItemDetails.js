import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemDetails = ({ item }) => {
    const { _id, name, image, description, price, quantity, supplier } = item;
    const navigate = useNavigate();
    return (
        <div className='flex flex-col justify-between text-white rounded'>
            <img className='w-1/2 md:w-full h-72 rounded' src={image} alt="" />
            <p className='text-2xl text-amber-200'>{name}</p>
            <p className='text-gray-300'>{description}</p>
            <p className='text-lg'><span className='text-green-300'>Tk</span> {price}</p>
            <p><span className='text-green-300'>Quantity:</span> {quantity}</p>
            <p><span className='text-green-300'>Supplier:</span> {supplier}</p>
            <div>
                <button onClick={() => navigate(`/inventory/${_id}`)} className='mt-3 w-1/2 md:w-full bg-green-600 text-amber-200 rounded px-1 py-2 font-semibold'>Modify</button>
            </div>
        </div>
    );
};

export default ItemDetails;
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const ItemDetails = ({ item }) => {
    const [user] = useAuthState(auth);
    const { _id, name, image, description, price, quantity, email } = item;
    const navigate = useNavigate();
    return (
        <div className='flex flex-col justify-between text-white rounded py-8 md:px-8 overflow-hidden'>
            <img className='w-3/4 mx-auto md:w-full h-72 rounded' src={image} alt="" />
            <p className='text-2xl text-green-300'>{name}</p>
            <p className='text-gray-200'>{description}</p>
            <p className='text-lg'><span className='text-gray-400'>Tk</span> {price}</p>
            <p><span className='text-gray-400'>Quantity:</span> {quantity}</p>
            <p><span className='text-gray-400'>Added By:</span> {user?.email === email ? 'You' : email}</p>
            <div>
                {user?.email === email &&
                    <button
                        onClick={() => navigate(`/inventory/${_id}`)}
                        className='mt-3 w-3/4 md:w-full bg-teal-700 text-green-200 hover:bg-teal-600 rounded px-1 py-2 font-semibold'>Modify</button>
                }
            </div>
        </div>
    );
};

export default ItemDetails;
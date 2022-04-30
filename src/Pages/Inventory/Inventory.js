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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            <div className='lg:col-span-2'>
            <div className='text-white flex flex-col lg:flex-row gap-3 '>
                <img className='rounded-lg w-60' src={item.image} alt="" />
                <div className='flex flex-col justify-between'>
                    <div>
                    <p className='text-3xl text-lime-200'>{item.name}</p>
                    <p><small>{item.description}</small></p>
                    <p className='text-lg'>Tk <span className='text-yellow-300'>{item.price}</span></p>
                    <p className='text-lg'>Quantity: <span className='text-yellow-300'>{item.quantity}</span></p>
                    </div>
                    <div className='border border-amber-200 rounded-lg pl-2'>
                        <p><small>Supplier: <span className='text-lime-200'>{item.supplier}</span></small></p>
                        <p><small>Added by: <span className='text-lime-200'>{item.email? item.email:''}</span></small></p>
                        <p><small className='bg-gray-500 rounded px-1'>id:{id}</small></p>
                    </div>
                </div>
            </div>
            <button className='rounded bg-green-600 text-white hover:text-green-600 hover:bg-white text-xl cursor-pointer p-2 mt-4 w-full lg:w-60 mb-12 md:mb-0'>Delivered</button>
            </div>
            <div className='border-2 border-green-600 rounded-lg py-2'>
                <h1 className='text-center text-3xl text-green-600'>Restock this Item</h1>
                <hr className='w-2/3 mx-auto'/>
                <form className='flex flex-col mt-8 px-3'>
                    <label className='text-lg mb-1 text-gray-300' htmlFor="quantity">Quantity of Item to Restock</label>    
                    <input className='text-xl rounded p-2' type="number" name='quantity' id='quantity' placeholder='Enter a number of quantity' />
                    <input className='mt-4 p-2 rounded bg-green-600 text-white hover:text-green-600 hover:bg-white text-xl cursor-pointer' type="submit" value="Restock" />
                </form>
            </div>
        </div>
    );
};

export default Inventory;
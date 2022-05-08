import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';
import { BiLeftArrowAlt } from 'react-icons/bi';

const Inventory = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [quantity, setQuantity] = useState(0);
    useEffect(() => {
        fetch(`https://agronomy-warehouse.herokuapp.com/item/${id}`)
            .then(res => res.json())
            .then(data => {
                setItem(data);
            });
    }, [id]);

    useEffect(() => {
        setQuantity(item.quantity);
    }, [item])

    const handleDelivered = id => {
        fetch(`https://agronomy-warehouse.herokuapp.com/item/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity: quantity - 1 })
        }).then(res => res.json()).then(data => {
            setQuantity(quantity - 1);
        });
    };

    const handleRestock = (e, id) => {
        e.preventDefault();
        if (parseInt(e.target.quantity.value) < 0) {
            toast.error('Please Provide Positive Quantity', { id: 'quantityError' })
            return;
        }
        else if (parseInt(e.target.quantity.value) > 20) {
            toast.error("You can't Add more than 20 at a time", { id: 'quantityError' })
            return;
        }
        const totalQuantity = parseInt(quantity) + parseInt(e.target.quantity.value);
        fetch(`https://agronomy-warehouse.herokuapp.com/item/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity: totalQuantity })
        }).then(res => res.json()).then(data => {
            setQuantity(totalQuantity);
        })
    }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                <div className='lg:col-span-2'>
                    <div className='text-white flex flex-col lg:flex-row gap-3 '>
                        <img className='rounded-lg w-60' src={item.image} alt="" />
                        <div className='flex flex-col justify-between'>
                            <div>
                                <p className='text-3xl text-lime-200'>{item.name}</p>
                                <p><small>{item.description}</small></p>
                                <p className='text-lg'>Tk <span className='text-yellow-300'>{item.price}</span></p>
                                <p className='text-lg'>{quantity > 0 ? 'Quantity:' : 'Sold'} <span className='text-yellow-300'>{quantity > 0 && quantity}</span></p>
                            </div>
                            <div>
                                <p><small>Supplier: <span className='text-lime-200'>{item.supplier}</span></small></p>
                                <p><small>Added by: <span className='text-lime-200'>{item.email ? item.email : ''}</span></small></p>
                                <p><small className='bg-gray-500 rounded px-1'>id:{id}</small></p>
                                <button onClick={() => handleDelivered(item._id)} className={quantity > 0 ? 'rounded bg-green-600 text-white hover:text-green-600 hover:bg-white text-xl cursor-pointer p-2 mt-4 w-full lg:w-60 mb-12 md:mb-0' : 'hidden'}>Delivered</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-2 border-green-600 rounded-lg py-2'>
                    <h1 className='text-center text-3xl text-green-600'>Restock this item</h1>
                    <hr className='w-2/3 mx-auto' />
                    <form onSubmit={(e) => handleRestock(e, item._id)} className='flex flex-col mt-8 px-3'>
                        <label className='text-lg mb-1 text-gray-300' htmlFor="quantity">Quantity of Item to Restock</label>
                        <input className='text-xl rounded p-2' type="number" name='quantity' id='quantity' placeholder='Enter a number of quantity' required/>
                        <input className='mt-4 p-2 rounded bg-green-600 text-white hover:text-green-600 hover:bg-white text-xl cursor-pointer' type="submit" value="Restock" />
                    </form>
                </div>
            </div>
            <div className='flex justify-between mt-12'>
                <p className='flex gap-2 items-center text-white hover:text-green-300 text-xl underline'><BiLeftArrowAlt className='text-2xl'/><Link to='/home'>Back to Home</Link></p>
                <p ><Link to='/manageInventories' className='text-white hover:text-green-300 text-xl underline'>Manage Inventories</Link></p>
            </div>
        </div>
    );
};

export default Inventory;
import React, { useEffect, useState } from 'react';
import {MdOutlineAddBox} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const ManageInventory = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);
    const navigate = useNavigate();
    return (
        <div>
            <div className='flex justify-end mb-4'>
            <button onClick={()=>navigate('/addInventory')} className='flex items-center text-2xl gap-2 text-white hover:text-amber-200'><MdOutlineAddBox/> Add Item</button>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Supplier
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    {item.name}
                                </th>
                                <td className="px-6 py-4">
                                    {item.price} Tk
                                </td>
                                <td className="px-6 py-4">
                                    {item.quantity}
                                </td>
                                <td className="px-6 py-4">
                                    {item.supplier}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="font-medium text-red-400 hover:underline">Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageInventory;
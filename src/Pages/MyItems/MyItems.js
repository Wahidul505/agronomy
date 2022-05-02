import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const [items, setItems] = useState([]);
    const token = localStorage.getItem('token');
    useEffect(() => {
        if (email) {
            fetch(`https://agronomy-warehouse.herokuapp.com/myItem?email=${email}&token=${token}`)
                .then(res => res.json())
                .then(data => {
                    if (!data.success) {
                        toast.error(data.message, { id: 'unauthorizedError' });
                        signOut(auth);
                    }
                    else if (data.success) {
                        setItems(data.data);
                    }
                });
        }
    }, [email, token]);

    const handleDeleteMyItem = id => {
        const proceed = window.confirm();
        if (!proceed) {
            return;
        }
        fetch(`https://agronomy-warehouse.herokuapp.com/item/${id}`, {
            method: 'DELETE'
        }).then(res => res.json()).then(data => {
            const remaining = items.filter(item => item._id !== id);
            setItems(remaining);
        })
    };

    return (
        <div>
            <div>
                <h1 className='text-center mb-12 text-white text-2xl'>My Added Items</h1>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-400">
                    <thead className="text-xs uppercase bg-green-700 text-gray-200">
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
                            items.map(item => <tr key={item._id} className="border-b bg-gray-800 border-gray-700">
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
                                    <button onClick={() => handleDeleteMyItem(item._id)} className="font-medium text-red-400 hover:underline">Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyItems;
import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const clientApiKey = '3d4e0c493458422e88918029d453bae7';

const AddInventory = () => {
    const [image, setImage] = useState('');
    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const priceRef = useRef('');
    const quantityRef = useRef('');
    const [user] = useAuthState(auth);
    const email = user.email;
    const handleAddItem = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${clientApiKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.json()).then(data => {
            if (data.success) {
                const productInfo = {
                    name: nameRef.current.value,
                    image: data.data.url,
                    description: descriptionRef.current.value,
                    price: parseFloat(priceRef.current.value),
                    quantity: parseInt(Math.round(quantityRef.current.value)),
                    email: email
                };
                fetch('https://agronomy-warehouse.herokuapp.com/item', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(productInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (!data.success) {
                            toast.error(data.message, { id: 'addError' })
                        }
                        else {
                            toast.success(data.message, { id: 'addSuccess' });
                        }
                        e.target.reset();
                        setImage('');
                    });
            }
        })

    }
    return (
        <div className='w-5/6 md:w-1/2 mx-auto'>
            <h1 className='text-center text-2xl md:text-3xl text-amber-400'>Add New Item</h1>
            <hr className='w-2/3 mx-auto' />
            <form onSubmit={handleAddItem} className='flex flex-col mt-12 px-3 gap-4'>
                <input ref={nameRef} className='px-1 bg-transparent border-b-2 border-amber-400 text-xl text-white focus:outline-none' type="text" name='name' id='name' placeholder='Product Name' required autoComplete='off' />
                <input ref={descriptionRef} className='px-1 bg-transparent border-b-2 border-amber-400 text-xl text-white focus:outline-none' type="text" name='description' id='description' placeholder='Short description of Product' required autoComplete='off' />
                <input ref={priceRef} className='px-1 bg-transparent border-b-2 border-amber-400 text-xl text-white focus:outline-none' type="number" name='price' id='price' placeholder='Product Price' required autoComplete='off' />
                <input ref={quantityRef} className='px-1 bg-transparent border-b-2 border-amber-400 text-xl text-white focus:outline-none' type="number" name='quantity' id='quantity' placeholder='How much to Add (quantity)' required autoComplete='off' />
                <label htmlFor="image" className='border-2 rounded-lg border-amber-400 p-2 text-center text-white cursor-pointer text-lg'>Select an Image
                    <hr />
                    <span className='text-base text-gray-400'>{image.name}</span>
                </label>
                <input
                    onChange={e => setImage(e.target.files[0])}
                    className='hidden' type="file" name='image' id='image' required autoComplete='off' />
                <input className='font-semibold mt-4 p-2 rounded bg-amber-500 bg-opacity-90 text-white hover:text-orange-500 hover:bg-white text-xl cursor-pointer' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddInventory;
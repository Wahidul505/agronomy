import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddInventory = () => {
    const nameRef = useRef('');
    const imageRef = useRef('');
    const descriptionRef = useRef('');
    const priceRef = useRef('');
    const quantityRef = useRef('');
    const supplierRef = useRef('');
    const [user] = useAuthState(auth);
    const email = user.email;
    const handleAddItem = e => {
        e.preventDefault();
        const productInfo = {
            productName: nameRef.current.value,
            image: imageRef.current.value,
            description: descriptionRef.current.value,
            price: priceRef.current.value,
            quantity: quantityRef.current.value,
            supplier: supplierRef.current.value,
            email: email
        }
        fetch('http://localhost:5000/item', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }
    return (
        <div className='w-5/6 md:w-1/2 mx-auto'>
            <h1 className='text-center text-2xl md:text-3xl text-amber-200'>Add New Item</h1>
            <hr className='w-2/3 mx-auto' />
            <form onSubmit={handleAddItem} className='flex flex-col mt-12 px-3 gap-4'>
                <input ref={nameRef} className='px-1 bg-transparent border-b-2 border-amber-200 text-xl text-white focus:outline-none' type="text" name='name' id='name' placeholder='Product Name' required autoComplete='off' />
                <input ref={imageRef} className='px-1 bg-transparent border-b-2 border-amber-200 text-xl text-white focus:outline-none' type="text" name='image' id='image' placeholder='An Image of Product' required autoComplete='off' />
                <input ref={descriptionRef} className='px-1 bg-transparent border-b-2 border-amber-200 text-xl text-white focus:outline-none' type="text" name='description' id='description' placeholder='Short description of Product' required autoComplete='off' />
                <input ref={priceRef} className='px-1 bg-transparent border-b-2 border-amber-200 text-xl text-white focus:outline-none' type="number" name='price' id='price' placeholder='Product Price' required autoComplete='off' />
                <input ref={quantityRef} className='px-1 bg-transparent border-b-2 border-amber-200 text-xl text-white focus:outline-none' type="number" name='quantity' id='quantity' placeholder='How much to Add (quantity)' required autoComplete='off' />
                <input ref={supplierRef} className='px-1 bg-transparent border-b-2 border-amber-200 text-xl text-white focus:outline-none' type="text" name='supplier' id='supplier' placeholder='Supplier' required autoComplete='off' />
                <input className='font-semibold mt-4 p-2 rounded bg-amber-400 text-white hover:text-amber-500 hover:bg-white text-xl cursor-pointer' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddInventory;
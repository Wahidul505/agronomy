import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../../firebase.init';

const ResetPass = () => {
    const emailRef = useRef('');
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    const handleResetPassword = async e => {
        e.preventDefault();
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast.success('Email Sent to Reset Password', { id: 'resetSuccess' });
    }
    return (
        <div className='w-5/6 md:w-1/2 mx-auto'>
            <h1 className='text-center text-2xl md:text-3xl text-green-600'>Reset Your Password</h1>
            <hr className='w-2/3 mx-auto' />
            <form onSubmit={handleResetPassword} className='flex flex-col mt-12 px-3 gap-4'>
                <input ref={emailRef} className='px-1 bg-transparent border-b-2 border-green-700 text-xl text-white focus:outline-none' type="email" name='email' id='email' placeholder='Your Email Address' required />
                <input className='font-semibold mt-4 p-2 rounded bg-green-600 text-white hover:bg-green-500 text-xl cursor-pointer' type="submit" value="Reset" />
            </form>
        </div>
    );
};

export default ResetPass;
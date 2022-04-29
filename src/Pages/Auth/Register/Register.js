import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const [authError, setAuthError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        registerError,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const handleRegister = async e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        if(password !== confirmPassword){
            setPasswordError("Password didn't matched");
            return;
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    };
    console.log(user);
    return (
        <div className='w-5/6 md:w-1/2 mx-auto'>
            <h1 className='text-center text-2xl md:text-3xl text-green-700'>Create An Account</h1>
            <hr className='w-2/3 mx-auto' />
            <form onSubmit={handleRegister} className='flex flex-col mt-12 px-3 gap-4'>
                <input ref={nameRef} className='bg-transparent border-b-2 border-green-700 text-xl text-white focus:outline-none' type="text" name='name' id='name' placeholder='Enter Your Name' required/>
                <input ref={emailRef} className='bg-transparent border-b-2 border-green-700 text-xl text-white focus:outline-none' type="email" name='email' id='email' placeholder='Your Email Address' required/>
                <input ref={passwordRef} className='bg-transparent border-b-2 border-green-700 text-xl text-white focus:outline-none' type="password" name='password' id='password' placeholder='Enter a Password' required/>
                <input ref={confirmPasswordRef} className='bg-transparent border-b-2 border-green-700 text-xl text-white focus:outline-none' type="password" name='confirm_password' id='confirm_password' placeholder='Confirm Password' required/>
                <input className='mt-4 p-2 rounded bg-green-700 text-white hover:text-green-700 hover:bg-white text-xl cursor-pointer' type="submit" value="Register" />
            </form>
            <Link to='/login' className='underline text-yellow-200 md:text-lg px-3 hover:text-green-300'>Login?</Link>
            <SocialLogin />
        </div>
    );
};

export default Register;
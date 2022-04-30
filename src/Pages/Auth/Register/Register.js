import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import toast from 'react-hot-toast';

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
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
        if (password !== confirmPassword) {
            setPasswordError("Password didn't matched");
            return;
        }
        setPasswordError('');
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    };
    useEffect(() => {
        if (registerError || updateError) {
            toast.error('Something Went Wrong', { id: 'registerError' })
        }
        else if (user) {
            navigate(from, { replace: true });
        }
    }, [registerError, updateError, from, navigate, user]);
    return (
        <div className='w-5/6 md:w-1/2 mx-auto'>
            <h1 className='text-center text-2xl md:text-3xl text-green-700'>Create An Account</h1>
            <hr className='w-2/3 mx-auto' />
            <form onSubmit={handleRegister} className='flex flex-col mt-12 px-3 gap-4'>
                <input ref={nameRef} className='px-1 bg-transparent border-b-2 border-green-700 text-xl text-white focus:outline-none' type="text" name='name' id='name' placeholder='Enter Your Name' required />
                <input ref={emailRef} className='px-1 bg-transparent border-b-2 border-green-700 text-xl text-white focus:outline-none' type="email" name='email' id='email' placeholder='Your Email Address' required />
                <input ref={passwordRef} className='px-1 bg-transparent border-b-2 border-green-700 text-xl text-white focus:outline-none' type="password" name='password' id='password' placeholder='Enter a Password' required />
                <input ref={confirmPasswordRef} className='px-1 bg-transparent border-b-2 border-green-700 text-xl text-white focus:outline-none' type="password" name='confirm_password' id='confirm_password' placeholder='Confirm Password' required />
                {
                    passwordError && <p className='text-red-400'>{passwordError}</p>
                }
                <input className='font-semibold mt-4 p-2 rounded bg-green-700 text-white hover:text-green-700 hover:bg-amber-200 text-xl cursor-pointer' type="submit" value="Register" />
            </form>
            <Link to='/login' className='underline text-yellow-200 md:text-lg px-3 hover:text-green-300'>Login?</Link>
            <SocialLogin />
        </div>
    );
};

export default Register;
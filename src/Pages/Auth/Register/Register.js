import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import toast from 'react-hot-toast';
import Spinner from '../../Shared/Spinner/Spinner';
import useToken from '../../../hooks/useToken';

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
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, ] = useUpdateProfile(auth);

    const [token] = useToken(user);

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
        if (registerError) {
            toast.error('Something Went Wrong', { id: 'registerError' })
        }
        else if (token) {
            toast.success('Account Created', { id: 'registerSuccess' });
            toast.success('Verification Sent', { id: 'sendVerificationSuccess' });
            navigate(from, { replace: true });
        }
    }, [registerError, from, navigate, token]);
    if (loading || updating) {
        return <Spinner />
    }
    return (
        <div className='w-5/6 md:w-1/2 mx-auto'>
            <h1 className='text-center text-2xl md:text-3xl text-green-600'>Create An Account</h1>
            <hr className='w-2/3 mx-auto' />
            <form onSubmit={handleRegister} className='flex flex-col mt-12 px-3 gap-4'>
                <input ref={nameRef} className='px-1 bg-transparent border-b-2 border-green-700 text-xl text-white focus:outline-none' type="text" name='name' id='name' placeholder='Enter Your Name' required />
                <input ref={emailRef} className='px-1 bg-transparent border-b-2 border-green-700 text-xl text-white focus:outline-none' type="email" name='email' id='email' placeholder='Your Email Address' required />
                <input ref={passwordRef} className='px-1 bg-transparent border-b-2 border-green-700 text-xl text-white focus:outline-none' type="password" name='password' id='password' placeholder='Enter a Password' required />
                <input ref={confirmPasswordRef} className='px-1 bg-transparent border-b-2 border-green-700 text-xl text-white focus:outline-none' type="password" name='confirm_password' id='confirm_password' placeholder='Confirm Password' required />
                {
                    passwordError && <p className='text-red-400'>{passwordError}</p>
                }
                <input className='font-semibold mt-4 p-2 rounded bg-green-600 text-white hover:bg-green-500 text-xl cursor-pointer' type="submit" value="Register" />
            </form>
            <Link to='/login' className='underline text-yellow-200 md:text-lg px-3 hover:text-green-300'>Login?</Link>
            <SocialLogin />
        </div>
    );
};

export default Register;
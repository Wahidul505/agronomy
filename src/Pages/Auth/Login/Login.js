import React, { useEffect, useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleLogin = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    };
    useEffect(() => {
        if (error) {
            if (error.message.includes('wrong-password')) {
                toast.error('Wrong Password', { id: 'loginError' });
            }
            else if (error.message.includes('user-not-found')) {
                toast.error('Invalid User', { id: 'loginError' });
            }
            else {
                toast.error('Something Went Wrong', { id: "loginError" });
            }
        }
        if (user) {
            navigate(from, { replace: true });
        }
    }, [error, navigate, from, user]);
    return (
        <div className='w-5/6 md:w-1/2 mx-auto'>
            <h1 className='text-center text-2xl md:text-3xl text-green-700'>Login to Your Account</h1>
            <hr className='w-2/3 mx-auto' />
            <form onSubmit={handleLogin} className='flex flex-col mt-12 px-3 gap-4'>
                <input ref={emailRef} className='px-1 bg-transparent border-b-2 border-green-700 text-xl text-white focus:outline-none' type="email" name='email' id='email' placeholder='Your Email Address' required />
                <input ref={passwordRef} className='px-1 bg-transparent border-b-2 border-green-700 text-xl text-white focus:outline-none' type="password" name='password' id='password' placeholder='Password' required />
                <input className='mt-4 p-2 rounded bg-green-700 text-white hover:text-green-700 hover:bg-white text-xl cursor-pointer' type="submit" value="Login" />
            </form>
            <Link to='/register' className='underline text-yellow-200 md:text-lg px-3 hover:text-green-300'>Create an Account</Link>
            <p className='text-right text-yellow-200 md:text-lg px-3 hover:text-green-300'><button>Forgot Password?</button></p>
            <SocialLogin />
        </div>
    );
};

export default Login;
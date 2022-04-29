import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div className='w-5/6 md:w-1/2 mx-auto'>
            <h1 className='text-center text-2xl md:text-3xl text-green-700'>Login to Your Account</h1>
            <hr className='w-2/3 mx-auto' />
            <form className='flex flex-col mt-12 px-3 gap-4'>
                <input className='bg-transparent border-b-2 border-green-700 text-xl text-white focus:outline-none' type="email" name='email' id='email' placeholder='Your Email Address' />
                <input className='bg-transparent border-b-2 border-green-700 text-xl text-white focus:outline-none' type="password" name='password' id='password' placeholder='Password' />
                <input className='mt-4 p-2 rounded bg-green-700 text-white hover:text-green-700 hover:bg-white text-xl cursor-pointer' type="submit" value="Login" />
            </form>
            <Link to='/register' className='underline text-yellow-200 md:text-lg px-3 hover:text-green-300'>Create an Account</Link>
            <p className='text-right text-yellow-200 md:text-lg px-3 hover:text-green-300'><button>Forgot Password?</button></p>
            <SocialLogin />
        </div>
    );
};

export default Login;
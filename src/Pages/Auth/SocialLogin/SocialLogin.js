import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div className='px-4'>
            <div className='flex items-center gap-3 px-3 mb-4'>
                <div className='h-1 border-b border-yellow-200 w-full'>
                </div>
                <h1 className='text-lg text-white'>OR</h1>
                <div className='h-1 border-b border-yellow-200 w-full'>
                </div>
            </div>
            <button className='flex justify-center items-center gap-4 text-white md:text-xl border border-white rounded-2xl w-full py-2 hover:bg-white hover:text-black'><FcGoogle className='text-xl md:text-2xl' /> Google Sign In</button>
        </div>
    );
};

export default SocialLogin;
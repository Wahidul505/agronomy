import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    useEffect(() => {
        if (error) {
            toast.error('Something Went Wrong', { id: 'socialLoginError' })
        }
        else if (user) {
            navigate(from, { replace: true });
        }
    }, [error, from, navigate, user]);
    return (
        <div className='px-4'>
            <div className='flex items-center gap-3 px-3 mb-4'>
                <div className='h-1 border-b border-yellow-200 w-full'>
                </div>
                <h1 className='text-lg text-white'>OR</h1>
                <div className='h-1 border-b border-yellow-200 w-full'>
                </div>
            </div>
            <button onClick={() => signInWithGoogle()} className='flex justify-center items-center gap-4 text-white md:text-xl border border-white rounded-2xl w-full py-2 hover:bg-white hover:text-black'><FcGoogle className='text-xl md:text-2xl' /> Google Sign In</button>
        </div>
    );
};

export default SocialLogin;
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { IoIosMenu } from 'react-icons/io';
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [show, setShow] = useState(false);
    const { pathname } = useLocation();
    const [header, setHeader] = useState('');
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (pathname === '/' || pathname === '/home') {
            setHeader('Home');
            setShow(false);
        }
        else if (pathname === '/register') {
            setHeader('Create Account');
            setShow(false);
        }
        else if (pathname === '/login') {
            setHeader('Login');
            setShow(false);
        }
        else if (pathname.includes('inventory/')) {
            setHeader('Inventory');
            setShow(false);
        }
        else if (pathname === '/manageInventories') {
            setHeader('Manage Inventories');
            setShow(false);
        }
        else if (pathname === '/add-item') {
            setHeader('Add Item');
            setShow(false);
        }
        else if (pathname === '/myItems') {
            setHeader('My Products');
            setShow(false);
        }
        else if (pathname === '/blogs') {
            setHeader('Blogs');
            setShow(false);
        }
        else if (pathname === '/survey') {
            setHeader('Products Survey');
            setShow(false);
        }
        else if (pathname === '/all-items') {
            setHeader('All Items');
            setShow(false);
        }
        else {
            setHeader('');
        }
    }, [pathname]);
    return (
        <div className='nav-bar mb-24 h-fit'>
            <div className='flex flex-col md:flex-row justify-between p-4 md:px-10 text-white h-fit'>
                <img onClick={() => navigate('/')} className='-mt-10 md:-mt-12 -ml-4 w-24 md:w-32 h-24 md:h-32 cursor-pointer' src="https://i.ibb.co/W59qgww/agronomy-01-2-1.png" alt="" />
                <nav className={`flex gap-1 md:gap-6 lg:text-lg md:flex md:flex-row lg:items-center items-start h-fit ${show ? 'flex-col' : 'hidden'}`}>
                    <NavLink to='/home'>Home</NavLink>
                    <NavLink to='/blogs'>Blogs</NavLink>
                    <NavLink to='/survey'>Survey</NavLink>
                    {
                        !user ?
                            <>
                                <NavLink to='/register' className='underline'>Register</NavLink>
                                <NavLink to='/login' className='underline'>Login</NavLink>
                            </>
                            :
                            <>
                                <NavLink to='/add-item'>Add Item</NavLink>
                                <NavLink to='/myItems'>My Items</NavLink>
                                <span className='bg-gray-700 h-fit p-1 rounded-lg overflow-hidden'>{user?.displayName}</span>
                                <span><button onClick={() => signOut(auth)} className='underline'>Logout</button></span>
                            </>
                    }
                </nav>
                <button className='md:hidden absolute top-2 right-3 text-3xl' onClick={() => setShow(!show)}>{show ? <IoMdClose /> : <IoIosMenu />}</button>
            </div>
            <div className='h-40 md:h-60 lg:h-72 flex items-center font-semibold'>
                <div className='px-4 md:px-12'>
                    <p className='text-green-300 text-xl'> / /  Welcome to Agronomy Warehouse</p>
                    <h1 className='text-white text-3xl'>{header}</h1>
                </div>
            </div>
        </div>
    );
};

export default Header;
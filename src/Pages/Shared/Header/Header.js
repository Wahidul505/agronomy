import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
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
    useEffect(() => {
        if (pathname === '/' || pathname === '/home') {
            setHeader('Home')
        }
        else if (pathname === '/register') {
            setHeader('Create Account')
        }
        else if (pathname === '/login') {
            setHeader('Login')
        }
        else if (pathname.includes('inventory/')) {
            setHeader('Inventory')
        }
        else if(pathname === '/manageInventories'){
            setHeader('Manage Inventories')
        }
        else if(pathname === '/addInventory'){
            setHeader('Add Item')
        }
        else if(pathname === '/myItems'){
            setHeader('My Products')
        }
    }, [pathname]);
    return (
        <div className='nav-bar mb-24'>
            <div className='flex flex-col md:flex-row justify-between p-4 md:px-12 gap-2 text-white'>
                <h1 className='text-3xl'>Agronomy</h1>
                <nav className={`flex gap-1 md:gap-6 text-xl md:flex md:flex-row ${show ? 'flex-col' : 'hidden'}`}>
                    <NavLink to='/home'>Home</NavLink>

                    {
                        !user ?
                            <>
                                <NavLink to='/register' className='underline'>Register</NavLink>
                                <NavLink to='/login' className='underline'>Login</NavLink>
                            </>
                            :
                            <>
                                <NavLink to='/manageInventories'>Manage</NavLink>
                                <NavLink to='/addInventory'>Add</NavLink>
                                <NavLink to='/myItems'>My Items</NavLink>
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
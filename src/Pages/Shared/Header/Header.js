import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { IoIosMenu } from 'react-icons/io';
import './Header.css';

const Header = () => {
    const [show, setShow] = useState(false);
    const { pathname } = useLocation();
    const [header, setHeader] = useState('');
    useEffect(()=>{
        if (pathname === '/' || pathname === '/home') {
            setHeader('Home')
        }
        else if (pathname === '/register') {
            setHeader('Create Account')
        }
        else if (pathname === '/login') {
            setHeader('Login')
        }
    },[pathname])
    return (
        <div className='nav-bar'>
            <div className='flex flex-col md:flex-row justify-between p-4 md:px-12 gap-2 text-white'>
                <h1 className='text-3xl'>Agronomy</h1>
                <nav className={`flex gap-1 md:gap-6 text-xl md:flex md:flex-row ${show ? 'flex-col' : 'hidden'}`}>
                    <NavLink to='/home'>Home</NavLink>
                    <NavLink to='/manageItems'>Manage</NavLink>
                    <NavLink to='/addItem'>Add</NavLink>
                    <NavLink to='/register'>Register</NavLink>
                    <NavLink to='/login'>Login</NavLink>
                </nav>
                <button className='md:hidden absolute top-2 right-3 text-3xl' onClick={() => setShow(!show)}>{show ? <IoMdClose /> : <IoIosMenu />}</button>
            </div>
            <div className='h-40 md:h-60 lg:h-72 flex items-center font-semibold'>
                <div className='px-4 md:px-12'>
                <p className='text-green-300 text-xl'> / /  Welcome to Our Warehouse</p>
                <h1 className='text-white text-3xl'>{header}</h1>
                </div>
            </div>
        </div>
    );
};

export default Header;
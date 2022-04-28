import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { IoIosMenu } from 'react-icons/io';

const Header = () => {
    const [show, setShow] = useState(false);
    return (
        <div className='flex flex-col md:flex-row justify-between p-2 md:px-6 bg-green-500 text-white gap-2'>
            <h1 className='text-3xl'>Agronomy</h1>
            <nav className={`flex gap-1 md:gap-6 text-xl md:flex md:flex-row ${show? 'flex-col': 'hidden'}`}>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/manageItems'>Manage</NavLink>
                <NavLink to='/addItem'>Add</NavLink>
                <NavLink to='/register'>Register</NavLink>
                <NavLink to='/login'>Login</NavLink>
            </nav>
            <button className='md:hidden absolute top-2 right-3 text-3xl' onClick={() => setShow(!show)}>{show ? <IoMdClose /> : <IoIosMenu />}</button>
        </div>
    );
};

export default Header;
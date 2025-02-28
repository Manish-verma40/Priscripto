import React, { useContext, useState } from "react";
import logo from "../assets/logo.svg";

import dropDown from "../assets/dropdown_icon.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
const Navbar=()=>{
    const navigate=useNavigate();
    const [showMenu,setShowMenu]=useState(false);
    const {token,setToken,userData}=useContext(AppContext);
    const logout=()=>{
        setToken(false);
        localStorage.removeItem('token');
    }
    
    return (
        <div className='flex item-center justify-between text-sm py-5 mb-5 border-b border-b-gray-400'>
   <img onClick={()=>{navigate('/')}}className='w-44 cursor-pointer' src={logo} alt="" />
   <ul className='hidden md:flex items-start gap-5 font-medium'>
    <NavLink to='/'>
        <li className='py-1'>HOME</li>
        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'></hr>
    </NavLink>
    <NavLink to='/doctors'>
        <li className='py-1'>ALL DOCTORS</li>
        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'></hr>
    </NavLink>
    <NavLink to='/about'>
        <li className='py-1'>ABOUT</li>
        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'></hr>
    </NavLink>
    <NavLink to='/contact'>
        <li className='py-1'>CONTACT</li>
        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'></hr>
    </NavLink>
   </ul>
   <div className="flex item-center gap-4">
    {
        token && userData
        ? <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 rounded-full'src={userData.image} alt=""></img>
            <img className='w-2.5' src={dropDown} alt=""></img>
            <div className="absolute top-0 right--0.5 pt-14 text-base font-medium text-gray-600 hidden group-hover:block">
                <div className="min-w-70 bg-stone-100 rounded flex flex-col gap-4 p-4">
                    <p onClick={()=>navigate('my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                    <p onClick={()=>navigate('/my-appointments')} className="hover:text-black cursor-pointer">MyAppointments</p>
                    <p onClick={logout} className="hover:text-black cursor-pointer">Logout</p>
                </div>
            </div>

        </div>
        : <button className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block' onClick={()=>navigate('/login')}>Create Account</button>
    }
   
   </div>
        </div>
    )
}
export default Navbar;
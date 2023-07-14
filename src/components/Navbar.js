import React, { useState } from 'react'
import { CgMenu, CgClose } from "react-icons/cg";
import { FaUserAlt, FaHeart, FaStore, FaShoppingBag } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { HiShoppingCart } from "react-icons/hi";
import { FiPower } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(true)
  const { cart } = useCartContext();
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [open, setOpen] = useState(false);

  const toggleAccordion = () => {
    setOpen(!open);
  };
  return (
    <>
      {/* Sidebar */}
      <div className={sideBar ? 'hidden' : `md:hidden`}>
        <div className='bg-[#ffffff] h-full w-4/5 absolute'>
          <ul className='divide-y divide-gray-300 space-y-1'>
            <li className='bg-[#3f88fe] text-white font-bold text-lg'>
              <span className='grid grid-cols-6 p-2'>
                {isAuthenticated ? (
                  <span className='col-span-4 mx-1 flex'>
                    <img src={user.picture} alt={user.name} className='mt-1 mx-4 h-10 w-fit' />
                    <span className='mx-1'>{user.name}</span>
                  </span>
                ) :
                  <>
                    <FaUserAlt className='mt-1 mx-4' />
                    <button onClick={() => loginWithRedirect()} className='col-span-4 mx-1'>Login & Signup</button>
                  </>
                }
                <CgClose className='right-0 absolute m-1.5' onClick={() => setSideBar(true)} />
              </span>
            </li>
            <li>
              <Link className='flex items-center space-x-4 ml-4 p-2' to='/' onClick={() => setSideBar(true)}>
                <BiCategory className='text-[#484848]' />
                <span className='text-[#727272] text-sm font-semibold'>All Categories</span>
              </Link>
            </li>
            <li>
              <Link className='flex items-center space-x-4 ml-4 p-2' to='/' onClick={() => setSideBar(true)}>
                <FaStore className='text-[#666666]' />
                <span className='text-[#727272] text-sm font-semibold'>Trending Store</span>
              </Link>
            </li>
            <li>
              <Link className='flex items-center space-x-4 ml-4 p-2' to='/' onClick={() => setSideBar(true)}>
                <HiShoppingCart className='text-[#666666]' />
                <span className='text-[#727272] text-sm font-semibold'>My Cart</span>
              </Link>
            </li>
            <li>
              <Link className='flex items-center space-x-4 ml-4 p-2' to='/' onClick={() => setSideBar(true)}>
                <FaHeart className='text-[#666666]' />
                <span className='text-[#727272] text-sm font-semibold'>My Wishlist</span>
              </Link>
            </li>
            <li>
              <Link className='flex items-center space-x-4 ml-4 p-2' to='/' onClick={() => setSideBar(true)}>
                <FaShoppingBag className='text-[#666666]' />
                <span className='text-[#727272] text-sm font-semibold'>Sell on Onlie~Store</span>
              </Link>
            </li>
            <li>
              <Link className='flex items-center space-x-4 ml-4 p-2' to='/' onClick={() => setSideBar(true)}>
                <FaUserAlt className='text-[#666666]' />
                <span className='text-[#727272] text-sm font-semibold'>My Account</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className='text-white bg-[#2874f0] md:sticky top-0'>

        {/* Logo and Hamburger */}
        <div className=' flex justify-center items-center space-x-6'>
          <CgMenu className='md:hidden' onClick={() => setSideBar(false)} />
          <Link to='/' alt='logo' className='md:order-1 py-3 mx-4 font-[Wide Latin] font-bold italic text-2xl'>Online~Store</Link>

          {/* Search md screen */}
          <input type='text' placeholder='Search' className='md:order-2 p-4 h-1 w-[24rem] shadow-lg shadow-blue-500/50 rounded hidden md:block' />

          {/* Cart Icon */}
          <Link to='/cart' type="button" className="md:order-5 inline-flex items-center px-2 py-2.5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <div className="w-5 h-5 text-xs bg-red-500 border-2 rounded-full -mx-2 -mt-4 pl-1">{cart.length}</div>
          </Link>

          {/* Other Link */}
          <div className='md:order-4 hidden md:block space-x-8 mx-8 font-sans font-semibold'>
            <Link className='' to='/allproducts'>All Product</Link>
          </div>

          {/* Login and logout Button */}
          {isAuthenticated ? (
            <div className='md:order-3'>
              <div className='relative'>
                <div className='cursor-pointer flex space-x-1' onMouseEnter={toggleAccordion} onMouseLeave={toggleAccordion}>
                  <div className='w-2 h-2 rounded-full bg-red-500 flex self-center'></div>
                  <h2>{user.name.split(" ")[0]}</h2>
                </div>
                {open && (
                  <div className='absolute top-full left-0 border rounded-md border-blue-500' onMouseEnter={() => setOpen(true)} onMouseLeave={toggleAccordion}>
                    <div className='flex md:bg-white md:text-[#2874f0] p-1 h-10 md:w-28 space-x-3'>
                      <FiPower className='flex self-center' />
                      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className=''>Logout</button>
                    </div>
                  </div>
                )}
              </div>

            </div>
          ) : (
            <button onClick={() => loginWithRedirect()} className='md:order-3 md:bg-white md:text-[#2874f0] h-7 md:w-28'>Login</button>
          )}
        </div>
      </nav>

      {/* Search -> small screen */}
      <div className='bg-[#2874f0] md:hidden p-2'>
        <input type='text' placeholder='Search' className='w-full p-4 h-1 rounded' />
      </div>
    </>
  )
}

export default Navbar

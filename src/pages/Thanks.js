import React from 'react';
import { Link } from 'react-router-dom';

const Thanks = () => {
  return (
    <div className='bg-gray-200 px-10 py-6 '>
      <div className="bg-white flex flex-col justify-center items-center p-8 space-y-2">

        <div className="text-3xl">Thank You for Shoping</div>
        <div className="text-lg">Shop More Item</div>
        <div className="py-5"><Link to='/allproducts' className="bg-[#2874f0] text-white px-16 py-2 text-sm font-semibold">Shop now</Link></div>
      </div>
    </div>
  )
}

export default Thanks

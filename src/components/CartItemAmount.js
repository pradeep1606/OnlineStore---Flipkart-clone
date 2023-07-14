import React from 'react';
import { HiOutlinePlusSm, HiOutlineMinusSm } from "react-icons/hi";

const CartItemAmount = ({ amount, setDecrease, setIncrease }) => {
    return (
        <>
            <div className='space-x-2 flex justify-center items-center text-sm'>
                <button onClick={() => setDecrease()} className='border rounded-full p-1 border-[#979797]'><HiOutlineMinusSm /></button>
                <span className='border px-5 py-[0.10rem] border-[#979797]'>{amount}</span>
                <button onClick={() => setIncrease()} className='border rounded-full p-1 border-[#979797]'><HiOutlinePlusSm /></button>
            </div>
        </>
    )
}

export default CartItemAmount

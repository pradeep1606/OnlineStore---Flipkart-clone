import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';

const FilterProductImage = (currElem) => {
    const { _id, name, image, color, price, rating, reviews } = currElem;
    let sname = name.slice(0, 25)
    return (
        <>
            <Link to={`/SingleProduct/${_id}`} className='p-4 main group cursor-pointer hover:shadow-xl h-[auto]'>
                <div className='flex justify-center items-center h-[65%] p-2'>
                    <img className='' src={image[0]} alt='product' />
                </div>
                <div className='ml-2 pb-4 mt-2'>
                    <div className='group-hover:text-[#3a84fa]'>{sname}...</div>
                    <div className='text-[#7a7979] text-sm cursor-auto'>{color}</div>
                    <div className='flex mt-1 space-x-2 cursor-auto'>
                        <span className='flex items-center bg-[#388e3c] p-1 text-white text-xs rounded'>{rating}<AiFillStar /></span>
                        <span className='text-[#7a7979]'>({reviews} Reviews)</span>
                    </div>
                    <div className='mt-1 font-[Arial]'>&#8377;{price.toLocaleString("en-IN")}</div>
                </div>
            </Link>
        </>
    )
}

export default FilterProductImage

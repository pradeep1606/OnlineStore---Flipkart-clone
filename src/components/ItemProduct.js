import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const ItemProduct = (currElem) => {
    const navigate = useNavigate();
    const { _id, image, category, featured_Name, company, price } = currElem;
    // console.log(currElem);

    const inrPrice = price.toLocaleString("en-IN");
    const company1 = company.charAt(0).toUpperCase() + company.slice(1);

    return (
        <>
            <div onClick={()=>navigate(`/SingleProduct/${_id}`)} className='md:h-80 md:grid md:grid-rows-5 md:mt-6 cursor-pointer'>
                <img className={`md:row-span-3 self-center ${category === 'mobile' ? 'md:h-[110%]' : ''} md:hover:scale-105 ease-in transition duration-75`} src={image[0]} alt={company} />
                <span className='md:row-span-2 mx-auto'>
                    <p className='text-sm font-semibold md:mt-4'> {featured_Name}</p>
                    <p className='text-green-600'> &#8377;{inrPrice}</p>
                    <Link to={"/allproducts"} className='text-[#666666] text-sm'>See more {company1 + " " + category}</Link>
                </span>
            </div>
        </>
    )
}

export default ItemProduct

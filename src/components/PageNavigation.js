import React from 'react'
import { Link } from 'react-router-dom'

export const PageNavigation = ({ title, company, category }) => {
    const Title = title.slice(0, 20);
    const Category = category.charAt(0).toUpperCase() + category.slice(1);
    return (
        <>
            <div className='text-[#8c8c8c] text-sm font-sans space-x-2'>
                <Link className='hover:text-[#2975f0]' to="/">Home</Link> {" > "}
                <Link className='hover:text-[#2975f0]' to="/">{Category}</Link> {" > "}
                <Link className='hover:text-[#2975f0]' to="/">{company} {Category}</Link> {" > "}
                <span className=''>{Title}...</span>
            </div>
        </>
    )
}

export const AllProductsNavigation = () => {
    return (
        <>
            <div className='text-[#8c8c8c] text-sm font-sans space-x-2'>
                <Link className='hover:text-[#2975f0]' to="/">Home</Link> {" > "}
                <Link className='hover:text-[#2975f0]' to="/allproducts">All Product</Link> {" > "}
            </div>
        </>
    )
}


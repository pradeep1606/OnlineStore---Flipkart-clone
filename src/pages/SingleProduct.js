import React, { useEffect } from 'react'
import { BsFillLightningFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import { useProductContext } from '../context/productcontex';
import { PageNavigation } from '../components/PageNavigation';
import ProductImages from '../components/ProductImages';
import AddToCart from '../components/AddToCart';

const API = "https://shoping-api.cyclic.app/api/products";

const SingleProduct = () => {
  const { getSingleProduct, singleProduct, isSingleLoading } = useProductContext();
  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`)
    // eslint-disable-next-line
  }, [])

  let { name, company, color, image, description, rating, reviews, price, category } = singleProduct;

  if (isSingleLoading) {
    return <div>Loading...</div>
  }

  const mrp = Math.round(price / (1 - 0.4));

  const highlights = description.split(", ");

  return (
    <>
      <div className='flex p-4 my-3'>
        <div className='w-[38%]'>
          <ProductImages imgs={image} />
          <div className='flex justify-end gap-3 text-white text-base font-semibold my-8'>
            <AddToCart product={singleProduct} />
            <button className='w-48 h-14 bg-orange-500 flex items-center justify-center'><BsFillLightningFill />&nbsp;BUY NOW</button>
          </div>
        </div>
        {/* description Div */}
        <div className='w-[62%] pl-8'>
          <div> <PageNavigation title={name} company={company} category={category} /></div>
          <div className='mt-2'>
            <div className='text-xl'>{name} ({color})</div>
            <div className='mt-2 font-semibold text-sm flex space-x-2'>
              <span className='flex items-center bg-[#388e3c] px-1 text-white text-xs rounded'>{rating}<AiFillStar /></span>
              <span className='text-[#7a7979]'>Rating & {reviews} Reviews</span>
            </div>
            <div className='mt-4 font-[Arial] space-x-4'>
              <span className='text-3xl text-[#1d1616]'>&#8377;{price.toLocaleString("en-IN")}</span>
              <del className='text-[#7a7979] font-sans'>&#8377;{mrp.toLocaleString("en-IN")}</del>
              <span className='text-[#388e3c] font-sans font-semibold'>40% off</span>
            </div>
          </div>
          <div className='mt-8 grid grid-cols-4 w-[60%]'>
            <div className='text-gray-500 font-sans text-sm font-semibold'>Highlights</div>
            <div className='col-span-3'>
              <ul className='marker:text-[#bfbfbf] list-disc space-y-4'>
                {highlights.map((data, index) => {
                  return <li key={index}>&nbsp;{data}</li>
                })}
              </ul>
            </div>
          </div>
          <div className='mt-8 grid grid-cols-4 w-[60%]'>
            <div className='text-gray-500 font-sans text-sm font-semibold'>Brand</div>
            <div className='col-span-3'>
              <ul className='marker:text-[#bfbfbf] list-disc'>
                <li>{company.charAt(0).toUpperCase() + company.slice(1)}</li>
              </ul>
            </div>
          </div>
          <div className='mt-8 grid grid-cols-4 w-[60%]'>
            <div className='text-gray-500 font-sans text-sm font-semibold'>Color</div>
            <div className='col-span-3'>
              <ul className='marker:text-[#bfbfbf] list-disc'>
                <li>{color}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProduct

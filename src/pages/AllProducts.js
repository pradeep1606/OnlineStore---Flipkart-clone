import React, { useState } from 'react'
import { AllProductsNavigation } from '../components/PageNavigation'
import Filter from '../components/Filter'
import { useFilterContext } from '../context/filter_context.js'
import AllProductsImage from '../components/AllProductsImage.js'

const AllProducts = () => {
  const { filter_products, sorting } = useFilterContext();

  const [activeButton, setActiveButton] = useState();

  const handleClick = (event) => {
    const buttonId = event.target.id;
    sorting(event);
    setActiveButton(buttonId);
  }

  return (
    <div className='bg-gray-200 p-2'>
      <div className='grid grid-cols-5'>
        {/* filter */}
        <Filter />

        {/* Product */}
        <div className='col-span-4 bg-white divide-y ml-2'>
          <div className='p-4'>
            <AllProductsNavigation />
            <div className='space-x-2'>
              <span className='font-semibold text-lg'>Mobiles</span>
              <span className='text-[#7a7979] text-sm'> (Showing {filter_products.length} products)</span>
            </div>
            <div className='mt-3 flex'>
              <div><span className='font-semibold mr-6'>Sort By</span></div>
              <div className='space-x-6 text-sm pt-[.18rem]'>
                <button className={`font-semibold ${activeButton === 'low' ? 'underline underline-offset-8 text-[#2975f0]' : ''}`} id='low' onClick={handleClick}>Price -- Low to High </button>
                <button className={`font-semibold ${activeButton === 'high' ? 'underline underline-offset-8 text-[#2975f0]' : ''}`} id='high' onClick={handleClick}>Price -- High to Low</button>
              </div>
            </div>
          </div>
          {filter_products.length === 0 ? <div className='flex justify-center pt-24 font-semibold'>No Products Available</div> :
            <div className='grid grid-cols-4 divide-y'>
              {filter_products.map((currElem) => {
                return <AllProductsImage key={currElem._id} {...currElem} />
              })}
            </div>}
        </div>
      </div>
    </div>
  )
}

export default AllProducts

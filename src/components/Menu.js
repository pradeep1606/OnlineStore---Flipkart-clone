import React from 'react'
import grocery from '../images/grocery.webp'
import mobile from '../images/mobile.webp'
import fashion from '../images/fashion.webp'
import electronics from '../images/electronics.webp'
import home from '../images/home.webp'
import appliances from '../images/appliances.webp'
import toy from '../images/toy.webp'
import bike from '../images/bike.webp'

const Menu = () => {
  return (
    <div className='flex overflow-x-auto space-x-5 p-2 bg-white items-center text-center text-sm md:justify-center md:space-x-12 shadow-md'>
      <span><img className='h-10 w-10 md:h-16 md:w-16' src={grocery} alt="grocery" /> Grocery</span>
      <span><img className='h-10 w-10 md:h-16 md:w-16' src={mobile} alt="grocery" /> Mobile</span>
      <span><img className='h-10 w-10 md:h-16 md:w-16' src={fashion} alt="grocery" /> Fashion</span>
      <span><img className='h-10 w-10 md:h-16 md:w-16' src={electronics} alt="grocery" /> Electronics</span>
      <span><img className='h-10 w-10 md:h-16 md:w-16' src={home} alt="grocery" /> Home</span>
      <span><img className='h-10 w-10 md:h-16 md:w-16' src={appliances} alt="grocery" /> Appliances</span>
      <span><img className='h-10 w-10 md:h-16 md:w-16' src={toy} alt="grocery" /> Toy_&_More</span>
      <span><img className='h-10 w-10 md:h-16 md:w-16' src={bike} alt="grocery" /> Bike</span>
      <span><img className='h-10 w-10 md:h-16 md:w-16' src={home} alt="grocery" /> Home</span>
      <span><img className='h-10 w-10 md:h-16 md:w-16' src={home} alt="grocery" /> Home</span>
      <span><img className='h-10 w-10 md:h-16 md:w-16' src={appliances} alt="grocery" /> Appliances</span>
    </div>
  )
}

export default Menu

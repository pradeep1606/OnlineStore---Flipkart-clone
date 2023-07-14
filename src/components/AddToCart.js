import React from 'react'
import { Link } from 'react-router-dom'
import { HiShoppingCart } from "react-icons/hi";
import { useCartContext } from '../context/cart_context';

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const amount = 1
  return (
    <div>
      <Link to='/cart' onClick={() => addToCart(amount, product)} className='w-48 h-14 bg-yellow-500 flex items-center justify-center'><HiShoppingCart />&nbsp;ADD TO CART</Link>
    </div>
  )
}

export default AddToCart

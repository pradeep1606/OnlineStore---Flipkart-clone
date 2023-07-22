import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/cart_context';

const AddToCart = ({ product, btncolor, buttonName, icon }) => {
  const { addToCart } = useCartContext();
  const amount = 1
  return (
    <div>
      <Link to='/cart' onClick={() => addToCart(amount, product)} className={`${btncolor} w-48 h-14 flex items-center justify-center`}>{icon}&nbsp;{buttonName}</Link>
    </div>
  )
}

export default AddToCart

import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import CartItemAmount from "../components/CartItemAmount";

const Cart = (singleProduct) => {
    const { cart, removeItem, setDecrease, setIncrease } = useCartContext();
    let allPrice = 0;
    let allMrp = 0;

    if (cart.length === 0) {
        return (
            <div className='bg-gray-200 px-10 py-6 '>
                <div className="bg-white flex flex-col justify-center items-center p-8 space-y-2">
                    <div className="h-[20%] w-[20%]"><img src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="Empty cart" /></div>
                    <div></div>
                    <div className="text-lg">Your cart is empty!</div>
                    <div className="text-xs">Add items to it now.</div>
                    <div className="py-5"><Link to='/allproducts' className="bg-[#2874f0] text-white px-16 py-2 text-sm font-semibold">Shop now</Link></div>
                </div>
            </div>
        )
    }

    return (
        <>
            <style>
                {`.up-shadow {
                    box-shadow: 0px -5px 5px -5px rgba(0,0,0,.2);
                }`}
            </style>
            <div className='bg-gray-200 px-10 py-6'>
                <div className='grid grid-cols-7 p-1 space-x-4'>
                    {/* Product div */}
                    <div className='col-span-5 bg-white divide-y'>
                        {cart.map((currElem) => {
                            const { id, name, image, category, company, price, color, amount } = currElem;
                            let totalprice = price * amount;
                            let mrp = Math.round(totalprice / (1 - 0.4));
                            allPrice += totalprice;
                            allMrp += mrp;
                            return <div className='px-10 py-6' key={currElem.id}>
                                <div className='grid grid-cols-7'>
                                    <Link to={`/SingleProduct/${id}`} className='p-1'><img className='h-fit w-fit' src={image} alt={category} /></Link>
                                    <div className='col-span-4 px-4'>
                                        <Link to={`/SingleProduct/${id}`}><span>{name}</span></Link>
                                        <div className='text-[#696868] text-sm'>({company} {category})</div>
                                        <div className='text-[#696868] text-sm'>Color : {color}</div>
                                        <div className='mt-4 font-[Arial] space-x-4'>
                                            <del className='text-[#696868] text-[0.95rem]'>&#8377;{mrp.toLocaleString("en-IN")}</del>
                                            <span className='text-lg font-semibold text-[#2a2525]'>&#8377;{totalprice.toLocaleString("en-IN")}</span>
                                            <span className='text-[#388e3c] font-sans font-semibold'>40% off</span>
                                        </div>
                                    </div>
                                    <div className='col-span-2 text-[0.9rem]'>Delivery in 2 days, Fri | <span className='text-[#388e3c]'>Free </span><del className='text-[#696868]'> ₹40</del></div>
                                </div>
                                <div className='flex space-x-6 pt-4 font-semibold'>
                                    <CartItemAmount amount={amount} setDecrease={() => setDecrease(id)} setIncrease={() => setIncrease(id)} />
                                    <div>SAVE FOR LATER</div>
                                    <div onClick={() => removeItem(id)} className='cursor-pointer'>REMOVE</div>
                                </div>
                            </div>
                        })}
                        <div className='py-4 px-6 flex justify-end up-shadow'>
                            <Link to="/thanks" className='bg-[#ff6b21] py-3 px-16 text-white font-semibold'>PLACE ORDER</Link>
                        </div>
                    </div>
                    {/* Price  div */}
                    <div className='col-span-2 bg-white divide-y'>
                        <div className='py-3 px-6 text-[#7e7d7d] font-semibold'>PRICE DETAILS</div>
                        <div className='px-6 divide-y divide-dashed space-y-6'>
                            <div className='flex flex-col space-y-6 mt-3'>
                                <div className=''>
                                    <div className='float-left'>Price ({cart.length} items)</div>
                                    <div className='float-right'>&#8377;{allMrp}</div>
                                </div>
                                <div className=''>
                                    <div className='float-left'>Discount</div>
                                    <div className='float-right text-green-600'>-&#8377;{allMrp - allPrice}</div>
                                </div>
                                <div className=''>
                                    <div className='float-left'>Delivery Charges</div>
                                    <div className='float-right text-green-600'>Free</div>
                                </div>
                                <div className=''>
                                    <div className='float-left'>Secured Packaging Fee</div>
                                    <div className='float-right'>&#8377;69</div>
                                </div>
                            </div>
                            <div className='py-4'>
                                <div className='font-semibold text-xl'>
                                    <div className='float-left'>Total Amount</div>
                                    <div className='float-right'>&#8377;{allPrice + 69}</div>
                                </div>
                            </div>
                            <div className='py-4 text-green-700 font-semibold'>
                                You will save &#8377;{allMrp - allPrice} on this order
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart

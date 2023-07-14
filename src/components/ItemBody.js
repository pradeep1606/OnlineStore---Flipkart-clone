import React from 'react'
import { useProductContext } from '../context/productcontex'
import ItemProduct from './ItemProduct'


const ItemBody = () => {
    const { featureMobile, featureLaptop_Moniter, featurePrinter, isLoading } = useProductContext();

    if (isLoading) {
        return <div>Loading...</div>
    }

    const handleClick = () => {
        window.location.href = '/allproducts'
    }
    return (
        <>
            {/*  Product Row 1 */}
            <div className="max-w-sm md:mx-2 md:h-80 bg-white shadow-md md:max-w-full my-4">
                <div className="md:flex">
                    <div className="md:shrink-0 md:w-[18%] bg-blue-500 md:bg-[#87fae3] justify-center flex flex-col md:space-y-20">
                        <span className='md:text-3xl text-center font-medium md:font-[arial] text-white md:text-black h-8 pt-1'>Top Deals On Mobiles </span>
                        <button onClick={handleClick} className='h-10 w-24 self-center text-white text-xs font-bold bg-[#2874f0] hidden md:block'>VIEW ALL</button>
                    </div>
                    <div className="md:border-2 md:w-full md:border-[#87fae3]">
                        <div className='md:col-span-5 grid md:h-80 grid-cols-5 md:space-x-4 space-x-2 p-2'>
                            {featureMobile.map((currElem) => {
                                return <ItemProduct key={currElem._id} {...currElem} />
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Row 2 */}
            <div className="max-w-sm md:mx-2 md:h-80 bg-white shadow-md md:max-w-full my-4">
                <div className="md:flex">
                    <div className="md:shrink-0 md:w-[18%] bg-blue-500 md:bg-[#87fae3] justify-center flex flex-col md:space-y-20">
                        <span className='md:text-3xl text-center font-medium md:font-[arial] text-white md:text-black h-8 pt-1'> &nbsp; Best of &nbsp; &nbsp; Laptop & Moniter</span>
                        <button onClick={handleClick} className='h-10 w-24 self-center text-white text-xs font-bold bg-[#2874f0] hidden md:block'>VIEW ALL</button>
                    </div>
                    <div className="md:border-2 md:border-[#87fae3]">
                        <div className='md:col-span-5 grid md:h-80 grid-cols-5 md:space-x-4 space-x-2 p-2'>
                            {featureLaptop_Moniter.map((currElem) => {
                                return <ItemProduct key={currElem._id} {...currElem} />
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Row 3 */}
            <div className="max-w-sm md:mx-2 md:h-80 bg-white shadow-md md:max-w-full my-4">
                <div className="md:flex">
                    <div className="md:shrink-0 md:w-[18%] bg-blue-500 md:bg-[#87fae3] justify-center flex flex-col md:space-y-20">
                        <span className='md:text-3xl text-center font-medium md:font-[arial] text-white md:text-black h-8 pt-1'>Top Offers on Printer & Camera</span>
                        <button onClick={handleClick} className='h-10 w-24 self-center text-white text-xs font-bold bg-[#2874f0] hidden md:block'>VIEW ALL</button>
                    </div>
                    <div className="md:border-2 md:border-[#87fae3]">
                        <div className='md:col-span-5 grid md:h-80 grid-cols-5 md:space-x-4 space-x-2 p-2'>
                            {featurePrinter.map((currElem) => {
                                return <ItemProduct key={currElem._id} {...currElem} />
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ItemBody

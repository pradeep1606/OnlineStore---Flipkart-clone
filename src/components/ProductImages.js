import React, { useState } from 'react'

const ProductImages = ({ imgs }) => {

    const [currentImg, setCurrentImg] = useState(imgs[0])
    const [selectedImg, setSelectedImg] = useState(imgs[0])

    const handleImageChange = (newImg) => {
        setSelectedImg(newImg);
        setCurrentImg(newImg);
    }
    return (
        <>
            <style>
                {`
          .selected-img {
            border-width: 2px;
            border-color: #2975f0;
          }
        `}
            </style>
            <div className='flex'>
                {/* small images */}
                <div className='w-[18%] h-[26rem]'>
                    <ul className='ml-2'>
                        {imgs.map((img, index) => (
                            <li className={`border w-16 items-center border-gray-200 cursor-pointer p-1 ${selectedImg === img ? 'selected-img' : ''}`} onMouseEnter={() => handleImageChange(img)} key={index}>
                                <img className='h-[3.5rem]' src={img} alt={index} />
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Big image */}
                <div className='w-[82%] h-[26rem] flex justify-center p-2 border border-gray-200'>
                    <img className='h-fit w-fit self-center' src={currentImg} alt="img" />
                </div>
            </div>
        </>
    )
}

export default ProductImages

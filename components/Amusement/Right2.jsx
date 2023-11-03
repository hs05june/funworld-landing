import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Right = ({ image, heading, text }) => {
    return (
        <div className='h-full w-full flex my-16 '>
            <div className='h-full w-[52%] flex bg-[#FFFFFF] flex-col pl-28 pt-16 '>
                <h1 className='text-[#0B1A48] text-6xl  font-medium font-dm-sans py-10'>
                    {heading}
                </h1>
                <div className='pr-10 text-[22px]  text-[#5B5B5B] font-dm-sans'>
                    <div>
                        {text}
                    </div>
                    <div className='my-6'>
                        <Link href="/kidsrides">
                            <button className='flex items-center btn text-white px-8 py-2'>
                                Know More <span className='bg-white rounded-[50%] w-10 h-10 ml-5 flex items-center justify-center '><Image src="https://funworldblr.s3.amazonaws.com/public/arrow.webp" priority height={18} width={18} alt="abc" /></span>
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
            <div className='h-full  w-[48%]  flex '>
                <img priority src={image} className=" w-full h-full  object-cover" loading='lazy' alt="abc" />
            </div>
        </div>
    )
}

export default Right
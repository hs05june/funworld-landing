import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Left = ({ heading, text, image, url }) => {
    // console.log(url);

    return (
        <div className='h-[95vh] w-full flex '>
            <div className='h-full  w-[52%]  flex '>
                <img priority src={image} className=" w-full h-full  object-cover" loading='lazy' alt="img" />
            </div>
            <div className='h-full w-[48%] flex bg-[#FFEEF6] flex-col pl-16 pt-16 '>
                <h1 className='text-[#0B1A48] text-6xl  font-medium font-dm-sans py-10'>
                    {heading}
                </h1>
                <div className='pr-10  text-[22px]  text-[#5B5B5B] font-dm-sans'>
                    <div>
                        {text}
                    </div>
                    <div className='mt-10'>

                        <Link href="/highthrillrides">
                            <button className='flex items-center btn text-white px-8 py-2 hover:brightness-95'>
                                Know More <span className='bg-white rounded-[50%] w-10 h-10 ml-5 flex items-center justify-center '><Image priority src="https://funworldblr.s3.amazonaws.com/public/arrow.webp" height={18} width={18} alt="abc" /></span>
                            </button>
                        </Link>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Left
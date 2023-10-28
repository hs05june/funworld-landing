import Image from 'next/image'
import React from 'react'

const InTouch = ({ gradient, image, heading, text, icon }) => {
  return (
    <div className='relative aspect-[16/9] rounded-lg w-full max-[1450px]:aspect-[14/9] max-xl:aspect-[12/8] ' style={{ background: gradient }}>
      <div className='h-full w-[40%] absolute left-[0%] py-0 z-[2] '>
        <Image priority src={image} width={60} height={60} className="h-full w-full object-fill" alt="abc" />
      </div>
      <div className='absolute right-0 top-0 aspect-square h-1/3 '>
        <Image priority src={"/Contact/Vetcor2.webp"} width={60} height={60} className="h-full w-full object-fill" alt="abc" />
      </div>
      <div className='w-full h-full flex absolute z-[3] pl-[10%] '>
        <div className='aspect-square pt-[20%] w-[60px] max-sm:w-10 max-sm:pt-[27%]'>
          <Image priority src={icon} height={60} width={60} className="aspect-square w-full" alt='abc' />
        </div>
        <div className='flex flex-col text-white h-full justify-center ml-[15%] max-[1450px]:ml-[5%] max-xs:ml-10'>
          <div className=' font-dm-sans text-xl font-semibold text-left max-md:text-lg max-sm:text-base'>
            {heading}
          </div>
          <div className=' font-dm-sans text-xl font-normal text-left max-md:text-lg max-sm:text-base'>
            {text}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InTouch
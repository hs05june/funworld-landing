import React from 'react'
import Image from 'next/image'
import Ride from '@/app/ridedetails/page'

const TextPage = () => {
    return (
        <div className='min-h-screen flex-col'>
            <img className='bg-cover bg-center bg-no-repeat absolute top-0 -z-10 w-full' src={"https://funworldblr.s3.amazonaws.com/public/Reusable/bg1.webp"} alt="bacgkround img" />
            {/* <CodeOfSafety/> */}
            <Ride/>
        </div>
    )
}

export default TextPage
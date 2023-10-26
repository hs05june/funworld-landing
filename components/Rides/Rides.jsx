import Image from 'next/image'

import React from 'react'
import Rides3 from "@/public/Rides&Attractions/Rides2.svg"
import Rides4 from "@/public/Rides&Attractions/Rides2.svg"
import Rides5 from "@/public/Rides&Attractions/Rides2.svg"
import Rides6 from "@/public/Rides&Attractions/Rides2.svg"
import Rides7 from "@/public/Rides&Attractions/Rides2.svg"
import Rides8 from "@/public/Rides&Attractions/Rides2.svg"
import Rides9 from "@/public/Rides&Attractions/Rides2.svg"
import Rides10 from "@/public/Rides&Attractions/Rides2.svg"
import waterpark1 from "@/public/Amusement/waterpark1.svg"
import Link from 'next/link'
const Rides = ({ img, text, index }) => {

 


  return (
    <div className='w-full flex flex-col imgcontainer'>
      {/* <Link href={`/ridedetails/?ride=${index}`} > */}
        <Image priority src={img} className="image h-[250px]" alt="abc" />
        <div className='w-full font-spartan py-4 text-left text-4xl font-bold max-xl:text-2xl'>
          <div className=' trans   '>
            <span className='mr-0 opacity-0 whitespace-nowrap spannum ml-6'></span><span>{text}</span>
          </div>
        </div>
      {/* </Link> */}

    </div>
  )
}

export default Rides
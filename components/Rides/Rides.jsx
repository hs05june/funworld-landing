import React from 'react'
const Rides = ({ img, text, index }) => {

  return (
    <div className='w-full flex flex-col imgcontainer'>
      {/* <Link href={`/ridedetails/?ride=${index}`} > */}
        <img priority src={img} className="image h-[250px]" alt="abc" />
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
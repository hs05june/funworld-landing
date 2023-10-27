import React from 'react'
import bg1 from "@/public/Reusable/bg1.svg"
import Image from 'next/image'
// import DisabledGuests from "@/components/TextComponents/DisabledGuests"
// import CodeOfConduct from '@/components/TextComponents/CodeOfConduct'
// import Policy from '@/components/TextComponents/Policy'
// import Disclaimer from '@/components/TextComponents/Disclaimer'
import Ride from '@/app/ridedetails/page'

const TextPage = () => {
    return (
        <div className='min-h-screen flex-col'>
            <Image className='bg-cover bg-center bg-no-repeat absolute top-0 -z-10 w-full' src={bg1} alt="bacgkround img" />
            {/* <CodeOfSafety/> */}
            <Ride/>
        </div>
    )
}

export default TextPage
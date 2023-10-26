import Image from 'next/image'
import React from 'react'
import bg1 from "@/public/Reusable/bg1.svg"
import mapPhoto from "@/public/parkDirections/mapPhoto.svg"
import { BsArrowRightCircleFill } from "react-icons/bs"
import Link from 'next/link'


const Directions = () => {
    return (
        <div className='min-h-screen relative'>
            <section className='w-full min-h-[629px] relative max-lg:min-h-[400px] max-xl:min-h-[450px] xl:h-fit max-md:min-h-[300px] max-sm:min-h-[250px]'>
                <Image className='bg-cover bg-center bg-no-repeat absolute top-0 -z-10  max-sm:h-full object-contain  max-xs:object-cover  ' src={"/Amusement/hero_background.svg"} alt="bacgkround img" width={2042} height={1029} />
                <div className="w-full bottom-[50%] absolute max-lg:bottom-[40%]">
                    <div className=" h-full w-full flex text-center justify-center items-center ">
                        <div className=" text-center font-extrabold text-[70px] text-white max-lg:text-6xl max-md:text-5xl  max-xs:text-4xl ">
                            Directions
                        </div>
                    </div>
                </div>
                <div className="w-full h-full absolute flex ">
                    <div className="absolute bottom-[200px] right-[425px] max-xl:bottom-[10vw] max-xl:right-[30%] max-lg:bottom-[16vw] max-md:hidden">
                        <Image src="/Rides/Ellipse1.svg" width={18} height={18} alt="img" />
                    </div>
                    <div>
                        <Image src="/Rides/Ellipse2.svg" width={28} height={28} alt="img" />
                    </div>
                    <div className="absolute bottom-[150px] right-[10rem] max-md:hidden ">
                        <Image src="/Rides/stars.svg" width={68} height={68} alt="img" />
                    </div>
                    <div className="absolute bottom-[200px] left-[89px] max-xl:bottom-[10vw] max-lg:hidden">
                        <Image
                            src="/Rides/white-shape-banner1.svg"
                            width={141}
                            height={168}
                            alt="img"
                        />
                    </div>
                    <div className="absolute bottom-[165px] right-8 max-xl:bottom-[8vw] max-lg:hidden">
                        <Image src="/Rides/white-shape-banner2.svg" alt="img" width={141} height={148} />
                    </div>
                </div>
            </section>

            <div className='lg:px-[12vw] px-[6vw] flex items-center flex-col gap-12 max-md:px-[3vw]'>
                <h1 className='text-[#5B5B5B] text-[20px] leading-[33px] text-center px-36 max-md:px-16 max-sm:px-10'>We have introduced a number of hygiene and safety measures, we request everyone to follow the same for a safe trip.
                </h1>

                <div>
                    <Image src={mapPhoto} alt="map photo" />
                </div>

                <hr />

                <div className='bg-[#FFEEF6] rounded-xl p-6 flex lg:flex-row flex-col lg:gap-0 gap-6 justify-between items-center w-full'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-[23px] font-[650] leading-[26px]'>
                            Directions:
                        </h3>
                        <p className='text-[20px] leading-[30px]'>
                            Palace Grounds, Jayamahal Main Rd,
                            <br />
                            Opposite TV Tower, J.C.Nagar, Bengaluru,
                            <br />
                            Karnataka 560006
                        </p>
                    </div>

                    <Link href={'https://www.google.co.in/maps/dir//Fun+World+Amusement+Park,+Palace+Grounds,+Jayamahal+Main+Rd,+opposite+TV+Tower,+J.C.Nagar,+Bengaluru,+Karnataka+560006/@13.0069448,77.5895227,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae17b55c78182f:0xd46d15155f682466!2m2!1d77.5920976!2d13.0069448?entry=ttu'}><button className='directionsBtn text-white py-3 px-6 flex items-center justify-center gap-4'>
                        <span> Directions - Click me</span> <BsArrowRightCircleFill size={25} />
                    </button></Link>

                </div>
            </div>
        </div>

    )
}

export default Directions
"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Height from '@/public/WaterPark/Height.webp'
import Thrill from '@/public/WaterPark/Thrill.webp'
import { useInView } from "@react-spring/web"
import image16 from '@/public/WaterPark/16.jpeg'
import image17 from '@/public/WaterPark/17.jpeg'
import lastimage from '@/public/WaterPark/newwaterpark.jpg'
import firstimage2 from '@/public/WaterPark/firstimage2.jpg'

const WaterPark = () => {
    const [height, setHeight] = useState(0)

    useEffect(() => {
        if (height < 48) {
            const timeout = setTimeout(() => {
                setHeight(height + 1);
            }, 100);

            return () => {
                clearTimeout(timeout);
            };
        }
        else if (height == 48) {
            const timeout = setTimeout(() => {
                setHeight(0);
            }, 5000);

            return () => {
                clearTimeout(timeout);
            };
        }
    }, [height])


    const [ref, props] = useInView(() => ({
        from: { opacity: 0, y: 100 },
        to: { opacity: 1, y: 0 },
        config: { duration: 1000 },
        reset: false,
        delay: 1000
    }))
    const [ref1, props1] = useInView(() => ({
        from: { opacity: 0, y: 100 },
        to: { opacity: 1, y: 0 },
        config: { duration: 1500 },
        reset: false,
        delay: 1000
    }))
    const [ref2, props2] = useInView(() => ({
        from: { opacity: 0, y: 100 },
        to: { opacity: 1, y: 0 },
        config: { duration: 2000 },
        reset: false,
        delay: 1000
    }))
    const [ref3, props3] = useInView(() => ({
        from: { opacity: 0, y: 100 },
        to: { opacity: 1, y: 0 },
        config: { duration: 1000 },
        reset: false,
        delay: 1000
    }))
    return (
        <div className='w-screen'>
            <section className='w-full min-h-[629px] relative max-lg:min-h-[400px] max-xl:min-h-[450px] xl:h-fit max-md:min-h-[300px] max-sm:min-h-[250px]'>
                <Image className='bg-cover bg-center bg-no-repeat absolute top-0 -z-10  max-sm:h-full object-contain  max-xs:object-cover ' src={"/Amusement/hero_background.webp"} alt="bacgkround img" width={2042} height={1029} />
                <div className="w-full bottom-[50%] absolute max-lg:bottom-[40%]">
                    <div className=" h-full w-full flex text-center justify-center items-center ">
                        <div className=" text-center font-extrabold text-[70px] text-white max-lg:text-6xl max-md:text-5xl  max-xs:text-4xl">
                            Water Park
                        </div>
                    </div>
                </div>
                <div className="w-full h-full absolute flex ">
                    <div className="absolute bottom-[200px] right-[425px] max-xl:bottom-[10vw] max-xl:right-[30%] max-lg:bottom-[16vw] max-md:hidden">
                        <Image alt="/" src="/Rides/Ellipse1.webp" width={18} height={18} />
                    </div>
                    <div>
                        <Image alt="/" src="/Rides/Ellipse2.webp" width={28} height={28} />
                    </div>
                    <div className="absolute bottom-[150px] right-[10rem] max-md:hidden ">
                        <Image alt="/" src="/Rides/stars.webp" width={68} height={68} />
                    </div>
                    <div className="absolute bottom-[200px] left-[89px] max-xl:bottom-[10vw] max-lg:hidden">
                        <Image alt="/"
                            src="/Rides/white-shape-banner1.webp"
                            width={141}
                            height={168}

                        />
                    </div>
                    <div className="absolute bottom-[165px] right-8 max-xl:bottom-[8vw] max-lg:hidden">
                        <Image alt="/"
                            src="/Rides/white-shape-banner2.webp"
                            width={141}
                            height={148}
                        />
                    </div>
                </div>
            </section>

            <section className='w-full py-[5vh] relative flex flex-col gap-12'>
                <div className=" absolute top-0 left-2 w-fit  max-md:top-[-7%] max-md:left-[-5%] max-sm:hidden">
                    <Image alt="/" src="/Rides/petal.webp" height={1000} width={271} />
                </div>
                <div>
                    <div className='text-[#B6004C] font-dm-sans text-3xl text-center font-normal mb-2'>Welcome to</div>
                    <div className='text-[#0B1A48] font-dm-sans text-6xl text-center font-bold max-xs:text-4xl max-lg:text-5xl max-md:text-5xl '>
                    Water World
                    </div>
                </div>
                <div className='w-full flex max-lg:flex-col-reverse '>
                    <div className='flex flex-col gap-4 w-1/2 px-[9%] max-xl:text-base max-xl:px-[2%] max-lg:text-sm max-lg:w-full max-lg:justify-center max-md:w-full '>
                        <div className='text-[#5B5B5B] flex flex-col font-dm-sans text-xl font-normal text-left max-xl:py-0 max-lg:text-center'>
                            <div >
                                Experience Water World, a water slide in which riders speed down flumes into massive funnels, sliding high up one side and then the other.
                            </div>
                            <div>
                                Water World is a great day out for Groups and also offers fantastic Birthday Party packages. We&#8217;re open throughout the year.
                            </div>
                        </div>
                        <div ref={ref3} style={props3} className="flex flex-col gap-4 max-lg:w-full max-lg:items-center ">
                        <div className='font-dm-sans font-bold text-4xl '>Enhance Your<br /> Experience.</div>
                        <div className='flex flex-row gap-4 max-xs:gap-4 max-xs:w-full'>
                            <div className='h-[250px] w-[280px] bg-[#FFEEF6] flex items-center justify-center px-8 flex-col text-center gap-2 hover:scale-110 transition-all max-md:w-1/2 max-xs:px-1 '>
                                <div className='w-[100px] h-[100px] bg-blue-400 rounded-full flex items-center justify-center bg-gradient-to-r from-yellow-300 to-[#FD1783] mb-4 hover:scale-105 transition-all delay-150 '>
                                    <Image src={Thrill} alt="house icon" />
                                </div>
                                <h5 className='font-bold text-[#252525] text-2xl max-xs:text-lg'>Thrill Level</h5>
                                <p className='text-[#FD1783] text-4xl font-bold max-xs:text-2xl'>Extreme</p>
                            </div>
                            <div className='h-[250px] w-[280px] bg-[#FFEEF6] flex items-center justify-center px-8 flex-col text-center gap-2 hover:scale-110 transition-all max-md:w-1/2 max-xs:px-0'>
                                <div className='w-[100px] h-[100px] bg-blue-400 rounded-full flex items-center justify-center bg-gradient-to-r from-yellow-300 to-[#FD1783] mb-4 hover:scale-105 transition-all delay-150 '>
                                    <Image src={Height} alt="house icon" />
                                </div>
                                <span className='font-bold text-[#252525] text-2xl max-xs:text-lg'>Height <br></br> Requirement</span>
                                <spanp className='text-[#FD1783] text-4xl font-bold max-xs:text-2xl'>{height}&#8221;</spanp>
                            </div>

                        </div>
                        </div>
                    </div>
                    <div className='w-1/2 max-lg:w-full max-lg:py-[5%] '>
                        <div className='flex-1 max-lg:flex max-lg:justify-center max-lg:h-[50vh] max-xs:px-4' ref={ref} style={props}>
                            <Image alt="/" src={firstimage2}  className="h-full w-full" />
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <section className='px-[9%] pt-10 space-y-12 w-full'>
                <div className='flex-1 w-full ' ref={ref1} style={props1}>
                    <div className='flex flex-row gap-9 w-full max-md:flex-col'>
                        <Image alt="/" src={image16}  className="w-1/2 max-md:w-full"/>
                        <Image alt="/" src={image17} className='w-1/2 max-md:w-full' />
                    </div>
                </div>
                <div className='flex-1 relative' ref={ref2} style={props2}>
                    <Image alt="/" src={lastimage} className="w-full" />
                </div>
            </section>

        </div>
    )
}

export default WaterPark

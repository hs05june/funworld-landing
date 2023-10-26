'use client'
import React, { useEffect, useState } from 'react'
import arrow1 from "@/public/Reusable/carouselBack.svg"
import arrow2 from "@/public/Reusable/carouselForward.svg"
import Image from 'next/image'
import img1 from "@/public/Reusable/manInFormals.svg"
import img2 from "@/public/Reusable/manWithSpecs.svg"
import img3 from "@/public/Reusable/quomas.svg"

const slides = [
    {
        id: "1",
        name: "Anurag Kamboj",
        job: "Data Scientist",
        text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.",
        text2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        id: "2",
        name: "Partik Singh",
        job: "CTO, Textr",
        text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.",
        text2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
        id: "3",
        name: "Kulu singh",
        job: "CEO,  Textr AI",
        text1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.",
        text2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },

]


const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleCLick = (arrow) => {
        if (arrow === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        }
        else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }

    useEffect(() => {
        // console.log(slideIndex)
    }, [slideIndex])



    return (
        <>
        </>
        // <div className='bg-[#FFEEF6] overflow-hidden py-12 pt-20'>
        //     <h6 className="text-[#0B1A48] xl:px-[20vw] lg:px-[16vw] px-[14px]  xl:text-[62px] xl:leading-[65px] lg:text-[46px] md:text-[33px] text-[25px]  font-[650] xl:mb-0 mb-8 text-center">Our Satisfaction People Say About Our Services
        //     </h6>

        //     <div className='w-[100%] xl:h-[100vh] flex relative '>
        //         <div onClick={() => handleCLick("left")} className='p-2 z-10 absolute top-0 bottom-0  md:left-[70px] left-[20px] m-auto cursor-pointer rounded-full border-2 border-[#FF9900] w-[30px] h-[30px] flex items-center justify-center'>
        //             <Image priority className='' src={arrow1} alt="back arrow" />

        //         </div>



        //         <div style={{
        //             transform: `translateX(${slideIndex * -100}vw)`,
        //             transitionProperty: 'all',
        //             transitionDuration: '1000ms',
        //             transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        //             transitionDelay: '300ms',

        //         }}
        //             className={`h-full flex `}>

        //             {slides.map((slide) => (
        //                 <div key={slide.id} className='flex items-center w-[100vw] px-[10vw] xl:h-[100vh] justify-center' id="slide">
        //                     <div className='flex-1 xl:block hidden'>
        //                         <Image priority src={img1} alt="img1" />
        //                     </div>

        //                     <div className='flex-1 flex flex-col gap-8 md:px-12 px-4'>
        //                         <div className='flex items-center xl:justify-start justify-center gap-4'>
        //                             <div className='flex xl:items-start items-center'>
        //                                 <Image priority className='rounded-full' src={img2} alt="img2" />
        //                             </div>

        //                             <div className='flex flex-col gap-2'>
        //                                 <h6 className='text-[23px] font-[650] leading-[26px]'>{slide.name}</h6>
        //                                 <p className='text-[#FF9900] md:text-[18px] md:leading-[18px]'>{slide.job}</p>
        //                             </div>
        //                         </div>

        //                         <p className='text-[#5B5B5B] font-[20px] leading-[30px]'>
        //                             {slide.text1}
        //                         </p>

        //                         <p className='text-[#5B5B5B] font-[20px] leading-[30px]'>
        //                             {slide.text2}
        //                         </p>

        //                         <Image priority src={img3} alt="img3" />
        //                     </div>
        //                 </div>
        //             ))
        //             }

        //         </div>



        //         <div onClick={() => handleCLick("right")} className='p-2 z-10 absolute top-0 bottom-0 md:right-[70px]  right-[20px] m-auto cursor-pointer bg-[#FF9900]  rounded-full border-2 border-[#FF9900] w-[30px] h-[30px] flex items-center justify-center'>
        //             <Image priority width={50} src={arrow2} alt="forward arrow" />
        //         </div>

        //     </div>
        // </div>

    )
}

export default Slider
"use client"
import React from 'react'
import Image from 'next/image'
import BalancingGirl from '@/public/WaterPark/BalancingGirl.svg'
import WaterGunFamily from '@/public/WaterPark/WaterGunFamily.svg'
import Points from '@/public/Service/Points.svg'
import Phone from '@/public/Service/Phone.svg'
import family from "@/public/Service/Family.jpeg"
import { useInView } from 'framer-motion'
import swing from "@/public/Service/swing.jpg"
import ServiceImage from "@/public/Service/Bengaluru_-_Banded_Kraits 1.jpg"
import Amusement from "@/public/Service/Amusement.jpg"
import Water from "@/public/Service/Water.jpg"
import { Box, Button, Card, Input, TextField, Typography } from '@mui/material'
import map from "@/public/Service/map.jpg"
import first from "@/public/Service/1.jpg"
import second from "@/public/Service/2.jpeg"
import third from "@/public/Service/3.jpg"
import fourth from "@/public/Service/4.jpg"
import fifth from "@/public/Service/5.jpeg"
import sixth from "@/public/Service/6.jpg"
import { MdComputer, MdHealthAndSafety, MdPark, MdWebhook } from 'react-icons/md'
import { BsBook, BsFillTelephoneFill, BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { IoMdMail } from 'react-icons/io'


//First Service Card
const ServiceFirst = () => {
    // const [img1Ref, img1Props] = useInView(() => ({
    //   from: { opacity: 0, y: 100 },
    //   to: { opacity: 1, y: 0 },
    //   config: { duration: 1000 },
    //   reset: false,
    //   delay: 1000
    // }))
    // const [img2Ref, img2Props] = useInView(() => ({
    //   from: { opacity: 0, y: 100 },
    //   to: { opacity: 1, y: 0 },
    //   config: { duration: 1000 },
    //   reset: false,
    //   delay: 1000
    // }))
    return (
        <div className='md:w-[80%] w-[98%] mx-auto bg-[#F8E9E0] max-lg:pb-10 max-lg:space-y-10'>

            <div className='flex lg:flex-row flex-col w-full lg:h-[50%] justify-between max-lg:gap-5'>
            <div className='lg:w-1/2 h-full' >
                    <Image src={Amusement} alt="rings with child" />
                </div>
                <div className='lg:w-[50%] lg:items-center lg:justify-center gap-5 flex flex-col'>
                    <span className='text-xl font-bold md:text-2xl xl:text-3xl text-[#252525] md:px-10 text-left px-2'>
                        Amusement Park Ride Manufacturing
                    </span>
                    <div className='md:px-10 px-2'>
                        <p className='text-[#5B5B5B] xl:text-2xl'>
                            Experience the thrill and wonder of amusement parks with our adrenaline-packed rides. Immerse your visitors in excitement like never before.
                        </p>

                    </div>


                </div>
            </div>

            <div className='flex lg:flex-row flex-col-reverse w-full lg:h-[50%] justify-between max-lg:gap-5'>
                <div className='lg:w-[50%] lg:items-center lg:justify-center gap-5 flex flex-col'>
                    <span className='text-xl font-bold md:text-2xl xl:text-3xl text-[#252525] md:px-10 text-left px-2'>
                        Water Park Ride Manufacturing
                    </span>
                    <div className='md:px-10 px-2'>
                        <p className='text-[#5B5B5B] xl:text-2xl'>
                            Provide refreshing adventures for all ages with our innovative water park rides. Let your visitors engage in aquatic fun and unforgettable experiences.
                        </p>

                    </div>
                </div>

                <div className='lg:w-1/2 h-full' >
                    <Image src={Water} alt="water slide" />
                </div>
            </div>
        </div>
    )
}

//Second Service Card
const ServiceSecond = () => {
    return (
        <div className='w-full'>
            <div className='flex-1 top-[30%] xl:top-[25%] absolute -z-10 max-xl:hidden'>
                <Image src={swing} className='mt-[300px] w-[100vw]' alt='water gun' />
            </div>
            <div className='xl:bg-[#F3E6DE] xl:w-[90vw] xl:px-20 xl:py-20 py-32 flex max-xl:flex-col xl:relative lg:top-[30vh] xl:top-[40vh] lg:left-[12vw] lg:gap-14 xl:rounded-tl-[3rem] md:gap-8 gap-4'>
                <Box className=" flex flex-col md:gap-16 gap-8">
                    <Typography variant='h4' className='font-sans font-bold text-[#252525] lg:text-4xl xl:text-5xl max-xl:text-center md:text-3xl text-xl'>
                        Why Choose Us?
                    </Typography>
                    <Box className="flex flex-col justify-evenly max-xl:w-[90%] max-xl:mx-auto xl:gap-16 lg:gap-8 gap-4">

                        <div className='flex gap-3'>
                            <MdPark className='xl:text-6xl md:text-5xl md:w-12 bg-white xl:w-16 p-2 rounded-full' />

                            <div className='w-[80%] ml-2 xl:space-y-3 space-y-1'>
                                <Typography className='font-bold font-sans text-[#0B1A48] xl:text-4xl md:text-2xl' >
                                    Customized Park Experiences
                                </Typography>
                                <Typography className='text-[#5B5B5B] font-sans xl:text-xl md:text-lg text-base'>
                                    Recognizing the unique identity of each park, our rides integrate seamlessly, enhancing your theme and enriching visitors&apos; experiences.
                                </Typography>

                            </div>

                        </div>

                        <div className='flex gap-3'>
                            <MdWebhook className='xl:text-6xl md:text-5xl md:w-12 bg-white xl:w-16 p-2 rounded-full' />
                            {/* PiWebhooksLogoLight */}
                            <div className=' w-[80%] ml-2 xl:space-y-3 space-y-1'>

                                <Typography className='font-bold font-sans text-[#0B1A48] xl:text-4xl md:text-2xl'>
                                    From Simplicity to Complexity
                                </Typography>
                                <Typography className='text-[#5B5B5B] font-sans xl:text-xl md:text-lg'>
                                    Whether you&apos;re looking for family-friendly attractions or heart-pounding rides, we can transform your concepts into reality. We embrace challenges to bring your visions to life.
                                </Typography>
                            </div>
                        </div>

                        <div className='flex gap-3'>
                            <BsBook className='xl:text-6xl md:text-5xl md:w-12 bg-white xl:w-16 p-2 rounded-full' />
                            {/* LiaIndustrySolid */}
                            <div className=' w-[80%] ml-2 xl:space-y-3 space-y-1'>

                                <Typography className='font-bold font-sans text-[#0B1A48] xl:text-4xl md:text-2xl'>
                                    Tapping into Vast Industry Expertise
                                </Typography>
                                <Typography className='text-[#5B5B5B] font-sans xl:text-xl md:text-lg'>
                                    With honed skills and extensive knowledge, we create standout rides that elevate your park&apos;s attractions and visitor satisfaction.
                                </Typography>
                            </div>
                        </div>

                    </Box>
                </Box>

                <Box className="xl:gap-10 gap-4 flex flex-col max-xl:w-[90%] max-xl:mx-auto">
                    <Typography className='mx-auto font-sans text-[#5B5B5B] font-normal md:text-xl text-base'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking!
                    </Typography>

                    <div className='flex gap-3'>
                        {/* MdHealthAndSafety */}
                        <MdHealthAndSafety className='xl:text-6xl md:text-5xl md:w-12 bg-white xl:w-16 p-2 rounded-full' />
                        <div className=' w-[80%] ml-2 xl:space-y-3 space-y-1'>
                            <Typography className='font-bold font-sans text-[#0B1A48] xl:text-4xl md:text-2xl'>
                                Uncompromising Safety Standards
                            </Typography>
                            <Typography className='text-[#5B5B5B] font-sans xl:text-xl md:text-lg'>
                                Safety is paramount in our design. Our rides surpass industry norms, ensuring a secure environment for everyone&apos;s enjoyment.
                            </Typography>

                        </div>
                    </div>

                    <div className='flex gap-3'>
                        {/* GrTechnology */}
                        <MdComputer className='xl:text-6xl md:text-5xl md:w-12 bg-white xl:w-16 p-2 rounded-full' />
                        <div className=' w-[80%] ml-2 xl:space-y-3 space-y-1'>

                            <Typography className='font-bold font-sans text-[#0B1A48] xl:text-4xl md:text-2xl'>
                                Innovating with Cutting-Edge Technology
                            </Typography>
                            <Typography className='text-[#5B5B5B] font-sans xl:text-xl md:text-lg'>
                                Incorporating advanced amusement park maintenance systems, our rides redefine the forefront of your park. Interactive elements and innovative features set you apart.
                            </Typography>
                        </div>
                    </div>

                </Box>
            </div>
        </div>
    )
}


// Third Service Card
const ServiceThird = () => {

    // const CssTextField = withStyles({
    //     root: {
    //       '& label.Mui-focused': {
    //         color: 'white',
    //       },
    //       '& .MuiInput-underline:after': {
    //         borderBottomColor: 'white',
    //       },
    //       '& .MuiOutlinedInput-root': {
    //         '& fieldset': {
    //           borderColor: 'white',
    //         },
    //         '&:hover fieldset': {
    //           borderColor: 'white',
    //         },
    //         '&.Mui-focused fieldset': {
    //           borderColor: 'white',
    //         },
    //       },
    //       '& input::placeholder': {  
    //         color: 'white',
    //       },
    //     },
    //   })(TextField);

    return (
        <div className='w-full h-full flex flex-col justify-evenly max-lg:w-[95%] max-lg:mx-auto'>
            <Box className='lg:space-y-10 py-10 space-y-5'>
                <Typography variant='h3' className='text-center font-medium text-[#0B1A48] font-sans xl:text-6xl lg:px-40 lg:text-5xl md:text-4xl px-10 text-xl'>
                    Consulting and Holistic Project Management
                </Typography>
                <Typography className='text-center text-[#5B5B5B] font-sans lg:text-2xl xl:px-40 lg:px-20 px-5'>
                    Your project is in good hands. Our consultancy offers expert guidance on park growth, ride selection, and project management. Supported by seasoned professionals, we ensure a seamless journey from inception to realization.
                </Typography>
                <Typography className='text-center text-[#5B5B5B] font-sans lg:text-2xl xl:px-40 lg:px-20 px-5'>
                    Whether it&apos;s creativity, feasibility, or timely execution, we&apos;re devoted to bringing your vision to life.
                </Typography>

            </Box>

            <Box className="flex max-lg:flex-col gap-5 justify-evenly items-center max-lg:w-[95%]">
                <Image src={map} className='w-[40%] max-lg:w-[95%] max-lg:mx-auto max-lg:mt-4' alt='pic' />
                <Box className="bg-[#47475EF5] text-white lg:w-[40%] flex flex-col xl:space-y-10 md:space-y-5 py-5 xl:py-10 xl:px-14 md:px-5 px-3 space-y-3">
                    <Typography variant='h4' className='font-sans font-medium xl:text-4xl text-white md:text-3xl text-xl'>
                        Connect with Us to Begin Your Success Story
                    </Typography>
                    <Typography className='font-sans text-white lg:text-xl md:text-lg'>
                        Whether it&apos;s creativity, feasibility, or timely execution, we&apos;re devoted to bringing your vision to life.
                    </Typography>
                    <Box>
                        <div className=' flex justify-between'>
                            <input className='border w-[48%] bg-[#47475EF5] py-2 px-4 rounded-full placeholder:ml-2 placeholder:text-white' placeholder='First Name' />
                            <input className='border w-[48%] bg-[#47475EF5] py-2 px-4 rounded-full placeholder:ml-2 placeholder:text-white' placeholder='Email Address' />
                        </div>
                        <div className='flex flex-col xl:mt-6 md:mt-2 h-[90%] md:gap-[1rem] mt-2'>
                            <input className='border w-[100%] bg-[#47475EF5] py-2 px-4 rounded-full placeholder:ml-2 placeholder:text-white' placeholder='Phone Number' />
                            <textarea variant='outlined' className='border w-[100%] py-2 px-4 bg-[#47475EF5] placeholder:ml-2 placeholder:text-white mt-2 rounded-xl h-28' placeholder='Your Message' />
                        </div>

                    </Box>
                    <Button variant='contained' className='btn'>Submit</Button>
                    <Box className=" flex xl:gap-8 md:gap-4 text-center justify-center gap-2">
                        <span className='flex flex-row md:space-x-2 space-x-1 items-center'>
                        <BsFillTelephoneFill className='md:text-lg mt-[2px]' />
                        <Typography className='text-white font-sans font-medium md:text-lg'>
                        +91 8431110000
                        </Typography>
                        </span>
                        <span className='flex flex-row md:space-x-2 space-x-1 items-center'>
                        <IoMdMail className='md:text-lg mt-[2px]' />
                        <Typography className='text-white font-sans font-medium md:text-lg'>
                            info@funworld.com
                        </Typography>
                        </span>
                    </Box>
                </Box>
            </Box>

        </div>
    )
}

// Last Service Card
const ServiceLast = () => {
    const data = [{
        src: <Image src={first} width={100} height={100} className='w-full max-lg:h-[12vh] max-xl:h-[20vh]' alt='pic' />,
        head: "Enhanced Ride Experiences",
        content: "Infuse fresh excitement into existing rides. Our skilled modifications breathe new life into familiar attractions."
    },
    {
        src: <Image src={second} width={100} height={100} className='w-full max-lg:h-[12vh] max-xl:h-[20vh]' alt='pic' />,
        head: "Restoration of Aging Rides",
        content: "Revive aging rides comprehensively. Our team restores charm and functionality, enhancing the appeal of your attractions."
    },
    {
        src: <Image src={third} width={100} height={100} className='w-full h-[270px] max-lg:h-[12vh] max-xl:h-[20vh]' alt='pic' />,
        head: "State-of-the-Art Ride",
        content: "Experience precision and reliability with our cutting-edge ride control systems. Ensure seamless operations for a smooth visitor experience."
    },
    {
        src: <Image src={fourth} width={100} height={100} className='w-full max-lg:h-[12vh] max-xl:h-[20vh]' alt='pic' />,
        head: "Effortless Ride Transfers",
        content: "Planning to relocate? Rely on us for hassle-free ride relocation and precise installation, leaving a lasting impact."
    },
    {
        src: <Image src={fifth} width={100} height={100} className='w-full max-lg:h-[12vh] max-xl:h-[20vh]' alt='pic' />,
        head: "Comprehensive Parts Solutions",
        content: "Ensure uninterrupted operation with complete spare parts coverage. Our specialized part fabrication guarantees seamless functionality."
    },
    {
        src: <Image src={sixth} width={100} height={100} className='w-full max-lg:h-[12vh] max-xl:h-[20vh]' alt='pic' />,
        head: "Rides",
        content: "Explore a sneak peek of our spectacular rides. From the thrilling 'Break Dance Ride' to the classic 'Columbus' ride, Sky Drop, Tsunami, our portfolio oozes excitement."
    },

    ]
    return (
        <div className='w-full h-full flex flex-col gap-[2rem]'>
            <div className='flex flex-col h-[10%] justify-evenly'>

                <Typography variant='h3' className='text-center max-lg:text-3xl max-lg:font-[600]'>Our Services</Typography>
                <Typography variant='subtitle1' className='text-center'>Below are some of our services. Contact us now to get a customized quote according to your preferences.</Typography>
            </div>

            <Box className="w-full h-[70%]">
                <CardService data={data} />
            </Box>

            <Box className="text-white max-lg:h-[15%] lg:h-[20%] lg:w-[80%] mx-auto btn lg:p-10 max-lg:p-2 flex max-lg:flex-col justify-between mt-10">
                <Box className="h-full lg:w-[70%] max-lg:w-[95%]">
                    <Typography variant='h4' className='font-[650] max-lg:text-lg max-lg:text-center max-lg:mt-2'>
                        Let&apos;s Connect
                    </Typography>
                    <Typography variant='h6' className='max-lg:text-sm max-lg:w-[90%] max-lg:mx-auto max-lg:mt-2 max-lg:text-center'>
                        Let&apos;s discuss how we can help your park reach its full potential. Whether it&apos;s introducing new rides, upgrades, or solutions, we&apos;re here to assist.
                    </Typography>
                    <Typography variant='h6' className='max-lg:hidden'>
                        From commissioning fresh attractions to sourcing spare parts, we provide comprehensive support.
                    </Typography>
                </Box>
                <Box className="lg:w-[30%] max-lg:w-[100%] max-lg:justify-center flex lg:flex-col items-end gap-4">

                    <Box className='border md:p-4 max-lg:p-2 rounded-full w-fit flex gap-2'>
                        <BsFillTelephoneFill className='text-lg mt-[2px] max-lg:text-sm' />
                        <Typography className='max-lg:text-xs'>
                            +919439000000
                        </Typography>
                    </Box>

                    <Box className='border md:p-4 max-lg:p-2 rounded-full w-fit flex gap-2'>
                        <IoMdMail className='text-lg mt-[2px] max-lg:text-sm' />
                        <Typography className='max-lg:text-xs'>
                            info@funworld.com
                        </Typography>
                    </Box>

                </Box>
            </Box>
        </div>
    )
}

const CardService = ({ data }) => {
    return (
        <div className='grid grid-cols-3 max-lg:grid-cols-2 gap-4 w-[90%] h-full mx-auto'>
            {data.map((e,index) => {

                return (
                    <Card key={index} className='w-[90%] h-[100%]'>
                        <div>
                            {/* <Image src={e.src} width={300} height={300} alt='pic' /> */}
                            {e.src}
                            <Box className="gap-0 flex flex-col">
                                <Typography className='md:p-4 max-lg:p-2 text-[22px] font-[650] max-lg:text-sm'>
                                    {e.head}
                                </Typography>
                                <Typography className='md:p-4 max-lg:p-2 max-lg:text-xs'>
                                    {e.content}
                                </Typography>
                            </Box>
                        </div>
                    </Card>
                )
            })}
        </div>
    )
}



// Main Function
const Service = () => {
    return (
        <>
            <div className='w-screen overflow-hidden flex flex-col '>


                <section className='w-full min-h-[629px] relative max-md:min-h-[400px] max-xl:min-h-[450px] xl:h-fit max-lg:min-h-[300px] max-sm:min-h-[250px]'>
                    <Image className='bg-cover bg-center bg-no-repeat absolute top-0 -z-10  max-sm:h-full object-contain  max-xs:object-cover  ' src={"/Amusement/hero_background.svg"} alt="bacgkround img" width={2042} height={1029} />
                    <div className="w-full">
                        <div className=" h-fit w-fit flex flex-col text-center justify-center items-center space-y-5 md:space-y-10 mt-10 md:mt-14 lg:mt-24 xl:space-y-16 xl:mt-28">
                        <div className="text-center font-bold text-xl text-white md:text-4xl lg:text-5xl xl:text-7xl">
                                Your Partner In Park Excellence
                            </div>

                            <div className="text-center font-normal text-sm md:text-xl text-white md:mt-10 px-1 md:px-3 lg:text-2xl lg:px-10 xl:px-32">
                                We specialize in manufacturing top-tier park rides and offer a comprehensive spectrum of theme park maintenance and repair solutions.
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-full absolute flex ">
                        <div className="absolute bottom-[200px] right-[425px] max-xl:bottom-[10vw] max-xl:right-[30%] max-lg:bottom-[16vw] max-lg:hidden">
                            <Image alt="/" src="/Rides/Ellipse1.svg" width={18} height={18} />
                        </div>
                        <div>
                            <Image alt="/" src="/Rides/Ellipse2.svg" width={28} height={28} />
                        </div>
                        <div className="absolute bottom-[150px] right-[10rem] max-lg:hidden ">
                            <Image alt="/" src="/Rides/stars.svg" width={68} height={68} />
                        </div>
                        <div className="absolute bottom-[200px] left-[89px] max-xl:bottom-[10vw] max-lg:hidden">
                            <Image alt="/"
                                src="/Rides/white-shape-banner1.svg"
                                width={141}
                                height={168}

                            />
                        </div>
                        <div className="absolute bottom-[165px] right-8 max-xl:bottom-[8vw] max-lg:hidden">
                            <Image alt="/"
                                src="/Rides/white-shape-banner2.svg"
                                width={141}
                                height={148}
                            />
                        </div>
                    </div>
                </section>

                <section className='w-full my-5 md:my-12 lg:my-20 flex flex-col gap-3 md:gap-5 lg:gap-10'>
                    <div className=' font-dm-sans font-semibold text-center text-[#0B1A48] text-lg md:text-2xl mx-2 lg:text-4xl xl:text-6xl'>
                        Theme Park Ride Manufacturing
                    </div>
                    <div className='text-[#5B5B5B] text-base mx-3 text-center md:text-lg md:mx-10 lg:mx-32 xl:text-2xl xl:mx-56'>
                        Fun World is a renowned amusement park manufacturer in India.
                        Using modern <b>tech + design</b>, we combine functionality and aesthetics to offer B2B amusement park services according to your needs.
                    </div>
                </section>

                <section className='w-full lg:h-auto mt-[2rem] lg:mt-[5rem] flex flex-col'>
                    <ServiceFirst />
                </section>

                <section className='w-full md:h-auto flex flex-col items-center'>
                    <ServiceSecond />
                </section>

                <section className='w-full h-auto flex flex-col items-center xl:mt-[350px]'>
                    <ServiceThird />
                </section>

                <section className='w-full h-auto flex flex-col items-center mt-[100px]'>
                    <ServiceLast />
                </section>

            </div>
        </>
    )
}

export default Service
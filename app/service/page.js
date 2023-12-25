"use client"
import React from 'react'
import Image from 'next/image'
import { Box, Button, Card, Typography } from '@mui/material'
import { MdComputer, MdHealthAndSafety, MdPark, MdWebhook } from 'react-icons/md'
import { BsBook, BsFillTelephoneFill} from 'react-icons/bs'
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
                    <img src={"https://funworldblr.s3.amazonaws.com/public/Service/Amusement.jpg"} alt="rings with child" />
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
                    <img src={"https://funworldblr.s3.amazonaws.com/public/Service/Water.jpg"} alt="water slide" />
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
                <img src={"https://funworldblr.s3.amazonaws.com/public/Service/swing.jpg"} className='mt-[400px] w-[100vw]' alt='water gun' />
            </div>
            <div className='xl:bg-[#F3E6DE] xl:w-[90vw] xl:px-20 xl:py-20 lg:py-32 py-10 flex max-xl:flex-col xl:relative lg:top-[30vh] xl:top-[40vh] lg:left-[12vw] lg:gap-14 xl:rounded-tl-[3rem] md:gap-8 gap-4'>
                <Box className=" flex flex-col md:gap-16 gap-8">
                    <Typography variant='h4' className='font-sans font-bold text-[#252525] lg:text-4xl xl:text-5xl max-xl:text-center md:text-3xl text-xl'>
                        Why Choose Us?
                    </Typography>
                    <Box className="flex flex-col justify-evenly max-xl:w-[90%] max-xl:mx-auto xl:gap-10 lg:gap-8 gap-4">

                        <div className='flex gap-2'>
                            <MdPark className='xl:text-6xl md:text-5xl md:w-12 bg-white xl:w-16 p-2 rounded-full' />

                            <div className='w-[80%] ml-2 xl:space-y-3 space-y-1'>
                                <Typography className='font-bold font-sans text-[#0B1A48] xl:text-3xl md:text-2xl' >
                                    Customized Park Experiences
                                </Typography>
                                <Typography className='text-[#5B5B5B] font-sans font-[500] md:text-lg text-base'>
                                    Recognizing the unique identity of each park, our rides integrate seamlessly, enhancing your theme and enriching visitors&apos; experiences.
                                </Typography>

                            </div>

                        </div>

                        <div className='flex gap-2'>
                            <MdWebhook className='xl:text-6xl md:text-5xl md:w-12 bg-white xl:w-16 p-2 rounded-full' />
                            {/* PiWebhooksLogoLight */}
                            <div className=' w-[80%] ml-2 xl:space-y-3 space-y-1'>

                                <Typography className='font-bold font-sans text-[#0B1A48] xl:text-3xl md:text-2xl'>
                                    From Simplicity to Complexity
                                </Typography>
                                <Typography className='text-[#5B5B5B] font-sans font-[500] md:text-lg'>
                                    Whether you&apos;re looking for family-friendly attractions or heart-pounding rides, we can transform your concepts into reality. We embrace challenges to bring your visions to life.
                                </Typography>
                            </div>
                        </div>

                        <div className='flex gap-2'>
                            <BsBook className='xl:text-6xl md:text-5xl md:w-12 bg-white xl:w-16 p-2 rounded-full' />
                            {/* LiaIndustrySolid */}
                            <div className=' w-[80%] ml-2 xl:space-y-3 space-y-1'>

                                <Typography className='font-bold font-sans text-[#0B1A48] xl:text-3xl md:text-2xl'>
                                    Tapping into Vast Industry Expertise
                                </Typography>
                                <Typography className='text-[#5B5B5B] font-sans font-[500] md:text-lg'>
                                    With honed skills and extensive knowledge, we create standout rides that elevate your park&apos;s attractions and visitor satisfaction.
                                </Typography>
                                <Typography className='text-[#5B5B5B] lg:hidden flex font-sans font-[500] md:text-lg'>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking!
                                </Typography>
                            </div>
                        </div>

                    </Box>
                </Box>

                <Box className="xl:gap-10 gap-4 flex flex-col max-xl:w-[90%] max-xl:mx-auto">
                    <Typography className='mx-auto lg:flex hidden font-sans text-[#5B5B5B] font-[500] text-base'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking!
                    </Typography>

                    <div className='flex gap-3'>
                        {/* MdHealthAndSafety */}
                        <MdHealthAndSafety className='xl:text-6xl md:text-5xl md:w-12 bg-white xl:w-16 p-2 rounded-full' />
                        <div className=' w-[80%] ml-2 xl:space-y-3 space-y-1'>
                            <Typography className='font-bold font-sans text-[#0B1A48] xl:text-3xl md:text-2xl'>
                                Uncompromising Safety Standards
                            </Typography>
                            <Typography className='text-[#5B5B5B] font-sans font-[500] md:text-lg'>
                                Safety is paramount in our design. Our rides surpass industry norms, ensuring a secure environment for everyone&apos;s enjoyment.
                            </Typography>

                        </div>
                    </div>

                    <div className='flex gap-3'>
                        {/* GrTechnology */}
                        <MdComputer className='xl:text-6xl md:text-5xl md:w-12 bg-white xl:w-16 p-2 rounded-full' />
                        <div className=' w-[80%] ml-2 xl:space-y-3 space-y-1'>

                            <Typography className='font-bold font-sans text-[#0B1A48] xl:text-3xl md:text-2xl'>
                                Innovating with Cutting-Edge Technology
                            </Typography>
                            <Typography className='text-[#5B5B5B] font-sans font-[500] md:text-lg'>
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
            <Box className='lg:space-y-10 flex-1 py-10 space-y-5'>
                <Typography variant='h4' className='text-center text-[#0B1A48] font-[565] font-sans xl:text-5xl lg:px-[15vw] lg:text-4xl md:text-3xl xl:px-[20vw] text-xl'>
                    Consulting and Holistic Project Management
                </Typography>
                <Typography className='text-center text-[#5B5B5B] font-sans lg:text-2xl xl:px-40 lg:px-20 px-5'>
                    Your project is in good hands. Our consultancy offers expert guidance on park growth, ride selection, and project management. Supported by seasoned professionals, we ensure a seamless journey from inception to realization.
                </Typography>
                <Typography className='text-center text-[#5B5B5B] font-sans lg:text-2xl xl:px-40 lg:px-20 px-5'>
                    Whether it&apos;s creativity, feasibility, or timely execution, we&apos;re devoted to bringing your vision to life.
                </Typography>

            </Box>

            <div className='flex lg:flex-row flex-col lg:gap-0 gap-8 lg:px-0 px-4'>
                <div className='flex-1 min-h-[40vh] bg-center bg-cover bg-no-repeat bg-[url("https://funworldblr.s3.amazonaws.com/public/Service/map.jpg")]'>
                </div>

                <div className="bg-[#47475EF5] lg:rounded-none rounded-xl flex-1 text-white lg:w-[40%] flex flex-col xl:space-y-10 md:space-y-5 py-5 xl:py-10 xl:px-14 md:px-5 px-3 space-y-3 lg:text-start text-center">
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
                            <Typography className='text-white font-sans font-medium md:text-lg text-xs'>
                                +91 8431110000
                            </Typography>
                        </span>
                        <span className='flex flex-row md:space-x-2 space-x-1 items-center'>
                            <IoMdMail className='md:text-lg mt-[2px]' />
                            <Typography className='text-white font-sans font-medium md:text-lg text-xs'>
                                info@funworld.com
                            </Typography>
                        </span>
                    </Box>
                </div>
            </div>

            <Box className="flex max-lg:flex-col  justify-evenly items-center ">
                <div style={{ backgroundColor: "green" }} className='flex-1 h-full bg-red-800  '>
                    {/* <Image src={map} className='h-full' alt='pic' /> */}
                </div>

            </Box>

        </div>
    )
}

// Last Service Card
const ServiceLast = () => {
    const data = [{
        src: <Image src={"https://funworldblr.s3.amazonaws.com/public/Service/1.png"} width={100} height={100} className='w-full h-[25vh] lg::h-[25vh]' alt='pic' />,
        head: "Enhanced Ride Experiences",
        content: "Infuse fresh excitement into existing rides. Our skilled modifications breathe new life into familiar attractions."
    },
    {
        src: <Image src={"https://funworldblr.s3.amazonaws.com/public/Service/2.png"} width={100} height={100} className='w-full h-[25vh] lg::h-[25vh]' alt='pic' />,
        head: "Restoration of Aging Rides",
        content: "Revive aging rides comprehensively. Our team restores charm and functionality, enhancing the appeal of your attractions."
    },
    {
        src: <Image src={"https://funworldblr.s3.amazonaws.com/public/Service/3.png"} width={100} height={100} className='w-full h-[25vh] lg::h-[25vh]' alt='pic' />,
        head: "State-of-the-Art Ride",
        content: "Experience precision and reliability with our cutting-edge ride control systems. Ensure seamless operations for a smooth visitor experience."
    },
    {
        src: <Image src={"https://funworldblr.s3.amazonaws.com/public/Service/4.png"} width={100} height={100} className='w-full h-[25vh] lg::h-[25vh]' alt='pic' />,
        head: "Effortless Ride Transfers",
        content: "Planning to relocate? Rely on us for hassle-free ride relocation and precise installation, leaving a lasting impact."
    },
    {
        src: <Image src={"https://funworldblr.s3.amazonaws.com/public/Service/5.png"} width={100} height={100} className='w-full h-[25vh] lg::h-[25vh]' alt='pic' />,
        head: "Comprehensive Parts Solutions",
        content: "Ensure uninterrupted operation with complete spare parts coverage. Our specialized part fabrication guarantees seamless functionality."
    },
    {
        src: <Image src={"https://funworldblr.s3.amazonaws.com/public/Service/6.png"} width={100} height={100} className='w-full h-[25vh] lg::h-[25vh]' alt='pic' />,
        head: "Rides",
        content: "Explore a sneak peek of our spectacular rides. From the thrilling 'Break Dance Ride' to the classic 'Columbus' ride, Sky Drop, Tsunami, our portfolio oozes excitement."
    },

    ]
    return (
        <div className='w-full h-full flex flex-col gap-[2rem]'>
            <div className='flex flex-col h-[10%] justify-evenly'>

                <Typography variant='h3' className='text-center max-lg:text-3xl max-lg:font-[600]'>Our Services</Typography>
                <Typography variant='subtitle1' className='text-center text-[#5B5B5B] lg:px-0 px-10'>Below are some of our services. Contact us now to get a customized quote according to your preferences.</Typography>
            </div>

            <Box className="w-full h-[70%]">
                <CardService data={data} />
            </Box>

            <Box className="text-white  max-lg:h-[15%] lg:h-[20%] lg:w-[80%] lg:mx-auto mx-6 btn lg:p-10 max-lg:p-2 flex max-lg:flex-col justify-between mt-10">
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
                <Box className="lg:w-[30%] max-lg:w-[100%] max-lg:justify-center flex lg:flex-col items-end mt-2 gap-4">

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
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1   gap-y-8 w-[90%] h-full mx-auto lg:px-10'>
            {data.map((e, index) => {

                return (
                    <Card key={index} className='w-[90%] h-[100%] mx-auto shadow-xl rounded-xl'>
                        <div>
                            {/* <Image src={e.src} width={300} height={300} alt='pic' /> */}
                            {e.src}
                            <Box className="gap-2 my-4 px-4 flex flex-col">
                                <Typography className='l text-[#424234] text-[22px] font-[650] max-lg:text-sm'>
                                    {e.head}
                                </Typography>
                                <Typography className='mb-4 lg:mb-0 max-lg:text-xs text-[#5B5B5B]'>
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
                <section className='w-full min-h-[400px] relative max-lg:min-h-[400px] max-xl:min-h-[400px] xl:h-fit max-md:min-h-[300px] max-sm:min-h-[250px]'>
                    <Image className='bg-cover bg-center bg-no-repeat absolute top-0 -z-10  max-sm:h-full object-contain  max-xs:object-cover  ' src={"https://funworldblr.s3.amazonaws.com/public/Reusable/bg2.jpg"} alt="bacgkround img" width={2042} height={1029} />
                    <div className="w-full bottom-[30%] sm:bottom-[50%] lg:bottom-[30%] absolute">
                        <div className=" h-[100%] w-full flex flex-col text-center justify-center items-center ">
                            <h1 className=" text-center px-[10vw] lg:leading-[60px] md:w-full font-extrabold lg:text-[65px] md:text-[50px] md:leading-[46px] text-white sm:text-3xl">
                                Your Partner In Park Excellence
                            </h1>
                            <p className="text-center w-[60%] lg:px-[20vw] md:px-[10vw] md:w-full md:mt-8 mt-3 lg:text-[20px] lg:leading-[30px] text-white text-xs">
                                We specialize in manufacturing top-tier park rides and offer a comprehensive spectrum of theme park maintenance and repair solutions.
                            </p>
                        </div>
                    </div>

                    <div className="w-full h-full flex">
                        {/* <div className="absolute bottom-[200px] right-[425px] max-xl:bottom-[10vw] max-xl:right-[30%] max-lg:bottom-[16vw] max-md:hidden">
                            <Image alt="/" src="/Rides/Ellipse1.svg" width={18} height={18} />
                        </div> */}
                        <div>
                            <Image alt="/" src="https://funworldblr.s3.amazonaws.com/public/Rides/Ellipse2.webp" width={28} height={28} />
                        </div>
                        {/* <div className="absolute bottom-[150px] right-[10rem] max-md:hidden ">
                            <Image alt="/" src="/Rides/stars.svg" width={68} height={68} />
                        </div> */}
                        <div className="absolute bottom-[200px] left-[89px] max-xl:bottom-[10vw] max-lg:hidden">
                            <Image alt="/"
                                src="https://funworldblr.s3.amazonaws.com/public/Rides/white-shape-banner1.webp"
                                width={141}
                                height={168}

                            />
                        </div>
                        <div className="absolute bottom-[165px] right-8 max-xl:bottom-[8vw] max-lg:hidden">
                            <Image alt="/"
                                src="https://funworldblr.s3.amazonaws.com/public/Rides/white-shape-banner2.webp"
                                width={141}
                                height={148}
                            />
                        </div>

                    </div>


                </section>


                <section className='w-full flex flex-col gap-3 md:gap-5'>
                    <div className='mt-12 lg:mt-32 font-dm-sans font-[500] text-center text-[#0B1A48] text-lg md:text-2xl mx-2 lg:text-4xl xl:text-6xl'>
                        Theme Park Ride Manufacturing
                    </div>
                    <div className='text-[#5B5B5B] text-base mx-3 text-center md:text-lg md:mx-10 lg:mx-32 xl:mx-[25vw]'>
                        Fun World is a renowned amusement park manufacturer in India.
                        Using modern <b>tech + design</b>, we combine functionality and aesthetics to offer B2B amusement park services according to your needs.
                    </div>
                </section>



                <section className='lg:min-h-[50vh] min-h-[40vh] lg:mt-12 mt-6 w-full flex items-center justify-center lg:gap-0 gap-8 flex-col lg:mb-[130px]'>
                    <div className='flex lg:flex-row flex-col items-center justify-center lg:gap-0 gap-6'>
                        <div className='lg:flex-1 lg:w-[40vw] lg:h-[70vh] h-[400px] w-[80vw] bg-cover bg-center bg-no-repeat lg:px-16  bg-[url("https://funworldblr.s3.amazonaws.com/public/Service/ridetube.jpg")]'>
                        </div>
                        <div className='flex-1 flex justify-center flex-col gap-4 px-16 lg:w-[40vw] w-full h-[70vh] bg-green-500 bg-[url("https://funworldblr.s3.amazonaws.com/public/Service/gradient.jpg")]'>
                            <h3 className='lg:text-[42px] lg:leading-[46px] md:text-[32px] md:leading-[35px] text-[25px] leading-[27px] text-[#252525] font-[550] lg:text-start text-center'>Amusement Park Ride Manufacturing</h3>
                            <p className='text-[#5B5B5B] lg:text-start text-center'>Experience the thrill and wonder of amusement parks with our adrenaline-packed rides. Immerse your visitors in excitement like never before.</p>
                        </div>
                    </div>

                    <div className='flex lg:flex-row-reverse flex-col items-center justify-center lg:gap-0 gap-6'>
                        <div className='lg:flex-1 lg:w-[40vw] lg:h-[70vh] h-[400px] w-[80vw] bg-cover bg-center bg-no-repeat lg:px-16 bg-[url("https://funworldblr.s3.amazonaws.com/public/About/fun2.jpeg")]'>
                        </div>

                        <div className='flex-1 flex justify-center flex-col gap-4 px-16 lg:w-[40vw] w-full h-[70vh] bg-green-500 bg-[url("https://funworldblr.s3.amazonaws.com/public/Service/gradient.jpg")]'>
                            <h3 className='lg:text-[42px] lg:leading-[46px] md:text-[32px] md:leading-[35px] text-[25px] leading-[27px] text-[#252525] font-[550] lg:text-start text-center'>Water Park Ride Manufacturing</h3>
                            <p className='text-[#5B5B5B] lg:text-start text-center'>Provide refreshing adventures for all ages with our innovative water park rides. Let your visitors engage in aquatic fun and unforgettable experiences.</p>
                        </div>
                    </div>

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
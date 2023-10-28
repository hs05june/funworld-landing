'use client'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import { Box, Button, Card, Divider, Rating, Tab, Tabs, Typography } from '@mui/material'
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { IoMdBicycle, IoMdColorPalette } from "react-icons/io"
import { GiBodyHeight, GiHotSpices, GiMountainClimbing, GiMusicalNotes } from 'react-icons/gi'
import { MdHealthAndSafety, MdOutlineCleanHands } from 'react-icons/md'
import { FaQuoteRight } from "react-icons/fa"
import { BsCalendar3, BsThreeDots } from 'react-icons/bs'
import vector from "@/public/Amusement/vector.jpg"
import user from "@/public/Amusement/user.jpg"
import businessUser from "@/public/Amusement/businessuser.jpg"
import group1 from "@/public/About/Group1.jpg"
import first from "@/public/Service/1.jpg"
import second from "@/public/Service/2.jpeg"
import third from "@/public/Service/3.jpg"
import fourth from "@/public/Service/4.jpg"
import fifth from "@/public/Service/5.jpeg"
import sixth from "@/public/Service/6.jpg"
import group from "@/public/waterworld/group.jpg"




// First Water Component
const WaterFirst = () => {
    return (
        <div className='flex lg:flex-row flex-col lg:gap-0 gap-6 lg:text-start text-center px-[7vw] mt-10'>
            <div className='flex-1 flex items-center justify-center'>
                <div className='w-[100%] flex flex-col lg:ml-12'>
                    <h3 className='text-md md:text-[32px] lg:text-[42px]  font-[550]'>Get Ready for an Unforgettable Water Park Experience</h3>
                    <p className='mt-5 md:text-[24px] text-[#5B5B5B] lg:leading-10 gap-4 flex flex-col'>
                        Dive deep into the thrills of our water park!
                    </p>

                </div>
            </div>

            <div className='flex-1'>
                <Image src={group} className='' alt='pic' />

            </div>

        </div>
    )
}


// Second Water Component
const   WaterSecond = () => {
    return (
        <div className='w-full bg-[#FFFAF7] px-[12vw] flex flex-col gap-8 py-12'>
            <div className='flex lg:flex-row flex-col lg:gap-0 gap-6 lg:text-start text-center'>
                <h4 className='flex-1 font-[500] lg:text-[42px] md:[28px] '>Excitement is Alright!<br /> But Being Safe is Also Fun</h4>
                <h4 className='flex-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h4>
            </div>

            <div className='flex gap-6 lg:flex-row flex-col'>
                <div className="bg-gradient-to-r from-[#FFB200] to-[#F26702] py-16 rounded-xl flex-1 flex flex-col items-center justify-center gap-4">
                    <GiMountainClimbing color='white' className='lg:text-[10rem] sm:text-[5rem] text-[2rem]' />
                    <Typography variant='h5' className='text-white text-center font-[650] px-16'>Navigate the Intense Thrills With More Care</Typography>
                </div>

                <div className="bg-white  py-16 rounded-xl flex-1 flex flex-col items-center justify-center gap-4">
                    <GiBodyHeight className='lg:text-[10rem] sm:text-[5rem] text-[2rem]' />
                    <Typography variant='h5' className='text-[#5B5B5B] text-center font-[650] px-16'>Ride the Waves of Adventure, 48&apos;&apos;
                        and Above</Typography>
                </div>
            </div>
        </div>
    )
}

// Third Water Component
const WaterThird = () => {
    const data = [{
        name: "Ticket",
        value: "$100",
        total: "$400"
    },
    {
        name: "Ticket",
        value: "$100",
        total: "$400"
    },
    {
        name: "Ticket",
        value: "$100",
        total: "$400"
    },
    {
        name: "Ticket",
        value: "$100",
        total: "$400"
    },
    {
        name: "Ticket",
        value: "$100",
        total: "$400"
    },
    ]
    return (        
        <div className='w-full h-full px-[1rem] md:px-[10rem] flex flex-col gap-10'>
            <Typography variant='h3' className='text-center text-lg md:text-[4rem] md:leading-[4rem]'>
                Secure Your Fun Spot Today!<br /> Book Tickets Online
            </Typography>

            <Box className="h-auto">
                <Tabs>
                    <Tab label="Booking Details" className='bg-[#DCDCDC] rounded-t-xl' />
                    <Tab label="Make Payment" className='bg-[#DCDCDC] rounded-t-xl mx-4' />
                    <Tab label="Collect Tickets" className='bg-[#DCDCDC] rounded-t-xl' />
                </Tabs>
                <Box className="border p-4 flex flex-col gap-5">
                    <Typography variant='h4' className='text-2xl text-center md:text-left md:text-[2rem]'>
                        Choose Date
                    </Typography>
                    <Box className="md:flex-row flex flex-col md:gap-10 gap-2 items-center">
                        <Box className="md:p-5 p-2 w-[10rem] rounded-2xl bg-[#DCDCDC] text-center md:w-[12rem]">
                            <Typography className='md:font-[650] text-sm font-[200]'>
                                Today
                            </Typography>
                            <Typography className='md:font-[650] text-sm font-[200]'>
                                28 Jun 2023
                            </Typography>
                        </Box>
                        <Box className="md:p-5 p-2 w-[10rem] rounded-2xl bg-[#DCDCDC] text-center md:w-[12rem]">
                            <Typography className='md:font-[650] text-sm font-[200]'>
                                Today
                            </Typography>
                            <Typography className='md:font-[650] text-sm font-[200]'>
                                29 Jun 2023
                            </Typography>
                        </Box>
                        <Box className="md:p-5 p-2 w-[10rem] rounded-2xl bg-[#DCDCDC] text-center md:w-[12rem]">

                            <BsCalendar3 className=' mx-auto md:text-[1.5rem]' />

                            <Typography className='md:font-[650] text-sm font-[200] mt-1'>
                                Choose Date
                            </Typography>
                        </Box>
                    </Box>

                    <Divider />
                    <TableComponentMain data={data} />
                    <Divider />

                    <Box className="h-[30%] gap-5 flex flex-col">
                        <Typography variant='h4' className='md:font-[650] text-lg'>
                            Booking Details
                        </Typography>
                        <Box className="w-full flex justify-between">
                            <input placeholder='First Name' className='w-[48%] bg-[#DCDCDC] p-3 h-[60%] md:h-[100%] placeholder:text-[12px] md:placeholder:text-[16px] rounded-sm placeholder:text-gray-500' />
                            <input placeholder='Mobile Number' className='w-[48%] bg-[#DCDCDC] p-3 h-[60%] md:h-[100%] placeholder:text-[12px] md:placeholder:text-[16px] rounded-sm placeholder:text-gray-500' />
                        </Box>
                        <Box className="w-full flex justify-between">
                            <input placeholder='Address' className='w-[100%] bg-[#DCDCDC] p-3 h-[60%] md:h-[100%] placeholder:text-[12px] md:placeholder:text-[16px] rounded-sm placeholder:text-gray-500' />

                        </Box>
                        <Box className="w-full flex justify-between">
                            <input placeholder='City' className='w-[48%] bg-[#DCDCDC] p-3 h-[60%] md:h-[100%] placeholder:text-[12px] md:placeholder:text-[16px] rounded-sm placeholder:text-gray-500' />
                            <input placeholder='State' className='w-[48%] bg-[#DCDCDC] p-3 h-[60%] md:h-[100%] placeholder:text-[12px] md:placeholder:text-[16px] rounded-sm placeholder:text-gray-500' />
                        </Box>
                        <Box className="w-full flex justify-between">
                            <input placeholder='Zip' className='w-[48%] bg-[#DCDCDC] p-3 h-[60%] md:h-[100%] placeholder:text-[12px] md:placeholder:text-[16px] rounded-sm placeholder:text-gray-500' />
                            <input placeholder='Email Address' className='w-[48%] bg-[#DCDCDC] p-3 h-[60%] md:h-[100%] placeholder:text-[12px] md:placeholder:text-[16px] rounded-sm placeholder:text-gray-500' />
                        </Box>

                        <Button className='btn text-white'>Proceed To Payment</Button>

                    </Box>
                </Box>
            </Box>
        </div>
    )
}

const TableComponentMain = ({ data }) => {

    return (
        <div className='w-full h-full'>
            <Typography variant='h5' className='font-[650] my-4'>
                Package
            </Typography>
            <TableContainer component={Paper} className='border'>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableBody>
                        {data.map((e, id) => {
                            return (

                                <TableRow
                                    key={id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    className={`${id % 2 !== 0 ? "bg-[#DCDCDC]" : ""}`}
                                >
                                    <TableCell scope='row'>
                                        {e.name}
                                    </TableCell>
                                    <TableCell align='left'>
                                        {e.name}
                                    </TableCell>
                                    <TableCell align='center'>
                                        {e.value}
                                    </TableCell>
                                    <TableCell align='center'>
                                        {e.value}
                                    </TableCell>
                                    <TableCell align='right'>
                                        {e.total}
                                    </TableCell>
                                </TableRow>

                            )
                        })}
                    </TableBody>
                </Table>
                <Box className="w-[100%] flex justify-between p-3 bg-[#0B1A48] 
                                     text-white">
                    <Typography>
                        Adult World - Adults
                    </Typography>
                    <Typography>
                        $400
                    </Typography>
                </Box>
            </TableContainer>
        </div>
    )
}

// Fourth Water Component

const GridParkSecond = ({ data }) => {

    const [hover, setHover] = useState({
        bool: false,
        index: null,
        place: ""
    })

    const handleMouseEnter = (index, place) => {
        setHover({
            bool: true,
            index: index,
            place: place
        })
    }

    const handleMouseLeave = (index, place) => {
        setHover({
            bool: false,
            index: null,
            place: ""
        })
    }

    return (

        <div className=' mx-auto grid md:grid-cols-3 max-md:grid-cols-2 xl:w-[60%] md:w-[90%]'>
            {
                data.map((upper, index) => {
                    return (

                        <Box key={index}
                            onMouseEnter={() => handleMouseEnter(index, "top")}
                            onMouseLeave={handleMouseLeave}

                            className={`w-auto flex  flex-col items-center justify-center md:h-[350px] lg:h-[400px] ${index % 2 === 0 ? "max-md:border-r-[1px]" : ""} ${index !== 4 && index !== 5 ? "max-md:border-b-[1px]" : ""} ${index === 0 || index === 1 || index === 2 ? "md:border-b-[1px]" : ""} ${index !== 2 && index !== 5 ? "md:border-r-[1px] border-gray-300" : ""}`}
                        >


                            {upper.icon}
                            <Typography variant='h5' className='text-center max-md:text-lg w-[80%] mx-auto mt-4'>
                                {upper.head}
                            </Typography>
                            <Typography variant='subtitle1' className='w-[80%] max-md:text-sm mx-auto text-center mt-4'>
                                {upper.content}
                            </Typography>

                        </Box>

                    )
                })
            }

        </div>


    )
}

const WaterFourth = () => {

    const data = [
        {
            icon: <IoMdBicycle className='md:text-[8rem] text-[4rem] p-[5px] bg-[#EBF0FE] rounded-[5rem] md:p-[10px] mx-auto my-[10px]' />,
            head: "27 Thrilling Water Rides",
            content: "Embark on a Aquatic Journey With Heart Throbbing Rides."
        },
        {
            icon: <IoMdColorPalette className='md:text-[8rem] text-[4rem] p-[5px] bg-[#EBF0FE] rounded-[5rem] md:p-[10px] mx-auto my-[10px]' />,
            head: "A Topical Paradise",
            content: "Have a relaxing day at cabanas or unwind yourself in serene pools, enjoy to the fullest."
        },
        {
            icon: <GiHotSpices className='md:text-[8rem] text-[4rem] p-[5px] bg-[#EBF0FE] rounded-[5rem] md:p-[10px] mx-auto my-[10px]' />,
            head: "Irresistible Delicacies and Beverages",
            content: "Refresh yourself during the aquatic journey with our most savoury dishes and beverages."
        },
        {
            icon: <GiMusicalNotes className='md:text-[8rem] text-[4rem] p-[5px] bg-[#EBF0FE] rounded-[5rem] md:p-[10px] mx-auto my-[10px]' />,
            head: "Luxurious Amenities",
            content: "Relax and elevate your every moment into a lavish escape."
        },
        {
            icon: <MdHealthAndSafety className='md:text-[8rem] text-[4rem] p-[5px] bg-[#EBF0FE] rounded-[5rem] md:p-[10px] mx-auto my-[10px]' />,
            head: "Extremely Safe Environment",
            content:"Our extreme safety measures will peacefully let you dive into a state of excitement and fun."
        },
        {
            icon: <MdOutlineCleanHands className='md:text-[8rem] text-[4rem] p-[5px] bg-[#EBF0FE] rounded-[5rem] md:p-[10px] mx-auto my-[10px]' />,
            head: "Affordability",
            content: "Have tons of fun with value for money deals at affordable rates."
        }
    ]

    return (
        <div className='max-md:w-[100%]'>
            <div className='flex max-md:flex-col justify-between w-[90%] xl:w-[60%] md:w-[90%] mx-auto md:h-[20%]'>
                <Typography variant='h3' className='text-left max-md:text-xl max-md:font-[700] max-md:text-center'>
                You Can&apos;t Resist Coming to Water World
                </Typography>
                <Typography variant='h6' className='w-[80%] mt-3 mx-auto max-md:text-sm max-md:w-[95%] max-md:text-center'>
                    Nothing&apos;s better than an electrifying experience at amusement parks, trying all the crazy rides for stress therapy.
                </Typography>
            </div>
            <div className='max-md:w-[100%] h-auto mt-10'>
                <GridParkSecond data={data} />
            </div>
        </div>
    )
}

// Customer Review Page
const CardElement = ({ data }) => {

    const [value, setValue] = useState(null)

    return (
        <div className='flex flex-col lg:flex-row max-md:h-[100%] h-[100%] w-[90%] justify-between mx-auto mt-10 gap-10'>
            {
                data.map((e, index) => {
                    return (
                        <Card key={index} elevation={4} className='flex flex-col md:w-[80%] mx-auto lg:w-[35%] rounded-lg max-md:py-4 max-lg:h-[30%]'>
                            <Box sx={{ display: "flex" }} className="w-[60%] gap-[2vw] mx-auto md:mt-5">
                                <div>
                                    <Image src={user} width={60} height={60} className='border rounded-[3rem] h-[60px] w-[60px]' alt='pic' />
                                </div>
                                <div className='w-[40%]'>
                                    <Typography variant='h6' className='font-bold'>
                                        {e.name}
                                    </Typography>
                                    <Typography variant='subtitle2' className='lg:text-[1.2vw]'>
                                        {e.username}
                                    </Typography>
                                </div>
                            </Box>
                            <Box className="w-[60%] mx-auto mt-2">
                                <Rating
                                    name="simple-controlled"
                                    value={e.rating}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                            </Box>
                            <Box className="mt-5 w-[80%] mx-auto">
                                <Typography variant='subtitle1 md:text-[2vw] lg:text-[1vw]'>
                                    {e.comment}
                                </Typography>
                            </Box>
                            <Box className="text-3xl justify-end -bottom-5 w-[23%] absolute hidden">
                                <FaQuoteRight />
                            </Box>
                        </Card>
                    )
                })
            }
        </div>
    )
}

const CustomerReviewPage = () => {

    const data = [
        {
            src: { user },
            name: "Divakshi",
            username: "@Divakshi",
            rating: 4,
            comment: "The very fun place went there with my colleagues, and it was so much fun, enjoyed it a lot! The rides & activities were so good, worth every single penny! 👌🏻😁"
        },
        {
            src: { user },
            name: "Pankaj",
            username: "@Pankaj",
            rating: 5,
            comment: "Very good to place to have fun time with family and friends. Kids friendly rides in Water park and in Amusement park. 👌🏻😁"
        },
        {
            src: { user },
            name: "Devil",
            username: "@Devil",
            rating: 4,
            comment: "The very fun place went there with my colleagues, and it was so much fun, enjoyed it a lot! The rides & activities were so good, worth every single penny! 👌🏻😁"
        }
    ]
    return (
        <div style={{ width: "100vw", height: "auto" }} className='max-md:mt-10 flex flex-col items-center'>
            <Image src={vector} width={200} alt='pic' className='w-[100%] left-0 absolute h-[300px] -z-20 mx-auto max-lg:hidden' />
            <Typography variant='h3' className='text-center md:mt-3 max-md:text-xl max-md:font-[650]'>
                Customers&apos; Reviews
            </Typography>
            <Typography variant='subtitle1' className='text-center mt-5'>
                Nothing&apos;s better than an electrifying experience at amusement parks
            </Typography>
            <Box className="mx-auto w-[80%] z-10 lg:h-[34vh] relative">
                <CardElement data={data} />
            </Box>
        </div>
    )
}


// Fifth Service Card
const WaterFifth = () => {
    const data = [{
        src: <Image src={first} width={100} height={100} className='w-full h-[270px] max-md:w-[100%] max-lg:h-[100px]' alt='pic' />,
        head: "Crystal Clear Water Quality",
        content: "Water World offers you superior quality water with PH level between 7.2-7.8, protecting your skin from irritation and eyes from cloudiness."
    },
    {
        src: <Image src={second} width={100} height={100} className='w-full h-[270px] max-md:w-[100%] max-lg:h-[100px]' alt='pic' />,
        head: "Impressive architecture",
        content: "Discover our aqua realm adorned with mesmerising infrastructure marvels."
    },
    {
        src: <Image src={third} width={100} height={100} className='w-full h-[270px] max-md:w-[100%] max-lg:h-[100px]' alt='pic' />,
        head: "Periodic Maintenance Sessions",
        content: "We are committed towards your safety. Our regular inspections and maintenance sessions ensure it."
    },
    {
        src: <Image src={fourth} width={100} height={100} className='w-full h-[270px] max-md:w-[100%] max-lg:h-[100px]' alt='pic' />,
        head: "Aquatic Play System for all Ages",
        content: "Our dynamic aquatic play system ensures endless excitement for all, making your day at Water World an unforgettable journey of joy."
    },
    {
        src: <Image src={fifth} width={100} height={100} className='w-full h-[270px] max-md:w-[100%] max-lg:h-[100px]' alt='pic' />,
        head: "Weekend Themes",
        content: "Enhance your weekend experience with our captivating special themes and elevate your water world adventure."
    },
    {
        src: <Image src={sixth} width={100} height={100} className='w-full h-[270px] max-md:w-[100%] max-lg:h-[100px]' alt='pic' />,
        head: "Guardians at Duty",
        content: "Our experienced and trained lifeguards persistently safeguard you and your loved ones."
    },

    ]
    return (
        <div className='w-full h-full flex flex-col gap-[2rem] mt-12 bg-[#FFFAF7] py-16'>
            <div className='flex flex-col h-[10%] justify-evenly'>

                <Typography variant='h3' className='text-center px-[15vw] max-md:text-3xl font-[600]'>What Inspires Your Journey to the Water World? </Typography>
            </div>

            <Box className="w-full h-[90%] max-md:h-auto">
                <CardService data={data} />
            </Box>

        </div>
    )
}

const CardService = ({ data }) => {
    return (
        <div className='grid lg:grid-cols-3 gap-4 gap-y-8 gap-x-8 px-8 w-[90%] h-full mx-auto'>
            {data.map((e, index) => {

                return (
                    <Card key={index} className='lg:w-[90%] w-[70%] h-[100%] max-md:w-full'>
                        <div>
                            {/* <Image src={e.src} width={300} height={300} alt='pic' /> */}
                            {e.src}
                            <Box className="gap-0 flex flex-col">
                                <Typography className='p-4 pb-3 text-[22px] font-[650] max-lg:text-lg'>
                                    {e.head}
                                </Typography>
                                <Typography className='px-4 pb-4'>
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


// Satisfaction Component

const SatisfactionPage = () => {
    return (
        <div className='mt-9'>
            <div className='bg-[#FFEEF6] absolute -z-10 h-[100vh] w-[100vw] left-0'></div>
            <Typography variant='h3' className='text-center mt-[5rem]'>
                Our Satisfaction People Say
                About Our Services
            </Typography>
            <Box className="flex justify-evenly mt-[3rem]">
                <Image src={businessUser} alt='pic' width={200} className='w-[40%] h-[80%]' />
                <Box className="w-[40%] flex flex-col justify-evenly">
                    <div className='flex w-[60%]'>
                        <Image src={user} alt='pic' width={50} className='w-[80px] h-[80px] rounded-[10rem]' />
                        <div className='ml-5'>
                            <Typography variant='h5' className='font-bold'>
                                David K. Vinson
                            </Typography>
                            <Typography variant='subtitle1' className='text-[#FF9900]'>
                                Business Manager
                            </Typography>
                        </div>
                    </div>
                    <Typography variant='subtitle1' className='font-sans text-[22px]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.
                    </Typography>
                    <Typography className='text-[22px]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Typography>
                    <FaQuoteRight className='text-[#FF9900] text-3xl' />
                    <BsThreeDots className='text-[#FF9900] text-3xl' />
                </Box>
            </Box>
        </div>
    )
}


const Index = () => {

    return (
        <div className='w-screen flex flex-col overflow-x-hidden' >

            <section className='w-full min-h-[400px] relative max-lg:min-h-[400px] max-xl:min-h-[400px] xl:h-fit max-md:min-h-[300px] max-sm:min-h-[250px]'>
                <Image className='bg-cover bg-center bg-no-repeat absolute top-0 -z-10  max-sm:h-full object-contain  max-xs:object-cover  ' src={"/Reusable/bg2.jpg"} alt="bacgkround img" width={2042} height={1029} />
                <div className="w-full bottom-[30%] sm:bottom-[50%] lg:bottom-[30%] absolute">
                    <div className=" h-[100%] w-full flex flex-col text-center justify-center items-center ">
                    <h1 className=" text-center px-[10vw] lg:leading-[60px] md:w-full font-extrabold lg:text-[65px] md:text-[50px] md:leading-[46px] text-white sm:text-3xl">
                            Welcome to Water World! An Aquatic Realm of Joy
                        </h1>
                        <p className="text-center w-[60%] lg:px-[20vw] md:px-[10vw] md:w-full md:mt-8 mt-3 lg:text-[20px] lg:leading-[30px] text-white text-xs">
                            A heavenly place to immerse yourself in an oasis of joy.
                        </p>
                    </div>
                </div>

                <div className="w-full h-full flex">
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


            <section className='w-full py-[3vh] lg:mt-16 mt-12 sm:mt-0 '>

                <div className='w-full md:h-full'>
                    <WaterFirst />
                </div>

            </section>

            <section className='w-full h-auto mt-12 sm:h-auto'>

                <div className='w-full h-full'>
                    <WaterSecond />
                </div>

            </section>

            {/* <section className='w-full h-auto py-[3vh] mt-12 max-lg:py-4'>

                <div className='w-full h-full flex max-md:flex-col-reverse max-md:px-[10%] max-md:justify-center'>
                    <WaterThird />

                </div>

            </section> */}

            <section className='w-full lg:h-auto sm:h-auto py-[3vh] mt-12 max-lg:py-4'>

                <div className='w-full h-full max-md:justify-center'>
                    <WaterFourth />
                </div>

            </section>

            <section className='w-full h-auto max-lg:mt-[4rem]  max-md:h-auto'>

                <div className='w-full h-full max-md:justify-center'>
                    <WaterFifth />
                </div>

            </section>

                {/* <section className='w-full h-[60vh] py-[3vh] max-md:h-auto hidden lg:flex'>

                    <div className='w-full h-full flex max-md:justify-center'>
                        <CustomerReviewPage />
                    </div>

                </section> */}


            {/* <section className='w-full h-[100vh] px-[10%] py-[5vh]'>

                <div className='w-full h-full flex max-md:flex-col-reverse max-md:px-[10%] max-md:justify-center'>
                    <SatisfactionPage />
                </div>

            </section> */}




        </div>
    )
}

export default Index
"use client"
import Rides from '@/components/Rides/Rides'
import { animated, useInView } from '@react-spring/web'
import Image from 'next/image'
import React from 'react'
import rides2 from "@/public/Amusement/rides2.jpeg"
import rides3 from "@/public/Amusement/rides3.jpeg"
import rides4 from "@/public/Amusement/rides4.jpeg"
import rides5 from "@/public/Amusement/rides5.jpeg"
import rides6 from "@/public/Amusement/rides6.jpeg"
import rides7 from "@/public/Amusement/rides7.jpeg"
import rides8 from "@/public/Amusement/rides8.jpeg"
import rides9 from "@/public/Amusement/rides9.jpeg";
import rides10 from "@/public/Amusement/rides10.jpeg";
import rides11 from "@/public/Amusement/rides11.webp";
import rides12 from "@/public/Amusement/rides12.webp";
import rides13 from "@/public/Amusement/rides13.webp";
import rides14 from "@/public/Amusement/rides14.webp";
import rides15 from "@/public/Amusement/rides15.webp";
import rides16 from "@/public/Amusement/rides16.webp";
import rides17 from "@/public/Amusement/rides17.webp";
import rides18 from "@/public/Amusement/rides18.webp";
import rides19 from "@/public/Amusement/rides19.webp";
import rides20 from "@/public/Amusement/rides20.webp";
import rides21 from "@/public/Amusement/rides21.webp";
import rides22 from "@/public/Amusement/rides22.webp";
import rides23 from "@/public/Amusement/rides23.webp";
import rides24 from "@/public/Amusement/rides24.webp";
import rides25 from "@/public/Amusement/rides25.webp";
import rides26 from "@/public/Amusement/rides26.webp";





const Index = () => {
  const [ref, props] = useInView(() => ({
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
    config: { duration: 1000 },
    reset: false,
    delay: 1000
  }))

const ridesArray = [
  // { img: rides2,  text: "Mini Dragon Train"},
  { img: rides2, text: "Toy Railway Engine" },
  { img: rides3, text: "Hang Glider" },
  { img: rides4, text: "Matter Horn" },
  { img: rides5, text: "Shark Ride" },
  { img: rides6, text: "Mini Train" },
  { img: rides7, text: "Flying Appu" },
  { img: rides8, text: "Fun Trooper" },
  { img: rides9, text: "MatterHorn" },
  { img: rides10, text: "Cycle Monorail" },
  // { img: rides10, text: "ride 10" },
  // { img: rides10, text: "ride 10" },
  // { img: rides10, text: "ride 10" },
    { img: rides11, text: "Spanish Bull" },
    { img: rides12, text: "Swinging Chair" },
    { img: rides13, text: "Crazy Fireball" },
    { img: rides14, text: "Roller Coaster" },
    { img: rides15, text: "Pendulum " },
    { img: rides16, text: "Power Surge" },
    { img: rides17, text: "Sky Drop" },
    { img: rides18, text: "Orbit" },
    { img: rides19, text: "Moving Bucket" },
    { img: rides20, text: "Swinging Car" },
    { img: rides21, text: "UFO" },
    { img: rides22, text: "Swinging Chair" },
    { img: rides23, text: "Mini Pirate Ship " },
    { img: rides24, text: "Surf Ride" },
    { img: rides25, text: "Space Car" },
    { img: rides26, text: "Fun Trooper" },
    // { img: rides27, text: "Flying Appu" },
  ];
  




  return (
    <div className='w-screen flex flex-col  '>
      <section className='w-full min-h-[629px] relative max-lg:min-h-[400px] max-xl:min-h-[450px] xl:h-fit max-md:min-h-[300px] max-sm:min-h-[250px]'>
        <Image className='bg-cover bg-center bg-no-repeat absolute top-0 -z-10  max-sm:h-full object-contain  max-xs:object-cover ' src={"/Rides&Attractions/hero_background.svg"} alt="bacgkround img" width={2042} height={1029} />
        <div className="w-full bottom-[50%] absolute max-lg:bottom-[40%]">
          <div className=" h-full w-full flex text-center justify-center items-center ">
            <div className=" text-center font-extrabold text-[70px] text-white max-lg:text-6xl max-md:text-5xl  max-xs:text-4xl">
            Adernaline Rides
            </div>
          </div>
        </div>
        <div className="w-full h-full absolute flex ">
          <div className="absolute bottom-[200px] right-[425px] max-xl:bottom-[10vw] max-xl:right-[30%] max-lg:bottom-[16vw] max-md:hidden">
            <Image src="/Rides/Ellipse1.svg" width={18} height={18} />
          </div>
          <div>
            <Image src="/Rides/Ellipse2.svg" width={28} height={28} />
          </div>
          <div className="absolute bottom-[150px] right-[10rem] max-md:hidden ">
            <Image src="/Rides/stars.svg" width={68} height={68} />
          </div>
          <div className="absolute bottom-[200px] left-[89px] max-xl:bottom-[10vw] max-lg:hidden">
            <Image
              src="/Rides/white-shape-banner1.svg"
              width={141}
              height={168}

            />
          </div>
          <div className="absolute bottom-[165px] right-8 max-xl:bottom-[8vw] max-lg:hidden">
            <Image
              src="/Rides/white-shape-banner2.svg"
              width={141}
              height={148}
            />
          </div>
        </div>
        {/* </div> */}
      </section>
      <section className='w-full'>
        <div className='w-full flex text-center items-center flex-col font-dm-sans px-[10%]'>
          <h1 className='font-medium text-6xl text-center max-xs:text-4xl max-xs:font-bold max-lg:text-5xl max-md:text-5xl '>
            Our Rides at the Park
          </h1>
          <div className='text-[#5B5B5B] font-normal text-2xl py-10 max-xs:text-lg'>
            FunWorld Park is an amusement park founded in 1990 that has been expanding ever since. The park includes a full amusement ride park featuring 100+ rides suitable for all ages.
            </div>
            <animated.div className='w-full min-h-screen grid grid-flow-row grid-cols-3 gap-4 max-md:grid-cols-2 max-xs:grid-cols-1 ' ref={ref} style={props} >
            
                {ridesArray.map((ride, index)=>{
                  return (
                    <Rides key={index} img={ride.img} num = {ride.num} text={ride.text} index={index} />  
                  )
                })}
            </animated.div>
          </div>
      </section>
    </div>
  )
}

export default Index
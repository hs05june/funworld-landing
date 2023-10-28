'use client'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

import React from 'react'
import main_pic from "../../public/ride_page/main.jpg"
import pic1 from "../../public/ride_page/image-copyright-2 1.jpg"
import pic2 from "../../public/ride_page/Bengaluru_-_Banded_Kraits 1.jpg"
import pic3 from "../../public/ride_page/image-copyright-2-1536x1024 4.jpg"

import { BsFillExclamationTriangleFill, BsFillArrowRightCircleFill, BsSpeedometer2 } from "react-icons/bs"

import { VscSymbolRuler } from "react-icons/vsc"

import { MdOutlineLocationOn } from "react-icons/md"



import rides2 from "@/public/Amusement/rides2.jpeg"
import rides3 from "@/public/Amusement/rides3.jpeg"
import rides4 from "@/public/Amusement/rides4.jpeg"
import rides5 from "@/public/Amusement/rides5.jpeg"
import rides6 from "@/public/Amusement/rides6.jpeg"
import rides7 from "@/public/Amusement/rides7.jpeg"
import rides8 from "@/public/Amusement/rides8.jpeg"
import rides9 from "@/public/Amusement/rides9.jpeg"
import rides10 from "@/public/Amusement/rides10.jpeg"
// import rides11 from "@/public/Amusement/rides11.webp"
// import rides12 from "@/public/Amusement/rides12.webp"
// import rides13 from "@/public/Amusement/rides13.webp"
// import rides14 from "@/public/Amusement/rides14.webp"
// import rides15 from "@/public/Amusement/rides15.webp"
// import rides16 from "@/public/Amusement/rides16.webp"
// import rides17 from "@/public/Amusement/rides17.webp"
// import rides18 from "@/public/Amusement/rides18.webp"
// import rides19 from "@/public/Amusement/rides19.webp"
// import rides20 from "@/public/Amusement/rides20.webp"
// import rides21 from "@/public/Amusement/rides21.webp"
// import rides22 from "@/public/Amusement/rides22.webp"
// import rides23 from "@/public/Amusement/rides23.webp"
// import rides24 from "@/public/Amusement/rides24.webp"
// import rides25 from "@/public/Amusement/rides25.webp"
// import rides26 from "@/public/Amusement/rides26.webp"
// import rides27 from "@/public/Amusement/rides27.webp"



const Disclaimer = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('ride');

  const ridesArray = [
    { img: rides2,  text: "ride 1", desc:"hello this is a dummy description",  rideNotFor:"This is another dummy text"},
    { img: rides2, text: "ride 2" },
    { img: rides3, text: "ride 3" },
    { img: rides4, text: "ride 4" },
    { img: rides5, text: "ride 5" },
    { img: rides6, text: "ride 6" },
    { img: rides7, text: "ride 7" },
    { img: rides8, text: "ride 8" },
    { img: rides9, text: "ride 9" },
    { img: rides10, text: "ride 10" },
    // { img: rides11, text: "ride 11" },
    // { img: rides12, text: "ride 12" },
    // { img: rides13, text: "ride 13" },
    // { img: rides14, text: "ride 14" },
    // { img: rides15, text: "ride 15" },
    // { img: rides16, text: "ride 16" },
    // { img: rides17, text: "ride 17" },
    // { img: rides18, text: "ride 18" },
    // { img: rides19, text: "ride 19" },
    // { img: rides20, text: "ride 20" },
    // { img: rides21, text: "ride 21" },
    // { img: rides22, text: "ride 22" },
    // { img: rides23, text: "ride 23" },
    // { img: rides24, text: "ride 24" },
    // { img: rides25, text: "ride 25" },
    // { img: rides26, text: "ride 26" },
    // { img: rides27, text: "ride 27" },
  ];


  const requiredObject = ridesArray[search];
  // console.log(requiredObject);

  // console.log(search);

  return (
    <div className='w-full flex flex-col '>
      <section className='w-full min-h-[629px] relative max-lg:min-h-[400px] max-xl:min-h-[450px] xl:h-fit max-md:min-h-[300px] max-sm:min-h-[250px]' >
      <Image className='bg-cover bg-center bg-no-repeat absolute top-0 -z-10  max-sm:h-full object-contain  max-xs:object-cover ' src={"/Contact/hero_background.svg"} alt="bacgkround img" width={2042} height={1029} />
      <div className="w-full bottom-[50%] absolute max-lg:bottom-[40%]">
          <div className=" h-full w-full flex text-center justify-center items-center ">
            <div className=" text-center font-extrabold text-[70px] text-white max-lg:text-6xl max-md:text-5xl  max-xs:text-4xl ">
              Ride Details
            </div>
          </div>
        </div>
      </section>
      {/* <div className='z-10 text-white flex items-center justify-center pt-[220px] text-[60px] font-[700]'>
        <p>Ride Details</p>
      </div> */}
      <section className='w-full'>
      <div className='px-[13vw] flex flex-col gap-8 text-[#5B5B5B] mt-20 max-lg:px-[7vw] '>

        <div className='flex max-md:flex-col'>
          <div className='w-[50%] max-md:w-full'>
            <Image src={main_pic} width={672} height={200} alt='/' className='w-full' />
            <p className='mt-10 text-lg'>

              Wonderla introduces India’s first-ever reverse looping Roller Coaster - RECOIL, which will give you a whole new experience of thrill. This high tech roller coaster is imported from the Netherlands and has two track ramps that go up to 40 meters. The train climbs one ramp and accelerates to 80 kmph in 1 second, before encountering a ‘cobra roll’ and a ‘loop’ in the tracks, climbing the second ramp, again to a 40 m height, and then doing it all over all again, only this time, it is backwards!
            </p>
          </div>

          <div className='ml-10 w-[50%] max-md:w-full max-md:ml-0 max-md:my-8 '>
            <div className='sidebox-css w-full h-[480px] border rounded-xl text-white pl-8 flex flex-col justify-evenly'>
              <h1 className='text-[28px]'>Ride Info</h1>
              <div className='flex flex-col justify-between leading-8'>
                <div className='flex'>
                  <BsSpeedometer2 className='mt-2 text-2xl' />
                  <div className='ml-4'>

                    <h4 className='text-[18px]'>
                      Mild
                    </h4>
                    <p className='text-[16px]'>Thrill Level</p>
                  </div>
                </div>


                <div className='h-[1px] w-[300px] bg-white my-2' />

                <div className='flex flex-col justify-between leading-8'>
                  <div className='flex'>
                    <VscSymbolRuler className='mt-2 text-2xl' />
                    <div className='ml-4'>

                      <h4 className='text-[18px]'>
                        None with adult, 38&#8221; to
                        ride alone
                      </h4>
                      <p className='text-[16px]'>Thrill Level</p>
                    </div>
                  </div>
                </div>

                <div className='h-[1px] w-[300px] bg-white my-2' />

                <div className='flex flex-col justify-between leading-8'>
                  <div className='flex'>
                    <MdOutlineLocationOn className='mt-2 text-2xl' />
                    <div className='ml-4'>

                      <h4 className='text-[18px]'>
                        Seaside Junction
                      </h4>
                      <p className='text-[16px]'>Location in Park</p>
                    </div>
                  </div>
                </div>

              </div>
              <button className='border border-white rounded-full w-[200px] p-3 ml-full flex justify-evenly'><p>ADA Guildelines</p><BsFillArrowRightCircleFill className='mt-[2px] text-xl' /></button>
            </div>

            <div className='sidebox-css w-full h-[280px] rounded-xl text-center text-white mt-10 flex flex-col justify-evenly'>

              <h1 className='text-[28px] flex ml-4'><BsFillExclamationTriangleFill className='mt-[5px]' /><p className='ml-3'>Ride Not For</p></h1>
              <p className='text-[18px] text-left ml-4 leading-10'>Pregnant Women, heart patients, persons with high blood pressure and those prone to epilepsy are advised to avoid fast/adventurous rides.</p>
            </div>
          </div>
        </div>
        <div className='flex'>

          <Image src={pic1} width={230} height={203} alt='/' />
          <Image src={pic2} width={230} height={203} alt='/' />
          <Image src={pic3} width={230} height={203} alt='/' />
        </div>
      </div>
      </section>
    </div>
  )
}

export default Disclaimer
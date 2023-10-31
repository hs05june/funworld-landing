import React, { useEffect } from 'react'
import LogoBnG from "@/public/Home/footer/LogoBnG.svg"
import Wires from "@/public/Reusable/wires.webp"
import fbFooter from "@/public/Reusable/fbFooter.webp"
import igFooter from "@/public/Reusable/igFooter.webp"
import pinintrestFooter from "@/public/Reusable/pinintrestFooter.webp"
import twitterFooter from "@/public/Reusable/twitterFooter.webp"
import footerAddress from "@/public/Reusable/footer-address.webp"
import footerEmail from "@/public/Reusable/footer-email.webp"
import footerCall from "@/public/Reusable/foter-call.webp"
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu } from "react-icons/ai"

const Footer = () => {

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    if (!cart) {
      const cart = []
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [])

  const handleCopyNumber = async() => {
    try {
      await navigator.clipboard.writeText('08431110000');
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    }
  }

  return (
    <div className='relative overflow-hidden mt-10'>
      <Image priority className='absolute lg:block hidden md:left-4 z-30 rotate-6 md:bottom-[240px] bottom-[600px]' src={Wires} alt="wires" />


      {/* will uncomment it later */}
      {/* <div className='z-10 absolute mb-40 right-[-60px] md:bottom-[280px] bottom-[540px] bg-gradient-to-b from-[#FD1783] to-[#FFCC00] md:h-[170px] md:w-[170px] h-[120px] w-[120px] flex items-center rounded-full justify-center'>
        <div className='w-[80%] h-[80%] bg-white flex items-center rounded-full justify-center'>
          <div className='w-[80%] h-[80%] flex items-center rounded-full justify-center bg-red-400' >
            <div className='w-[80%] h-[80%] flex items-center rounded-full justify-center bg-white'>
            </div>

          </div>
        </div>
      </div> */}
      <div className='min-h-[400px] relative overflow-hidden lg:mt-12 text-white py-8 bg-[#1F1F34] bg-[url("../public/Home/footer/footerBG.webp")] flex flex-row flex-wrap  items-start xl:gap-8 lg:gap-6 gap-x-4 gap-y-8 md:pl-[10vw] md:justify-between justify-around md:pr-[5vw] md:pt-20 pb-12 '>

        <div className='lg:w-[25vw] w-[100vw]'>
          <div className='flex relative top-[-50px] flex-col items-center gap-4 my-8'>
            <Image src={LogoBnG} priority alt="logo" />
            <div className='w-full flex gap-4 flex-col'>
                <div className='flex gap-3 items-center ml-12 lg:ml-0'>
                  <div>
                    <Image priority src={footerCall} alt="calling icon" />
                  </div>
                  <div className='text-[12px] cursor-pointer' onClick={handleCopyNumber} title='Click to Copy'>
                    <p className='hover:text-[#FFBF0A] hover:scale-105 transition-all delay-200 md:text-base'>084311 10000</p>
                    {/* <p className='hover:text-[#FFBF0A] hover:scale-105 transition-all delay-200 md:text-base'>1234567890 / 080-12345612</p> */}
                  </div>
                </div>

                <div className='flex gap-3 items-center text-[12px] ml-12 lg:ml-0'>
                  <Image priority src={footerEmail} alt="Email icon" />

                  <Link href={'mailto:info@funworldblr.com'}><p className='hover:text-[#FFBF0A] hover:scale-105 transition-all delay-200 cursor-pointer md:text-base'> info@funworldblr.com</p></Link>
                </div>
                <Link href={'https://www.google.co.in/maps/dir//Fun+World+Amusement+Park,+Palace+Grounds,+Jayamahal+Main+Rd,+opposite+TV+Tower,+J.C.Nagar,+Bengaluru,+Karnataka+560006/@13.0069448,77.5895227,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae17b55c78182f:0xd46d15155f682466!2m2!1d77.5920976!2d13.0069448?entry=ttu'}>
                <div className='flex gap-2 items-center text-center text-[12px] lg:px-0  px-12'>
                  <Image priority src={footerAddress} alt="Address icon" />
                  <p className='hover:text-[#FFBF0A] hover:scale-105 transition-all delay-200 md:text-base text-left'>Palace Grounds, Jayamahal Main Rd, Opposite TV Tower, J.C.Nagar Bengaluru, Karnataka 560006</p>
                </div>
                  </Link>
            </div>
            
          </div>
        </div>

        <div className='flex flex-col md:gap-6 gap-2 px-6'>
          <div className='md:text-2xl font-[600]'>Help & Info</div>
          <ul className='flex flex-col md:gap-4 gap-1 list-disc	text-[11px]'>

            <li className='hover:text-[#FFBF0A] hover:scale-105 transition-all delay-200 md:text-base'>
              <Link href="/directions">
                Park Directions
              </Link>
            </li>

            <li className='hover:text-[#FFBF0A] hover:scale-105 transition-all delay-200 md:text-base'>
              <Link href={`/guidelines/policy`}>
                Policy
              </Link>
            </li>

            <li className='hover:text-[#FFBF0A] hover:scale-105 transition-all delay-200 md:text-base'>
              <Link href={`/guidelines/disabledguests`}>
                Guests with Disabilities
              </Link>
            </li>


            <li className='hover:text-[#FFBF0A] hover:scale-105 transition-all delay-200 md:text-base'>
              <Link href={`/safetymeasures`}>
                Covid19 Safety
              </Link>
            </li>

          </ul>
        </div>

        <div className='flex flex-col md:gap-6 gap-2 px-6'>
          <div className='md:text-2xl font-[600]'>Park Info</div>
          <ul className='flex flex-col md:gap-4 gap-1 list-disc	text-[11px]'>

            <li className='hover:text-[#FFBF0A] hover:scale-105 transition-all delay-200 md:text-base'>

              <Link href="/rides&attractions">
                Rides & Attractions
              </Link>
            </li>

            <li className='hover:text-[#FFBF0A] hover:scale-105 transition-all delay-200 md:text-base'>

              <Link href="/facilities">
                Facilities at the Park
              </Link>
            </li>

            <li className='hover:text-[#FFBF0A] hover:scale-105 transition-all delay-200 md:text-base'>
              <Link href="/schools&colleges">
                Schools & Colleges

              </Link>
            </li>

            <li className='hover:text-[#FFBF0A] hover:scale-105 transition-all delay-200 md:text-base'>


              <Link href="/park-prohibitions">
                Park Prohibitions
              </Link>
            </li>

          </ul>
        </div>

        <div className='flex flex-col md:gap-6 gap-2 px-2 '>
          <div className='md:text-2xl font-[600]'>Important</div>
          <ul className='flex flex-col md:gap-4 gap-1 list-disc text-[11px]'>

            <li className='hover:text-[#FFBF0A] hover:scale-105 transition-all delay-200 md:text-base'>
              <Link href="/guidelines/codeofsafety">
                Code of Safety
              </Link>
            </li>

            <li className='hover:text-[#FFBF0A] hover:scale-105 transition-all delay-200 md:text-base'>
              <Link href="/guidelines/codeofconduct">
                Code of Conduct
              </Link>
            </li>

            <li className='hover:text-[#FFBF0A] hover:scale-105 transition-all delay-200 md:text-base'>
              <Link href="/guidelines/rules">
                Rules & Regulations
              </Link>
            </li>

            <li className='hover:text-[#FFBF0A] hover:scale-105 transition-all delay-200 md:text-base'>
              <Link href="/guidelines/disclaimer">
                Disclaimer
              </Link>
            </li>

          </ul>
        </div>

        <div className='flex xl:flex-col flex-row md:justify-start justify-center gap-4 my-6' >
          <Link href='https://www.facebook.com/funworld.bangalore/' target='_blank' className='hover:bg-gradient-to-r from-[#FC0] to-[#FD1783] hover:scale-105 transition-all delay-200 border-2 border-white flex items-center justify-center rounded-full p-2'>
            <Image priority src={fbFooter} alt="facebook icon" />
          </Link>
          <Link href='https://www.instagram.com/funworld__blr/?hl=en' target='_blank' className='hover:bg-gradient-to-r from-[#FC0] to-[#FD1783] hover:scale-105 transition-all delay-200 border-2 border-white flex items-center justify-center rounded-full p-2'>
            <Image priority src={igFooter} alt="facebook icon" />
          </Link>
          <Link href="https://twitter.com/funworld_blr?lang=en" target='_blank' className='hover:bg-gradient-to-r from-[#FC0] to-[#FD1783] hover:scale-105 transition-all delay-200 border-2 border-white flex items-center justify-center rounded-full p-2'>
            <Image priority src={twitterFooter} alt="facebook icon" />
          </Link>
          {/* <div className='hover:bg-gradient-to-r from-[#FC0] to-[#FD1783] hover:scale-105 transition-all delay-200 border-2 border-white flex items-center justify-center rounded-full p-2'>
            <Image src={pinintrestFooter} alt="facebook icon" />
          </div> */}
        </div>
      </div>

      <div className='bg-[#33344E] text-white md:py-2 md:text-[14px] text-[8px] flex justify-around'>
        <div className='flex items-center justify-center md:gap-4 gap-2'>
          <Link href="/about"><span>About</span> </Link>
          <div className='w-[1px] h-[15px] bg-white'></div>
          <Link href="/contactus"><span>Contact us</span></Link>
          <div className='w-[1px] h-[15px] bg-white'></div>

          <Link href="/terms-conditions"><span>Terms & Conditions</span></Link>
          <div className='w-[1px] h-[15px] bg-white'></div>

          <Link href="/policy"><span>Privacy Policy</span></Link>
        </div>

        <div>
          Copyright @2023 funworld pvt ltd

        </div>

      </div>
    </div>
  )
}

export default Footer
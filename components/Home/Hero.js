import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Home/Carousel/Image1.webp

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleCLick = (arrow) => {
    if (arrow === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  useEffect(() => {
    // console.log(slideIndex)
  }, [slideIndex]);

  return (
    <div>
      <div className="overflow-hidden lg:mb-16">
        {/* <div className='w-[100%] xl:min-h-[100vh] flex relative '>
          <div onClick={() => handleCLick("left")} className='p-2 z-10 absolute top-0 bottom-0  md:left-[70px] left-[20px] m-auto cursor-pointer rounded-full border-2 border-[#FF9900] w-[30px] h-[30px] flex items-center justify-center'>
            <Image priority src={arrow1} alt="back arrow" />
          </div>
          <div style={{
            transform: `translateX(${slideIndex * -100}vw)`,
            transitionProperty: 'all',
            transitionDuration: '1000ms',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDelay: '300ms',

          }}
            className={`h-full flex`}>

            <div className='flex w-[100vw] justify-center' id="slide">
              <div className=''>
                <Image priority src={IMG1} alt="img1" />
              </div>
            </div>

            <div className='flex  w-[100vw] justify-center' id="slide">
              <div className=''>
                <Image priority src={IMG2} alt="img1" />
              </div>
            </div>

            <div className='flex w-[100vw] justify-center' id="slide">
              <div className=''>
                <Image priority src={IMG3} alt="img1" />
              </div>
            </div>


          </div>



          <div onClick={() => handleCLick("right")} className='p-2 z-10 absolute top-0 bottom-0 md:right-[70px]  right-[20px] m-auto cursor-pointer bg-[#FF9900]  rounded-full border-2 border-[#FF9900] w-[30px] h-[30px] flex items-center justify-center'>
            <Image priority width={50} src={arrow2} alt="forward arrow" />
          </div>

        </div> */}

        <div className="relative ">
          <img
            priority
            src={
              "https://funworldblr.s3.amazonaws.com/public/Home/hero/hero1.jpg"
            }
            alt="hero img"
            className="2xl:w-full  max-sm:h-full object-contain  max-xs:object-cover"
          />
          {/* <Link href="/tickets" className='absolute top-[730px] z-10 left-[13%] rounded-xl' >
            <Image src={buy} alt="buy tickets button" />
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;

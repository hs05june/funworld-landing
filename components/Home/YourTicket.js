"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ProceedBtn from "@/components/Repeating/Button.js";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import Link from "next/link";

const YourTicket = () => {
  const splideRef = useRef(null);
  const options = {
    perPage: 1,
    arrows: false,
    perMove: 1,
    focus: "center",
    pagination: false,
    start: 0,
    gap: "30px",
    rewind: true,
    DragEvent: true,
    scrollX: true,
    autoplay: 2000,
  };

  const [comp, setComp] = useState(1);
  const [ride, setRide] = useState(1);

  // const [imgRef, imgProps] = useInView(() => ({
  //     from: {
  //         y: 100,
  //         opacity: 0,
  //     },
  //     to: {
  //         y: 0,
  //         opacity: 1
  //     },
  //     config: { duration: 1000 },
  //     reset: false,
  //     reverse: false,
  //     delay: 1000
  // }))
  // const [divRef, divProps] = useInView(() => ({
  //     from: {
  //         y: 100,
  //         opacity: 0,
  //     },
  //     to: {
  //         y: 0,
  //         opacity: 1
  //     },
  //     config: { duration: 1000 },
  //     reset: false,
  //     reverse: false,
  //     delay: 1000
  // }))

  const handleCompChange = (x) => {
    setComp(x);
  };

  return (
    <div className="w-screen">
      <div className='xl:min-h-[125vh] lg:min-h-[90vh] md:h-[75vh] h-[80vh] lg:px-[10vw] flex items-center text-white flex-col text-center w-full relative cursor-none bg-[url("https://funworldblr.s3.amazonaws.com/public/Home/ticket/Water_Image.jpg")] 2xl:bg-cover'>
        <Image
          priority
          src={
            "https://funworldblr.s3.amazonaws.com/public/Home/ticket/Water_Image.jpg"
          }
          alt="girl in pool"
          height={2200}
          width={1650}
          className="lg:block hidden absolute -z-20 w-full h-auto 2xl:w-full  max-sm:h-full object-contain  max-xs:object-cover"
        />

        <div className="w-full  flex flex-col items-center text-center justify-center xl:min-h-[125vh] lg:min-h-[90vh] md:h-[75vh] h-[60vh] md:gap-8 gap-4">
          <h2 className="xl:text-[62px] xl:leading-[62px] lg:text-[45px] lg:leading-[45px] md:text-[32px] md:leading-[32px] text-[18px] leading-[22px] font-[600] ">
            Safety First: Our Amusement Park Takes Your Fun Seriously!
          </h2>
          <p className="lg:px-32 md:px-16 px-4 md:text-[20px]  lg:leading-[32px] liquid">
            At our amusement park in Bengaluru, your safety is our top priority.
            We follow strict safety guidelines, conduct regular inspections, and
            have trained staff for both water & non-water rides to ensure you
            have a blast with peace of mind!
          </p>
          <Link href={"/amusementpark"}>
            <button className="rounded-full md:text-[21px] px-3 py-2  shadow-md md:px-6 md:py-3 text-white font-[500] flex gap-4 items-center  text-center  justify-center btn2 ">
              <div className="flex justify-center items-center translate-x-[10%] hover:translate-x-[0%] btnDiv ">
                <span className="">More About</span>
                <span className="button-arrow ml-3 ">
                  <BsArrowRightCircleFill size={30} />
                </span>
              </div>
            </button>
          </Link>
          {/* <button className='px-4 text-xl py-3 rounded-3xl border-[2px] transition-all delay-150 flex items-center gap-4 font-[500] leading-[19px] border-white liquid'><span className='translate-x-[15%]  hover:translate-x-[0%] transitions'>More About</span><span className='ml-5 button-arrow '><BsArrowRightCircleFill size={25} />
                    </span></button> */}
        </div>
      </div>

      <div
        className={`lg:clip-path-ticket bg-[#EBF0FE] sm:min-h-[60vh] md:min-h-[80vh] relative top-[-150px] lg:pt-[230px] pt-[70px] px-[10vw] pb-8`}
      >
        <img
          priority
          style={{ transform: "rotate(-10deg)" }}
          className="absolute z-10 top-2 left-6 lg:block hidden"
          src={
            "https://funworldblr.s3.amazonaws.com/public/Home/parkAttractions/parkAttractions4.webp"
          }
          alt="ballons"
        />

        <div
          className="flex flex-col items-center justify-center lg:gap-16 md:gap-8 gap-4"
          //  ref={divRef} style={divProps}
        >
          <h2 className="xl:text-[62px] xl:leading-[68px] lg:text-[45px] lg:leading-[47px] md:text-[32px] md:leading-[34px] text-[24px] leading-[24px] text-[#0B1A48] mb-6 font-[620] text-center px-4">
            Splash, Spin, Soar: Your Ultimate
            <br /> Family Escape Awaits!
          </h2>

          <div className="lg:block hidden">
            <div
              className={`flex lg:flex-row flex-col  lg:items-center justify-around xl:gap-4 lg:gap-2 gap-4 xl:text-[23px] xl:leading-[25px] lg:text-[19px] md:text-[17px] text-[15px] font-[620] text-[#2A324A]`}
            >
              <button
                onClick={() => {
                  handleCompChange(1);
                }}
                className={`flex px-6 py-3 rounded-3xl lg:w-auto  w-[90vw] ${
                  comp === 1 &&
                  " text-white font-[500] bg-gradient-to-br from-[#FFCC00] to-[#FD1783]"
                }`}
              >
                Adrenaline Rides
              </button>
              <button
                className={`flex px-6 py-3 lg:w-auto w-[90vw] rounded-3xl ${
                  comp === 2 &&
                  " text-white font-[500] bg-gradient-to-br   from-[#FFCC00] to-[#FD1783]"
                }`}
                onClick={() => {
                  handleCompChange(2);
                }}
              >
                Land Rides
              </button>
              <button
                className={`flex px-6 py-3 rounded-3xl lg:w-auto w-[90vw] ${
                  comp === 3 &&
                  " text-white font-[500] bg-gradient-to-br  from-[#FFCC00] to-[#FD1783]"
                }`}
                onClick={() => {
                  handleCompChange(3);
                }}
              >
                Water Rides
              </button>
              <button
                className={`flex px-6 py-3 rounded-3xl lg:w-auto w-[90vw] ${
                  comp === 4 &&
                  " text-white font-[500] bg-gradient-to-br   from-[#FFCC00] to-[#FD1783]"
                }`}
                onClick={() => {
                  handleCompChange(4);
                }}
              >
                Kids Rides
              </button>
              <button
                className={`flex px-6 py-3 rounded-3xl lg:w-auto w-[90vw] ${
                  comp === 5 &&
                  " text-white font-[500] bg-gradient-to-br   from-[#FFCC00] to-[#FD1783]"
                }`}
                onClick={() => {
                  handleCompChange(5);
                }}
              >
                Family Rides
              </button>
            </div>
            <div className="mt-8">
              {comp === 1 ? (
                <div className="flex fade-in active">
                  <div className="flex-1 bg-cover lg:block">
                    <Image
                      className="h-full w-full"
                      src={
                        "https://funworldblr.s3.amazonaws.com/public/Rides/Nadrides-min.jpg"
                      }
                      width={1500}
                      height={1000}
                      priority
                      alt="slide"
                    />
                  </div>
                  <div className="flex-1 lg:ml-12 lg:items-start items-center lg:text-start text-center flex flex-col xl:gap-8 gap-4">
                    <div className="xl:text-[50px] lg:text-[42px] md:text-[34px] text-[24px] font-[620] text-[#0B1A48]">
                      Adrenaline Rides
                    </div>
                    <p className="text-justify xl:text-[20px] xl:leading-[33px] text-[#5B5B5B]">
                      Calling all thrill-seekers to experience the rush of our
                      adrenaline rides! In our amusement park and water park in
                      Banglore, these high-octane attractions will leave you
                      breathless and exhilarated. Brave daring loops, wild
                      drops, and heart-pounding speeds as you challenge yourself
                      to the ultimate adventure.
                      <br /> Feel the adrenaline surge through your veins on
                      these mind-blowing rides designed for adrenaline junkies.
                      Visit us and unleash your inner daredevil!
                    </p>
                    <Link href="/highthrillrides">
                      <ProceedBtn text="Know More" />
                    </Link>
                  </div>
                </div>
              ) : comp === 2 ? (
                <div className="flex fade-in active">
                  <div className="flex-1 bg-cover lg:block hidden">
                    <Image
                      className="h-full w-full"
                      src={
                        "https://funworldblr.s3.amazonaws.com/public/Amusement/landrides.jpg"
                      }
                      width={1500}
                      height={1000}
                      priority
                      alt="slide"
                    />
                  </div>
                  <div className="flex-1 lg:ml-12 lg:items-start items-center lg:text-start text-center flex flex-col xl:gap-8 gap-4">
                    <div className="xl:text-[50px] lg:text-[42px] md:text-[34px] text-[24px] font-[620] text-[#0B1A48]">
                      Land Rides
                    </div>
                    <p className="text-justify xl:text-[20px] xl:leading-[33px] text-[#5B5B5B]">
                      Discover a world of excitement and joy on our thrilling
                      land rides at the amusement park. From the classic
                      carousel to the heart-pounding roller coasters,
                      there&apos;s something for everyone. Riders of all ages
                      can experience delightful adventures as they twist, turn,
                      and soar through the air.
                    </p>
                    <p className="text-justify xl:text-[20px] xl:leading-[33px] text-[#5B5B5B]">
                      {" "}
                      Gather your loved ones and share moments of laughter and
                      bonding on these incredible attractions. Get ready for a
                      day filled with endless fun and cherished memories!
                    </p>
                    <Link href="/landrides">
                      <ProceedBtn text="Know More" />
                    </Link>
                  </div>
                </div>
              ) : comp === 3 ? (
                <div className="flex fade-in active">
                  <div className="flex-1 bg-cover lg:block hidden">
                    <Image
                      className="h-full w-full"
                      src={
                        "https://funworldblr.s3.amazonaws.com/public/Rides/Nwaterrides2-min.jpg"
                      }
                      width={1500}
                      height={1000}
                      priority
                      alt="slide"
                    />
                  </div>
                  <div className="flex-1 lg:ml-12 lg:items-start items-center lg:text-start text-center flex flex-col xl:gap-8 gap-4">
                    <div className="xl:text-[50px] lg:text-[42px] md:text-[34px] text-[24px] font-[620] text-[#0B1A48]">
                      Water Rides
                    </div>
                    <p className="text-justify xl:text-[20px] xl:leading-[33px] text-[#5B5B5B]">
                      Dive into aquatic excitement with our fantastic water
                      rides at the water park. From twisting water slides to
                      lazy rivers, it&apos;s a watery paradise for all ages.
                      Kids can splash and play on kids rides in the water park,
                      while adults seek thrill on adult rides in the water park.
                      <br />
                      Families can bond on the entertaining family rides in the
                      water park. And if you crave intense thrills, adrenaline
                      rides in Bangalore&apos;s water park are guaranteed to
                      satisfy your adventurous spirit. Get soaked in a world of
                      fun!
                    </p>
                    <Link href="/waterrides">
                      <ProceedBtn text="Know More" />
                    </Link>
                  </div>
                </div>
              ) : comp === 4 ? (
                <div className="flex fade-in active">
                  <div className="flex-1 bg-cover lg:block hidden">
                    <Image
                      className="h-full w-full"
                      src={
                        "https://funworldblr.s3.amazonaws.com/public/Amusement/children_rides.jpg"
                      }
                      width={1500}
                      height={1000}
                      priority
                      alt="slide"
                    />
                  </div>
                  <div className="flex-1 lg:ml-12 lg:items-start items-center lg:text-start text-center flex flex-col xl:gap-8 gap-4">
                    <div className="xl:text-[50px] lg:text-[42px] md:text-[34px] text-[24px] font-[620] text-[#0B1A48]">
                      Kids Rides
                    </div>
                    <p className="text-justify xl:text-[20px] xl:leading-[33px] text-[#5B5B5B]">
                      Designed with little adventurers in mind, our kids&apos;
                      rides in the amusement park and water park offer safe and
                      enchanting experiences. From gentle carousels to mini
                      water slides, children will be all smiles.
                    </p>
                    <p className="text-justify xl:text-[20px] xl:leading-[33px] text-[#5B5B5B]">
                      Parents can join the fun or watch proudly from the
                      sidelines as their kids create cherished memories on our
                      specially curated rides. Safety is our top priority,
                      ensuring worry-free enjoyment for the whole family.
                    </p>
                    <Link href="/kidsrides">
                      <ProceedBtn text="Know More" />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="flex fade-in active">
                  <div className="flex-1 bg-cover lg:block hidden">
                    <Image
                      className="h-full w-full"
                      src={
                        "https://funworldblr.s3.amazonaws.com/public/Amusement/Nfamilyrides.jpg"
                      }
                      width={1500}
                      height={1000}
                      priority
                      alt="slide"
                    />
                  </div>
                  <div className="flex-1 lg:ml-12 lg:items-start items-center lg:text-start text-center flex flex-col xl:gap-8 gap-4">
                    <div className="xl:text-[50px] lg:text-[42px] md:text-[34px] text-[24px] font-[620] text-[#0B1A48]">
                      Family Rides
                    </div>
                    <p className="text-justify xl:text-[20px] xl:leading-[33px] text-[#5B5B5B]">
                      Families seeking shared moments of joy will love our
                      diverse range of family rides in the amusement park and
                      water park. Whether it&apos;s a thrilling coaster ride or
                      a relaxing boat trip, these attractions cater to all
                      generations.
                    </p>
                    <p className="text-justify xl:text-[20px] xl:leading-[33px] text-[#5B5B5B]">
                      Family rides in the amusement park and water park provide
                      youngsters with the chance to explore alongside their
                      loved ones. So gather your family and embark on a day full
                      of laughter and bonding!
                    </p>
                    <Link href="/familyrides">
                      <ProceedBtn text="Know More" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="lg:hidden block">
            <Splide options={options} className="w-[100vw]" ref={splideRef}>
              <SplideSlide>
                <div className="flex-1 items-center text-center flex flex-col gap-4 px-6">
                  <div className="flex-1 bg-cover lg:block">
                    <Image
                      className="h-full w-full"
                      src={
                        "https://funworldblr.s3.amazonaws.com/public/funworld123.jpg"
                      }
                      width={1500}
                      height={1000}
                      priority
                      alt="slide"
                    />
                  </div>
                  <div className="xl:text-[50px] lg:text-[42px] md:text-[34px] text-[24px] font-[620] text-[#0B1A48]">
                    Adrenaline Rides
                  </div>
                  <p className="text-justify xl:text-[20px] xl:leading-[33px] text-[#5B5B5B]">
                    Calling all thrill-seekers to experience the rush of our
                    adrenaline rides! In our amusement park and water park in
                    Banglore, these high-octane attractions will leave you
                    breathless and exhilarated. Brave daring loops, wild drops,
                    and heart-pounding speeds as you challenge yourself to the
                    ultimate adventure.
                    <br /> Feel the adrenaline surge through your veins on these
                    mind-blowing rides designed for adrenaline junkies. Visit us
                    and unleash your inner daredevil!
                  </p>
                  <Link href="/highthrillrides">
                    <ProceedBtn text="Know More" />
                  </Link>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="flex">
                  <div className="flex-1 lg:ml-12 lg:items-start items-center lg:text-start text-center flex flex-col xl:gap-8 gap-4 px-6">
                    <div className="flex-1 bg-cover lg:block">
                      <Image
                        className="h-full w-full"
                        src={
                          "https://funworldblr.s3.amazonaws.com/public/Amusement/landrides.jpg"
                        }
                        width={1500}
                        height={1000}
                        priority
                        alt="slide"
                      />
                    </div>
                    <div className="xl:text-[50px] lg:text-[42px] md:text-[34px] text-[24px] font-[620] text-[#0B1A48]">
                      Land Rides
                    </div>
                    <p className="text-justify xl:text-[20px] xl:leading-[33px] text-[#5B5B5B]">
                      Discover a world of excitement and joy on our thrilling
                      land rides at the amusement park. From the classic
                      carousel to the heart-pounding roller coasters,
                      there&apos;s something for everyone. Riders of all ages
                      can experience delightful adventures as they twist, turn,
                      and soar through the air.
                      <br />
                      Gather your loved ones and share moments of laughter and
                      bonding on these incredible attractions. Get ready for a
                      day filled with endless fun and cherished memories!
                    </p>
                    <Link href="/landrides">
                      <ProceedBtn text="Know More" />
                    </Link>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="flex">
                  <div className="flex-1 lg:ml-12 lg:items-start items-center lg:text-start text-center flex flex-col xl:gap-8 gap-4 px-6">
                    <div className="flex-1 bg-cover lg:block">
                      <Image
                        className="h-full w-full"
                        src={
                          "https://funworldblr.s3.amazonaws.com/public/funworld1234.jpg"
                        }
                        width={1500}
                        height={1000}
                        priority
                        alt="slide"
                      />
                    </div>
                    <div className="xl:text-[50px] lg:text-[42px] md:text-[34px] text-[24px] font-[620] text-[#0B1A48]">
                      Water Rides
                    </div>
                    <p className="text-justify xl:text-[20px] xl:leading-[33px] text-[#5B5B5B]">
                      Dive into aquatic excitement with our fantastic water
                      rides at the water park. From twisting water slides to
                      lazy rivers, it&apos;s a watery paradise for all ages.
                      Kids can splash and play on kids rides in the water park,
                      while adults seek thrill on adult rides in the water park.
                      <br />
                      Families can bond on the entertaining family rides in the
                      water park. And if you crave intense thrills, adrenaline
                      rides in Bangalore&apos;s water park are guaranteed to
                      satisfy your adventurous spirit. Get soaked in a world of
                      fun!
                    </p>
                    <Link href="/waterrides">
                      <ProceedBtn text="Know More" />
                    </Link>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="flex">
                  <div className="flex-1 lg:ml-12 lg:items-start items-center lg:text-start text-center flex flex-col xl:gap-8 gap-4 px-6">
                    <div className="flex-1 bg-cover lg:block">
                      <Image
                        className="h-full w-full"
                        src={
                          "https://funworldblr.s3.amazonaws.com/public/Amusement/children_rides.jpg"
                        }
                        width={1500}
                        height={1000}
                        priority
                        alt="slide"
                      />
                    </div>
                    <div className="xl:text-[50px] lg:text-[42px] md:text-[34px] text-[24px] font-[620] text-[#0B1A48]">
                      Kids Rides
                    </div>
                    <p className="text-justify xl:text-[20px] xl:leading-[33px] text-[#5B5B5B]">
                      Designed with little adventurers in mind, our kids&apos;
                      rides in the amusement park and water park offer safe and
                      enchanting experiences. From gentle carousels to mini
                      water slides, children will be all smiles.
                    </p>
                    <p className="text-justify xl:text-[20px] xl:leading-[33px] text-[#5B5B5B]">
                      Parents can join the fun or watch proudly from the
                      sidelines as their kids create cherished memories on our
                      specially curated rides. Safety is our top priority,
                      ensuring worry-free enjoyment for the whole family.
                    </p>
                    <Link href="/kidsrides">
                      <ProceedBtn text="Know More" />
                    </Link>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="flex">
                  <div className="flex-1 lg:ml-12 lg:items-start items-center lg:text-start text-center flex flex-col xl:gap-8 gap-4 px-6">
                    <div className="flex-1 bg-cover lg:block">
                      <Image
                        className="h-full w-full"
                        src={
                          "https://funworldblr.s3.amazonaws.com/public/funworld12345.jpg"
                        }
                        width={1500}
                        height={1000}
                        priority
                        alt="slide"
                      />
                    </div>
                    <div className="xl:text-[50px] lg:text-[42px] md:text-[34px] text-[24px] font-[620] text-[#0B1A48]">
                      Family Rides
                    </div>
                    <p className="text-justify xl:text-[20px] xl:leading-[33px] text-[#5B5B5B]">
                      Families seeking shared moments of joy will love our
                      diverse range of family rides in the amusement park and
                      water park. Whether it&apos;s a thrilling coaster ride or
                      a relaxing boat trip, these attractions cater to all
                      generations.
                    </p>
                    <p className="text-justify xl:text-[20px] xl:leading-[33px] text-[#5B5B5B]">
                      Family rides in the amusement park and water park provide
                      youngsters with the chance to explore alongside their
                      loved ones. So gather your family and embark on a day full
                      of laughter and bonding!
                    </p>
                    <Link href="/familyrides">
                      <ProceedBtn text="Know More" />
                    </Link>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default YourTicket;

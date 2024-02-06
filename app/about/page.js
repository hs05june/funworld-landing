"use client";
import React from "react";
import Image from "next/image";
import { animated, useInView } from "@react-spring/web";
import { Box, Card, Typography } from "@mui/material";
import { MdFastfood } from "react-icons/md";
import { WiTrain } from "react-icons/wi";
import { GiKidSlide } from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";

import { PiMaskHappyFill } from "react-icons/pi";
import { FaBullseye } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { FiCheckCircle } from "react-icons/fi";

// First About Page

const CardMain = ({ data }) => {
  return (
    <div className="lg:flex h-[100%] grid grid-cols-2 gap-y-6 md:h-[100%] max-lg:w-[100%] max-lg:mx-auto max-lg:ml-2 justify-center md:gap-x-6 items-end">
      {data.map((e, index) => {
        return (
          <Card
            key={index}
            elevation={3}
            className="w-[19%] hover:text-white hover:bg-gradient-to-b hover:from-[#FFB200] hover:to-[#F26702] max-lg:w-[90%] h-[75%] max-lg:h-[105%] md:px-5 md:py-5 bg-[#EBF0FE] group"
          >
            {e.icon}

            <Typography
              variant="h5"
              className="font-bold md:text-[30px] lg:text-[1.8vw] xl:text-[1.6vw] max-lg:text-xs max-lg:text-center mt-4 group-hover:text-white"
            >
              {e.header}
            </Typography>
            <Typography
              variant="h6"
              className="mt-4 w-[90%] max-lg:text-center max-lg:mx-auto max-lg:text-xs text-[gray] text-[2vw] xl:text-[1.2vw] lg:text-[1.1vw] leading-10 xl:leading-[4vh] lg:leading-8 group-hover:text-white"
            >
              {e.content}
            </Typography>
          </Card>
        );
      })}
    </div>
  );
};

const AboutStart = () => {
  const data = [
    {
      icon: (
        <WiTrain
          size={60}
          className="text-[80px] mb-2 lg:text-[3vw] xl:text-[4vw] max-lg:text-[2rem] max-lg:mx-auto group-hover:text-white"
        />
      ),
      header: "World of Fun",
      content:
        "From heart-pounding roller coasters to refreshing water rides, we've got something for everyone.",
    },
    {
      icon: (
        <IoFastFood
          size={60}
          className="lg:text-[3vw] mb-2 xl:text-[4vw] max-lg:text-[2rem] max-lg:mx-auto group-hover:text-white"
        />
      ),
      header: "Delicious Food",
      content:
        "Our food court offers delectable meals that will satisfy your taste buds as you relax in our lush green garden or lounge.",
    },
    {
      icon: (
        <GiKidSlide
          size={60}
          className="text-[80px] mb-2 lg:text-[3vw] xl:text-[4vw] max-lg:text-[2rem] max-lg:mx-auto group-hover:text-white"
        />
      ),

      header: "Full of Entertainment",
      content:
        "From heart-pounding roller coasters to refreshing water rides, we've got something for everyone.",
    },
    {
      icon: (
        <PiMaskHappyFill
          size={60}
          className="text-[80px] mb-2 lg:text-[3vw] xl:text-[4vw] max-lg:text-[2rem] max-lg:mx-auto group-hover:text-white"
        />
      ),
      header: "Combo of happiness",
      content:
        "From heart-pounding roller coasters to refreshing water rides, we've got something for everyone.",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center ">
      {/* <Image src={'/About/fun2.jpeg'}  alt="child swimming in pool" className='w-[100vw] absolute -z-10 max-lg:hidden overflow-y-hidden' /> */}
      <div className='w-[100%] h-[100vh] bg-cover bg-no-repeat bg-center lg:flex hidden bg-[url("https://funworldblr.s3.amazonaws.com/public/About/fun2.jpeg")] absolute -z-10  overflow-y-hidden' />
      <div className="md:h-[100%] h-full md:relative top-[100%]">
        <CardMain data={data} />
      </div>
    </div>
  );
};

//Second About Page

const AboutSecond = () => {
  return (
    <div className="w-full h-full flex bg-[#f3f2f0]">
      <Box className="flex flex-col justify-center items-end gap-6 lg:w-[50vw] ">
        <div className="h-[40%] flex flex-col md:items-start items-center lg:w-[70%] lg:pr-6">
          {/* <MdFastfood className='text-[15vw] md:text-[6rem] max-lg:mx-auto' /> */}
          <FiCheckCircle size={60} />
          <Typography
            variant="h4"
            className="mt-4 max-lg:text-center text-[7vw] md:text-[2rem]"
          >
            Our Vision
          </Typography>
          <Typography
            variant="subtitle1"
            className="mt-3 md:px-0 px-6 max-lg:text-center text-[4vw] md:text-[1.1rem]"
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </Typography>
        </div>
        <div className="h-[40%] flex flex-col md:items-start items-center lg:w-[70%] lg:pr-6">
          {/* <MdFastfood className='text-[15vw] md:text-[6rem] max-lg:mx-auto' /> */}
          <FaBullseye size={60} />
          <Typography
            variant="h4"
            className="mt-4 max-lg:text-center text-[7vw] md:text-[2rem]"
          >
            Our Mission
          </Typography>
          <Typography
            variant="subtitle1"
            className="mt-3 md:px-0 px-6 max-lg:text-center text-[4vw] md:text-[1.1rem]"
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </Typography>
        </div>
      </Box>

      <Box className="flex items-center pr-8 lg:w-[50vw] max-lg:hidden">
        <div className="w-[80%] h-[70%] ">
          <div className='bg-cover rounded-sm bg-center w-[100%] h-[100%] bg-[url("https://funworldblr.s3.amazonaws.com/public/About/fun2.jpeg")] bg-no-repeat '></div>
        </div>
      </Box>
    </div>
  );
};

// Third About Page

const AboutThird = () => {
  const [ref, props] = useInView(() => ({
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
    config: { duration: 1000 },
    reset: false,
    delay: 1000,
  }));
  const [textRef, textProps] = useInView(() => ({
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
    config: { duration: 1000 },
    reset: false,
    delay: 1000,
  }));

  return (
    <div className="w-full h-full flex md:flex-row flex-col">
      <div class="bg-gradient-to-tl from-[#FF8E4BE8] via-[#FF9252E8] to-[#DB1450E8] opacity-90 flex-1 md:min-h-[610px] flex flex-col gap-4 items-center text-center justify-center xl:px-32 py-4 text-white">
        <div
          className="w-full flex flex-col gap-2 h-full"
          ref={textRef}
          style={textProps}
        >
          <Typography
            variant="h3"
            className="mt-10 font-bold text-[7vw] md:text-[3rem]"
          >
            Operating Hours
          </Typography>

          <img
            src={
              "https://funworldblr.s3.amazonaws.com/public/Amusement/mask.svg"
            }
            width={450}
            height={40}
            className="mx-auto"
            alt="pic"
          />

          <Typography
            variant="h5"
            className="tracking-[10px] mt-5 text-[4vw] md:text-[2rem]"
          >
            FUN WORLD
          </Typography>

          <img
            src={
              "https://funworldblr.s3.amazonaws.com/public/Amusement/mask2.svg"
            }
            width={150}
            height={40}
            className="mx-auto"
            alt="pic"
          />

          <Typography
            variant="h5"
            className="font-bold text-[5vw] md:text-[2rem]"
          >
            10:30 AM TO 7:00 PM
          </Typography>

          <Typography>(all days of the week)</Typography>

          <div className="h-[1px] w-[60%] mx-auto border-t-2 border-dashed mt-4"></div>

          <Typography
            variant="h5"
            className="tracking-[10px] mt-10 text-[4vw] md:text-[2rem]"
          >
            WATER WORLD
          </Typography>

          <Image
            src={
              "https://funworldblr.s3.amazonaws.com/public/Amusement/mask2.svg"
            }
            width={150}
            height={40}
            className="mx-auto"
            alt="pic"
          />

          <Typography
            variant="h5"
            className="font-bold text-[5vw] md:text-[2rem]"
          >
            10:30 AM TO 5:00 PM
          </Typography>

          <Typography>(all days of the week)</Typography>
        </div>
      </div>

      <div class="bg-gradient-to-b from-[#47475EF5] via-[#606085f5] to-[#74748ef5] flex-1 md:min-h-[650px] flex flex-col gap-4 items-center text-center  justify-center xl:px-32 lg:px-12 md:px-8 px-6 py-4 text-white">
        <div
          className="w-full flex flex-col gap-2 h-full"
          ref={textRef}
          style={textProps}
        >
          <Typography
            variant="h3"
            className="mt-10 font-bold text-[7vw] md:text-[3rem]"
          >
            Entry Fees
          </Typography>

          <Image
            src={
              "https://funworldblr.s3.amazonaws.com/public/Amusement/mask.svg"
            }
            width={450}
            height={40}
            className="mx-auto"
            alt="pic"
          />

          <Typography
            variant="h5"
            className="tracking-[10px] mt-2 text-[4vw] md:text-[2rem]"
          >
            ADULTS
          </Typography>

          <Image
            src={
              "https://funworldblr.s3.amazonaws.com/public/Amusement/mask2.svg"
            }
            width={150}
            height={40}
            className="mx-auto"
            alt="pic"
          />

          <Typography
            variant="h5"
            className="font-bold text-[5vw] md:text-[2rem]"
          >
            INR 1499 <span className="text-[16px]">on weekends</span>, INR 1199{" "}
            <span className="text-[16px]">on weekdays</span>
          </Typography>

          <div className="h-[1px] w-[60%] mx-auto border-t-2 border-dashed mt-2"></div>

          <Typography
            variant="h5"
            className="tracking-[10px] mt-2 text-[4vw] md:text-[2rem]"
          >
            CHILDREN
          </Typography>

          <Image
            src={
              "https://funworldblr.s3.amazonaws.com/public/Amusement/mask2.svg"
            }
            width={150}
            height={40}
            className="mx-auto"
            alt="pic"
          />

          <Typography
            variant="h5"
            className="font-bold text-[5vw] md:text-[2rem]"
          >
            INR 999 <span className="text-[16px]">on weekends</span>, INR 999{" "}
            <span className="text-[16px]">on weekdays</span>
          </Typography>

          <div className="h-[1px] w-[60%] mx-auto border-t-2 border-dashed mt-2"></div>

          <Typography
            variant="h5"
            className="tracking-[10px] mt-2 text-[4vw] md:text-[2rem]"
          >
            HOLIDAY SPECIAL
          </Typography>

          <Image
            src={
              "https://funworldblr.s3.amazonaws.com/public/Amusement/mask2.svg"
            }
            width={150}
            height={40}
            className="mx-auto"
            alt="pic"
          />

          <Typography
            variant="h5"
            className="font-bold text-[5vw] md:text-[2rem]"
          >
            INR 999 <span className="text-[16px]">for kids</span>, INR 999{" "}
            <span className="text-[16px]">for senior citizens and </span>
            INR 1499 <span className="text-[16px]">for adults</span>
          </Typography>

          <Typography className="text-[4vw] md:text-[1rem]">
            (Child tickets apply to children between 80cm - 140cm in height)
          </Typography>
        </div>
      </div>
    </div>
  );
};

// Fourth About Page

const AboutFourth = () => {
  const [img1Ref, img1Props] = useInView(() => ({
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
    config: { duration: 1000 },
    reset: false,
    delay: 1000,
  }));
  const [img2Ref, img2Props] = useInView(() => ({
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
    config: { duration: 1000 },
    reset: false,
    delay: 1000,
  }));
  return (
    <div>
      <div className="lg:mt-20 mt-8 flex md:flex-row md:gap-2 gap-8 flex-col">
        <div className="md:w-[50vw] px-12 items-center justify-center lg:gap-10 gap-4 flex flex-col">
          <h4 className="md:text-[35px] md:leading-[35px] xl:leading-[45px]  lg:text-[45px] max-md:w-[100%] text-[28px] font-[600] max-sm:text-center lg:w-[70%]">
            A Day Packed with Entertainment
          </h4>
          <div className="w-[70%] max-lg:w-[100%] max-md:text-center text-[#5B5B5B] mx-auto">
            <p className="xl:leading-[30px]">
              We believe in offering more than just rides. Fun World combines
              Snow city, Water World, Fun World, and Star City to create a
              unique experience that caters to your every whim.
            </p>
            <p className="xl:leading-[30px]">
              Imagine sliding down water-filled chutes, exploring a gaming
              paradise, and even experiencing a snowy wonderland all in one
              place!
            </p>
          </div>
        </div>
        <div
          className="md:w-[50vw] bg-cover md:p-0 p-6"
          ref={img1Ref}
          style={img1Props}
        >
          <img
            src={"https://funworldblr.s3.amazonaws.com/public/About/fun3.jpeg"}
            alt="rings with child"
          />
        </div>
      </div>

      <div className="lg:mt-20 mt-8 flex md:flex-row-reverse md:gap-2 gap-8 flex-col">
        <div className="md:w-[50vw] xl:leading-[30px] px-12 items-center justify-center gap-10 flex flex-col">
          <div className="w-[70%] text-[#5B5B5B] max-md:text-center mx-auto">
            Join us at Fun World{" "}
            <span className="font-[650]">Amusement Park</span>, where the only
            limit to your fun is the sky above! Come be a part of the fun-filled
            legacy that is Fun World!
          </div>
        </div>

        <div
          className="md:w-[50vw] bg-cover md:p-0 p-6"
          ref={img2Ref}
          style={img2Props}
        >
          <img
            src={"https://funworldblr.s3.amazonaws.com/public/About/fun4.jpeg"}
            alt="water slide"
          />
        </div>
      </div>
    </div>
  );
};

const AboutFifth = () => {
  return (
    <div className="bg-[#FFFAF7] mt-20 flex md:gap-2 gap-8 w-full h-[90%]">
      <Box className="w-[50%] max-lg:w-[90%] max-lg:mx-auto h-[80%] m-auto md:px-[5rem] lg:px-[2rem] xl:px-[5rem]">
        <div className="xl:text-[45px] lg:text-[38px] md:text-[35px] text-[28px] max-lg:text-center  font-[600]">
          A World of Fun Awaits
        </div>

        <div className="mt-5 text-[3.5vw] xl:text-[1.2vw] lg:text-[2vw] max-lg:text-center text-[#5B5B5B] lg:leading-[30px] gap-4 flex flex-col">
          <div>
            Join us at Fun World Amusement Park, where the only limit to your
            fun is the sky above! Come be a part of the fun-filled legacy that
            is Fun World!
          </div>
          <div>
            We offer gentle rides like the Toy Train, Flying Appu, Mini
            Columbus, and Kiddies&apos; Bumper Boat for the little ones.
          </div>
          <div>
            Families can bond over thrilling spins on the Octopus, UFO, Hang
            Glider, and Super Jet Ride. And for the true adrenaline junkies, we
            present The Crazy Fireball, The Spanish Bull Fight, The Space
            Vehicle, and The Swing Chair.
          </div>
          <div>
            But that&apos;s not all. Our park is home to a 12-lane bowling arena
            that promises strikes, spares, and endless fun.
          </div>
        </div>
      </Box>
      <Box className="w-[50%] h-[90%] m-auto max-lg:hidden">
        <div className='w-[90%] bg-[url("https://funworldblr.s3.amazonaws.com/public/About/Group1.jpg")] bg-no-repeat bg-center bg-cover  h-[95%] mx-auto' />
      </Box>
    </div>
  );
};

const AboutLast = () => {
  return (
    <Box className="w-full h-full flex flex-col md:px-[10rem] py-[2rem] text-center">
      <Typography
        variant="h3"
        className="font-[600] max-lg:text-[28px] mx-auto"
      >
        Elevate Your Park with Expert Maintenance & Custom Rides
      </Typography>
      <Typography
        variant="h6"
        className="text-[#5B5B5B] px-6 max-lg:text-lg mx-auto mt-10"
      >
        With our experienced team of professionals, we handle everything from
        roller coasters to lighting systems with ease. Plus, we offer
        custom-made themed rides and even rental options for both new and
        refurbished rides. Let us bring the magic to your amusement park.
      </Typography>

      <Box className="flex justify-between mt-10 max-lg:w-[90%] max-lg:mx-auto">
        <Image
          src={
            "https://funworldblr.s3.amazonaws.com/public/About/group_pic1.jpg"
          }
          width={300}
          height={400}
          alt="pic"
          className="w-[30%]"
        />
        <Image
          src={
            "https://funworldblr.s3.amazonaws.com/public/About/group_pic2.jpg"
          }
          width={300}
          height={400}
          alt="pic"
          className="w-[30%]"
        />
        <Image
          src={
            "https://funworldblr.s3.amazonaws.com/public/About/group_pic3.jpg"
          }
          width={300}
          height={400}
          alt="pic"
          className="w-[30%]"
        />
      </Box>
    </Box>
  );
};

const About = () => {
  return (
    <>
      <div className="min-h-screen w-screen flex flex-col overflow-x-hidden">
        <section className="w-full min-h-[400px] relative max-lg:min-h-[400px] max-xl:min-h-[400px] xl:h-fit max-md:min-h-[300px] max-sm:min-h-[250px]">
          <Image
            className="bg-cover bg-center bg-no-repeat absolute top-0 -z-10  max-sm:h-full object-contain  max-xs:object-cover  "
            src={"https://funworldblr.s3.amazonaws.com/public/Reusable/bg2.jpg"}
            alt="bacgkround img"
            width={2042}
            height={1029}
          />
          <div className="w-full bottom-[30%] sm:bottom-[50%] lg:bottom-[15%] absolute">
            <div className=" h-[100%] w-full flex flex-col text-center justify-center items-center ">
              <h1 className="text-center px-[10vw] lg:leading-[60px] md:w-full font-extrabold lg:text-[65px] md:text-[50px] md:leading-[46px] text-white sm:text-3xl">
                Welcome to Fun World Amusement Park – Where Fun Knows No Bounds!
              </h1>
              <p className="text-center w-[60%] lg:px-[20vw] md:px-[10vw] md:w-full md:mt-8 mt-3 lg:text-[20px] lg:leading-[30px] text-white text-xs">
                Nestled in the heart of vibrant Bengaluru, Fun World Amusement
                Park stands tall as one of Karnataka&apos; most cherished
                treasures.
              </p>
            </div>
          </div>

          <div className="w-full h-full flex">
            {/* <div className="absolute bottom-[200px] right-[425px] max-xl:bottom-[10vw] max-xl:right-[30%] max-lg:bottom-[16vw] max-md:hidden">
                            <Image alt="/" src="https://funworldblr.s3.amazonaws.com/public/Rides/Ellipse1.svg" width={18} height={18} />
                        </div> */}
            <div>
              <Image
                alt="/"
                src="https://funworldblr.s3.amazonaws.com/public/Rides/Ellipse2.webp"
                width={28}
                height={28}
              />
            </div>
            {/* <div className="absolute bottom-[150px] right-[10rem] max-md:hidden ">
                            <Image alt="/" src="https://funworldblr.s3.amazonaws.com/public/Rides/stars.svg" width={68} height={68} />
                        </div> */}
            <div className="absolute bottom-[200px] left-[89px] max-xl:bottom-[10vw] max-lg:hidden">
              <Image
                alt="/"
                src="https://funworldblr.s3.amazonaws.com/public/Rides/white-shape-banner1.webp"
                width={141}
                height={168}
              />
            </div>
            <div className="absolute bottom-[165px] right-8 max-xl:bottom-[8vw] max-lg:hidden">
              <Image
                alt="/"
                src="https://funworldblr.s3.amazonaws.com/public/Rides/white-shape-banner2.webp"
                width={141}
                height={148}
              />
            </div>
          </div>
        </section>

        <div className="lg:px-[15vw] md:px-[10vw] lg:mt-32 md:mt-16 mt-6 px-[7vw] relative flex flex-col lg:gap-12 gap-6 items-center">
          <p className="lg:text-[22px] text-center md:text-[22px] text-sm md:leading-[29px] text-[#5B5B5B]">
            Since its establishment in 1990, this wide 24-acre wonderland has
            been dedicated to crafting unforgettable moments of joy, laughter,
            and adventure for families and friends alike.
          </p>
          <p className="text-center text-[#5B5B5B] md:text-[22px] text-sm md:leading-[29px]">
            Our central location, just a stone&apos;s throw away from iconic
            landmarks like Snow City, Bangalore Palace, and Cubbon Park, makes
            us the ultimate destination for thrill-seekers and those seeking
            respite from the daily grind.
          </p>
        </div>

        <div className="lg:mt-20 mt-12 flex w-full lg:h-[60vh]">
          <AboutStart />
        </div>

        <div className="mt-[4rem] md:mt-[40rem] lg:mt-[50rem] xl:mt-[40rem] 2xl:mt-[60rem] h-[65vh] md:h-[80vh] flex w-full lg:h-[100vh]">
          <AboutSecond />
        </div>

        <div className="flex lg:flex-row flex-col h-auto">
          <AboutThird />
        </div>

        <div className="flex lg:flex-row flex-col h-auto">
          <AboutFourth />
        </div>

        <div className="flex lg:flex-row flex-col h-[95vh] max-lg:h-[80vh]">
          <AboutFifth />
        </div>

        <div className="flex lg:flex-row flex-col max-lg:mt-[1rem] xl:h-[100vh]">
          <AboutLast />
        </div>
      </div>
    </>
  );
};

export default About;

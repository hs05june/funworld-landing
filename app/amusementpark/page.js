"use client";
import Image from "next/image";
import React from "react";
import { animated, useInView } from "@react-spring/web";
import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import { IoMdBicycle, IoMdColorPalette } from "react-icons/io";
import { GiHotSpices, GiMusicalNotes, GiCoolSpices } from "react-icons/gi";
import { WiTrain } from "react-icons/wi";

import { MdHealthAndSafety, MdOutlineCleanHands } from "react-icons/md";
import { FaQuoteRight } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

// First Amusement Park Page

const CardMain = ({ num, src, head, content }) => {
  return (
    <Card
      className={`lg:w-[26vw] w-[70vw]  my-auto rounded-[1rem] flex  ${
        num === 1 ? "flex-col-reverse" : "flex-col"
      }`}
    >
      <img
        className="lg:w-[43vw] w-[70vw] xl:w-[26vw] md:h-[50%] mx-auto"
        // image={start1}
        src={src}
        title="green iguana"
        width={400}
      />
      <CardContent className="md:w-[90%] h-[50%] ml-4 mr-4 py-8">
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className=" lg:text-start text-center font-[600] md:text-[19px] lg:text-[22px]"
        >
          {head}
        </Typography>
        <Typography
          variant="h6"
          className="md:leading-9 lg:leading-6 text-sm lg:text-start text-center md:text-[2vw] lg:text-[1.4vw] xl:text-[1vw+]"
          color="text.secondary"
        >
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

const AmusementParkStart = () => {
  const cardData = [
    {
      src: "https://funworldblr.s3.amazonaws.com/public/About/fun2.jpeg",
      head: "Family-Friendly Attractions",
      content:
        "Fun World Bangalore is your premier destination for family-friendly fun and entertainment.",
    },
    {
      src: "https://funworldblr.s3.amazonaws.com/public/Amusement/pendulum.jpg",
      head: "Happy Days, Weekend",
      content:
        "Spend a sparkling weekend in the Fun World with the best discount deals on all tickets.",
    },
    {
      src: "https://funworldblr.s3.amazonaws.com/public/Amusement/tsunami.webp",
      head: "Happy Days, Weekdays",
      content:
        "Have joyous and thrilling weekdays with an amazing theme park experience.",
    },
  ];

  return (
    <div className="md:w-[100vw] h-full">
      <div className="lg:w-[80%] mx-auto xl:mt-10 2xl:mt-48 text-center flex flex-col items-center justify-center">
        <Typography
          variant="h2"
          className="font-[600] text-[#0B1A48] lg:text-[45px] text-[28px]"
        >
          Visit Us for a Blast of Adventure, You Deserve a Break
        </Typography>
        <Typography className="lg:w-[80%] mx-auto px-[10vw] text-center mt-6 text-[18px] text-[#5B5B5B]">
          Nothing&apos;s better than an electrifying experience at amusement
          parks, trying all the crazy rides for stress therapy.
        </Typography>
        <Typography className="lg:w-[80%] mx-auto px-[10vw] text-center text-[18px] text-[#5B5B5B]">
          Fun World is the best place to bring smiles and joy to everyone.
        </Typography>
      </div>

      <div className="flex flex-col lg:flex-row md:bg-[#f0ececca] mx-auto sm:py-[2vh] lg:h-[800px] xl:h-[700px] 2xl:h-[800px]  lg:px-[2%] items-center sm:h-auto gap-8 sm:gap-4 lg:gap-6 justify-center mt-10">
        {cardData.map((e, index) => {
          return (
            <CardMain
              num={index}
              key={index}
              src={e.src}
              head={e.head}
              content={e.content}
            />
          );
        })}
      </div>
    </div>
  );
};

// Second Amusement Park Page

const GridParkSecond = ({ data }) => {
  const [hover, setHover] = useState({
    bool: false,
    index: null,
    place: "",
  });

  const handleMouseEnter = (index, place) => {
    setHover({
      bool: true,
      index: index,
      place: place,
    });
  };

  const handleMouseLeave = (index, place) => {
    setHover({
      bool: false,
      index: null,
      place: "",
    });
  };

  return (
    <div className=" mx-auto grid md:grid-cols-3 max-md:grid-cols-2 xl:w-[75%] md:w-[90%]">
      {data.map((upper, index) => {
        return (
          <Box
            key={index}
            className={`w-auto flex group hover:bg-gradient-to-r hover:from-[#FFB200] hover:to-[#F26702]  flex-col items-center justify-center md:min-h-[350px] py-4 lg:min-h-[400px] ${
              index % 2 === 0 ? "max-md:border-r-[1px]" : ""
            } ${index !== 4 && index !== 5 ? "max-md:border-b-[1px]" : ""} ${
              index === 0 || index === 1 || index === 2
                ? "md:border-b-[1px]"
                : ""
            } ${
              index !== 2 && index !== 5
                ? "md:border-r-[1px] border-gray-300"
                : ""
            }`}
          >
            {upper.icon}
            <Typography
              variant="h5"
              className="text-center max-md:text-lg w-[80%] mx-auto mt-4 group-hover:text-white"
            >
              {upper.head}
            </Typography>
            <Typography
              variant="subtitle1"
              className="w-[80%] max-md:text-sm mx-auto text-center mt-4 group-hover:text-white"
            >
              {upper.content}
            </Typography>
          </Box>
        );
      })}
    </div>
  );
};

const AmusementParkSecond = () => {
  const data = [
    {
      icon: (
        <WiTrain
          size={80}
          className=" p-[5px] bg-[#EBF0FE] rounded-[5rem] md:p-[10px] mx-auto my-[10px]"
        />
      ),
      // icon: <Image src={"https://funworldblr.s3.amazonaws.com/public/Amusement/cycle.png"} width={100} height={100} className='md:text-[6rem] text-[4rem] bg-[#EBF0FE] rounded-[5rem] mx-auto my-[10px]' />,
      head: "57 Adventurous Rides- All Ages",
      content:
        "Enhance the fun and feel the chills with exciting ride options for every age.",
    },
    {
      icon: (
        <IoMdColorPalette
          size={80}
          className=" p-[5px] bg-[#EBF0FE] rounded-[5rem] md:p-[10px] mx-auto my-[10px]"
        />
      ),
      // icon: <Image src={"https://funworldblr.s3.amazonaws.com/public/Amusement/paint.png"} width={100} height={100} className='md:text-[8rem] text-[4rem] p-[5px] bg-[#EBF0FE] rounded-[5rem] md:p-[10px] mx-auto my-[10px]' />,
      head: "Enjoy Unique Themes",
      content: "Special themes to amplify the entertainment and joy for kids.",
    },
    {
      icon: (
        <GiHotSpices
          size={80}
          className=" p-[5px] bg-[#EBF0FE] rounded-[5rem] md:p-[10px] mx-auto my-[10px]"
        />
      ),
      // icon: <Image src={"https://funworldblr.s3.amazonaws.com/public/Amusement/chilli.png"} width={100} height={100} className='md:text-[8rem] text-[4rem] p-[5px] bg-[#EBF0FE] rounded-[5rem] md:p-[10px] mx-auto my-[10px]' />,
      head: "Tasty Spice Delights",
      content: "We have a multitude of savoury delights to feast upon.",
    },
    {
      icon: (
        <GiCoolSpices
          size={80}
          className=" p-[5px] bg-[#EBF0FE] rounded-[5rem] md:p-[10px] mx-auto my-[10px] "
        />
      ),
      // icon: <Image src={"https://funworldblr.s3.amazonaws.com/public/Amusement/disco.png"} width={100} height={100} className='md:text-[8rem] text-[4rem] p-[5px] bg-[#EBF0FE] rounded-[5rem] md:p-[10px] mx-auto my-[10px]' />,
      head: "Fusion of Live Music, DJ",
      content:
        "Groove upon the melodic beats with our extraordinary fusion of live music and DJ setup.",
    },
    {
      icon: (
        <MdHealthAndSafety
          size={80}
          className=" p-[5px] bg-[#EBF0FE] rounded-[5rem] md:p-[10px] mx-auto my-[10px]"
        />
      ),
      // icon: <Image src={"https://funworldblr.s3.amazonaws.com/public/Amusement/circle.png"} width={100} height={100} className='md:text-[8rem] text-[4rem] p-[5px] bg-[#EBF0FE] rounded-[5rem] md:p-[10px] mx-auto my-[10px]' />,
      head: "Ultimate Safety Measures",
      content:
        "Your safety is our priority. At Fun World, we have the most reliable array of safety arrangements.",
    },
    {
      icon: (
        <MdOutlineCleanHands
          size={80}
          className="p-[5px] bg-[#EBF0FE] rounded-[5rem] md:p-[10px] mx-auto my-[10px]"
        />
      ),
      // icon: <Image src={"https://funworldblr.s3.amazonaws.com/public/Amusement/recycle.png"} w57 Adidth={100} height={100} className='md:text-[8rem] text-[4rem] p-[5px] bg-[#EBF0FE] rounded-[5rem] md:p-[10px] mx-auto my-[10px]' />,
      head: "Cleanliness and Hygiene",
      content:
        "Our park has the best cleanliness arrangements, with litter at every corner, clean restrooms and periodic maintenance.",
    },
  ];

  return (
    <div className="max-md:w-[100%]">
      <div className="flex  max-md:flex-col justify-between w-[90%] xl:w-[75%] gap-4 md:w-[90%] mx-auto md:h-[20%]">
        <Typography
          variant="h3"
          className="text-left max-md:text-xl max-md:font-[650] max-md:text-center"
        >
          Fun World Has Something to Thrill Every Heart
        </Typography>
        <Typography
          variant="h6"
          className="w-[80%] text-[#5B5B5B] mt-3 mx-auto max-md:text-sm max-md:w-[95%] max-md:text-center"
        >
          Nothing&apos;s better than an electrifying experience at amusement
          parks, trying all the crazy rides for stress therapy.
        </Typography>
      </div>
      <div className="max-md:w-[100%] h-auto px-4">
        <GridParkSecond data={data} />
      </div>
    </div>
  );
};

// Customer Review Page

const CardElement = ({ data }) => {
  const [value, setValue] = useState(null);

  return (
    <div className="flex flex-col lg:flex-row max-md:h-[100%] h-[100%] w-[90%] justify-between mx-auto mt-10 gap-10">
      {data.map((e, index) => {
        return (
          <Card
            key={index}
            elevation={4}
            className="flex flex-col md:w-[80%] mx-auto lg:w-[35%] rounded-lg max-md:py-4 max-lg:h-[30%]"
          >
            <Box
              sx={{ display: "flex" }}
              className="w-[60%] gap-[2vw] mx-auto md:mt-5"
            >
              <div>
                <Image
                  src={
                    "https://funworldblr.s3.amazonaws.com/public/Amusement/user.jpg"
                  }
                  width={60}
                  height={60}
                  className="border rounded-[3rem] h-[60px] w-[60px]"
                  alt="pic"
                />
              </div>
              <div className="w-[40%]">
                <Typography variant="h6" className="font-bold">
                  {e.name}
                </Typography>
                <Typography variant="subtitle2" className="lg:text-[1.2vw]">
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
              <Typography variant="subtitle1 md:text-[2vw] lg:text-[1vw]">
                {e.comment}
              </Typography>
            </Box>
            <Box className="text-3xl justify-end -bottom-5 w-[23%] absolute hidden">
              <FaQuoteRight />
            </Box>
          </Card>
        );
      })}
    </div>
  );
};

const CustomerReviewPage = () => {
  const data = [
    {
      src: "https://funworldblr.s3.amazonaws.com/public/Amusement/user.jpg",
      name: "Divakshi",
      username: "@Divakshi",
      rating: 4,
      comment:
        "The very fun place went there with my colleagues, and it was so much fun, enjoyed it a lot! The rides & activities were so good, worth every single penny! 👌🏻😁",
    },
    {
      src: "https://funworldblr.s3.amazonaws.com/public/Amusement/user.jpg",
      name: "Pankaj",
      username: "@Pankaj",
      rating: 5,
      comment:
        "Very good to place to have fun time with family and friends. Kids friendly rides in Water park and in Amusement park. 👌🏻😁",
    },
    {
      src: "https://funworldblr.s3.amazonaws.com/public/Amusement/user.jpg",
      name: "Devil",
      username: "@Devil",
      rating: 4,
      comment:
        "The very fun place went there with my colleagues, and it was so much fun, enjoyed it a lot! The rides & activities were so good, worth every single penny! 👌🏻😁",
    },
  ];
  return (
    <div
      style={{ width: "100vw", height: "auto" }}
      className="overflow-y-hidden max-md:mt-10 flex flex-col items-center"
    >
      <img
        src={"https://funworldblr.s3.amazonaws.com/public/Amusement/vector.jpg"}
        width={200}
        alt="pic"
        className="w-[100%] left-0 absolute h-[300px] -z-20 mx-auto max-lg:hidden"
      />
      <Typography
        variant="h3"
        className="text-center md:mt-3 max-md:text-xl max-md:font-[650]"
      >
        Customers&apos; Reviews
      </Typography>
      <Typography variant="subtitle1" className="text-center mt-5">
        Nothing&apos;s better than an electrifying experience at amusement parks
      </Typography>
      <Box className="mx-auto w-[80%] z-10 lg:h-[34vh] relative">
        <CardElement data={data} />
      </Box>
    </div>
  );
};

// Third Amusement Park Page

const AmusementParkThird = () => {
  const [ref, props] = useInView(() => ({
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
    config: { duration: 1000 },
    reset: false,
    delay: 1000,
  }));
  const [carouselRef, carouselProps] = useInView(() => ({
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
    config: { duration: 1000 },
    reset: false,
    delay: 1000,
  }));
  const [gridRef, gridProps] = useInView(() => ({
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
    config: { duration: 1000 },
    reset: false,
    delay: 1000,
  }));

  return (
    <div className="flex items-center justify-center">
      <div className="lg:w-[85%] w-[95%]  flex items-center justify-center flex-wrap">
        <div className="w-full text-center flex flex-col justify-center font-dm-sans text-xl font-normal">
          <div className="  text-center mx-auto font-bold text-6xl max-md:text-lg max-md:text-center mt-20">
            Rides for Everyone
          </div>
          <div className=" text-center px-[10vw] my-5  max-md:text-sm">
            From Kids to Adults, Rides for everyone. Check out below some more
            exciting rides.
          </div>
        </div>

        <div
          className="w-full mt-5 grid grid-flow-row grid-cols-3 lg:gap-12 max-md:grid-cols-2 mx-6"
          ref={gridRef}
          style={gridProps}
        >
          <div className="w-full flex flex-col imgcontainer ">
            <img
              alt="/"
              src={
                "https://funworldblr.s3.amazonaws.com/public/Amusement/skydrop.webp"
              }
              className="md:image max-md:w-[90%] max-md:h-[120px]"
            />
            <div className="w-full font-spartan py-4 text-left text-4xl font-bold max-xl:text-2xl max-md:text-lg max-md:text-center">
              <div className=" trans ">
                <span className="mr-0 ml-3 opacity-0 whitespace-nowrap spannum"></span>{" "}
                <span>Sky Drop</span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col imgcontainer ">
            <img
              alt="/"
              src={
                "https://funworldblr.s3.amazonaws.com/public/Amusement/tsunami.webp"
              }
              className="md:image max-md:w-[90%] max-md:h-[120px]"
            />
            <div className="w-full font-spartan py-4 text-left text-4xl font-bold max-xl:text-2xl max-md:text-lg max-md:text-center">
              <div className=" trans   ">
                <span className="mr-0 opacity-0 whitespace-nowrap spannum "></span>{" "}
                <span>Tsunami</span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col imgcontainer ">
            <img
              alt="/"
              src={
                "https://funworldblr.s3.amazonaws.com/public/Amusement/pendulum.jpg"
              }
              className="md:image max-md:w-[90%] max-md:h-[120px]"
            />
            <div className="w-full font-spartan py-4 text-left text-4xl font-bold max-xl:text-2xl max-md:text-lg max-md:text-center">
              <div className=" trans   ">
                <span className="mr-0 opacity-0 whitespace-nowrap spannum "></span>{" "}
                <span>Pendulum</span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col imgcontainer">
            <img
              alt="/"
              src={
                "https://funworldblr.s3.amazonaws.com/public/Amusement/fireball.jpg"
              }
              className="md:image max-md:w-[90%] max-md:h-[120px]"
            />
            <div className="w-full font-spartan py-4 text-left text-4xl font-bold max-xl:text-2xl max-md:text-lg max-md:text-center">
              <div className=" trans   ">
                <span className="mr-0 ml-3 opacity-0 whitespace-nowrap spannum "></span>{" "}
                <span>Crazy Fireball</span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col imgcontainer">
            <img
              alt="/"
              src={
                "https://funworldblr.s3.amazonaws.com/public/Amusement/flying.webp"
              }
              className="md:image max-md:w-[90%] max-md:h-[120px]"
            />
            <div className="w-full font-spartan py-4 text-left text-4xl font-bold max-xl:text-2xl max-md:text-lg max-md:text-center">
              <div className=" trans   ">
                <span className="mr-0 opacity-0 whitespace-nowrap spannum "></span>{" "}
                <span>Flying chairs</span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col imgcontainer ">
            <img
              alt="/"
              src={
                "https://funworldblr.s3.amazonaws.com/public/Amusement/roller.webp"
              }
              className="md:image max-md:w-[90%] max-md:h-[120px]"
            />
            <div className="w-full font-spartan py-4 text-left text-4xl font-bold max-md:text-lg max-md:text-center max-xl:text-2xl">
              <div className=" trans   ">
                <span className="mr-0 opacity-0 whitespace-nowrap spannum "></span>{" "}
                <span>Roller coaster</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Fourth Amusement Park Page

const AmusementParkFourth = () => {
  const data = [
    "https://funworldblr.s3.amazonaws.com/public/Amusement/a1.jpg",
    "https://funworldblr.s3.amazonaws.com/public/Amusement/a2.jpg",
    "https://funworldblr.s3.amazonaws.com/public/Amusement/skydrop.webp",
  ];
  return (
    <div
      style={{ width: "100%" }}
      className="flex lg:h-[100%] flex-col mt-12 justify-between max-md:py-4"
    >
      <img
        src={"https://funworldblr.s3.amazonaws.com/public/Amusement/bluebg.jpg"}
        width={300}
        alt="/"
        className="absolute w-[100vw] h-[400px] -z-10 -left-0 max-md:hidden"
      />
      <div className="xl:w-[40%] md:mt-5 lg:ml-12">
        <Typography
          variant="h3"
          className="text-left lg:text-white max-md:text-2xl max-md:font-[650] max-xl:text-center"
        >
          Rides & Attractions
        </Typography>
        <Typography
          variant="subtitle1"
          className="text-left mt-3 lg:text-white max-xl:w-[95%] max-xl:mx-auto max-xl:text-center"
        >
          Prepare to unleash your inner thrill-seeker as you encounter an array
          of exhilarating rides that cater to every level of bravery.
        </Typography>
      </div>

      <div className="">
        <Box className="flex lg:flex-row mt-4 flex-col items-center gap-4 lg:justify-end lg:gap-10 lg:h-[60%] lg:mt-10 ">
          {data.map((e, index) => {
            return (
              <img
                key={index}
                src={e}
                alt="pic"
                width={200}
                className="lg:w-[30%] w-[70%] md:h-[20rem] rounded-lg"
              />
            );
          })}
        </Box>
      </div>

      {/* <Box className="flex justify-end gap-10 h-[50%] md:hidden">
       <Image src={skydrop} alt="pic" width={200} className='w-[50%] h-[10rem] mx-auto rounded-lg'/> 
      </Box> */}
    </div>
  );
};

// Satisfaction Page

const SatisfactionPage = () => {
  return (
    <div className="mt-9">
      <div className="bg-[#FFEEF6] absolute -z-10 h-[100vh] w-[100vw] left-0"></div>
      <Typography variant="h3" className="text-center mt-[5rem]">
        Our Satisfaction People Say About Our Services
      </Typography>
      <Box className="flex justify-evenly mt-[3rem]">
        <img
          src={
            "https://funworldblr.s3.amazonaws.com/public/Amusement/businessuser.jpg"
          }
          alt="pic"
          width={200}
          className="w-[40%] h-[80%]"
        />
        <Box className="w-[40%] flex flex-col justify-evenly">
          <div className="flex w-[60%]">
            <img
              src={
                "https://funworldblr.s3.amazonaws.com/public/Amusement/user.jpg"
              }
              alt="pic"
              width={50}
              className="w-[80px] h-[80px] rounded-[10rem]"
            />
            <div className="ml-5">
              <Typography variant="h5" className="font-bold">
                David K. Vinson
              </Typography>
              <Typography variant="subtitle1" className="text-[#FF9900]">
                Business Manager
              </Typography>
            </div>
          </div>
          <Typography variant="subtitle1" className="font-sans text-[22px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived.
          </Typography>
          <Typography className="text-[22px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
          <FaQuoteRight className="text-[#FF9900] text-3xl" />
          <BsThreeDots className="text-[#FF9900] text-3xl" />
        </Box>
      </Box>
    </div>
  );
};

const Index = () => {
  return (
    <div className="w-screen flex flex-col gap-2 overflow-x-hidden">
      <section className="w-full min-h-[400px] relative max-lg:min-h-[400px] max-xl:min-h-[400px] xl:h-fit max-md:min-h-[300px] max-sm:min-h-[250px]">
        <Image
          className="bg-cover bg-center bg-no-repeat absolute top-0 -z-10  max-sm:h-full object-contain  max-xs:object-cover  "
          src={"https://funworldblr.s3.amazonaws.com/public/Reusable/bg2.jpg"}
          alt="bacgkround img"
          width={2042}
          height={1029}
        />
        <div className="w-full bottom-[30%] sm:bottom-[50%] lg:bottom-[30%] absolute">
          <div className=" h-[100%] w-full flex flex-col text-center justify-center items-center ">
            <h1 className=" text-center px-[10vw] xl:leading-[60px] md:w-full font-extrabold lg:leading-[42px]  lg:text-[45px] xl:text-[65px] md:text-[50px] md:leading-[46px] text-white sm:text-3xl">
              Your Ultimate Destination for One-Stop Entertainment Delights
            </h1>
            <p className="text-center w-[60%] lg:px-[20vw] md:px-[10vw] md:w-full md:mt-8 mt-3 lg:text-[20px] lg:leading-[30px] text-white text-xs">
              Best Amusement Park in Bangalore, Where All the Fun and Happiness
              Resides
            </p>
          </div>
        </div>

        <div className="w-full h-full flex">
          <div className="absolute bottom-[200px] right-[425px] max-xl:bottom-[10vw] max-xl:right-[30%] max-lg:bottom-[16vw] max-md:hidden">
            <Image
              alt="/"
              src="https://funworldblr.s3.amazonaws.com/public/Rides/Ellipse1.webp"
              width={18}
              height={18}
            />
          </div>
          <div>
            <Image
              alt="/"
              src="https://funworldblr.s3.amazonaws.com/public/Rides/Ellipse2.webp"
              width={28}
              height={28}
            />
          </div>
          <div className="absolute bottom-[150px] right-[10rem] max-md:hidden ">
            <Image
              alt="/"
              src="https://funworldblr.s3.amazonaws.com/public/Rides/stars.webp"
              width={68}
              height={68}
            />
          </div>
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

      <section className="w-full h-auto lg:pt-32 lg:pb-12 pt-16 pb-0 lg:mt-0 ">
        <div className="w-full h-full sm:h-[auto] xl:h-full flex max-md:flex-col-reverse overflow-hidden">
          <AmusementParkStart />
        </div>
      </section>

      <section className="w-full h-auto max-md:h-auto py-[3vh]">
        <div className="w-full h-full max-md:h-auto flex max-md:flex-col-reverse max-md:justify-center overflow-hidden">
          <AmusementParkSecond />
        </div>
      </section>

      {/* <section className='w-full h-[60vh] max-md:h-auto max-lg:h-[130vh] md:mt-12 py-[3vh]'>

        <div className='w-full h-full max-md:h-auto flex max-md:flex-col-reverse max-md:justify-center overflow-x-hidden'>
          <CustomerReviewPage />
        </div>

      </section> */}

      <section className="w-full xl:h-[120vh] max-lg:h-[85vh] max-sm:mt-10 md:py-[3vh]">
        <div className="w-full h-full flex max-md:flex-col-reverse max-md:justify-center max-md:overflow-hidden">
          <AmusementParkThird />
        </div>
      </section>

      <section className="w-full h-auto md:py-[5vh]">
        <div className="w-full lg:h-full max-md:justify-center overflow-y-hidden">
          <AmusementParkFourth />
        </div>
      </section>

      {/* <section className='w-full h-[100vh] px-[10%] py-[5vh] max-md:hidden'>

<div className='w-full h-full max-md:px-[10%] max-md:justify-center overflow-y-auto'>
  <SatisfactionPage />
</div>

</section> */}
    </div>
  );
};

export default Index;

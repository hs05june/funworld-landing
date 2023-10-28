'use client'
import '@splidejs/react-splide/css/core';
import '@splidejs/react-splide/css';
import React from 'react'
import {Splide,SplideSlide} from "@splidejs/react-splide"
import Image from 'next/image'
import Rides1 from "@/public/Amusement/Rides1.webp"
import rides2 from "@/public/Amusement/rides2.jpeg"
import rides3 from "@/public/Amusement/rides3.jpeg"
import rides4 from "@/public/Amusement/rides4.jpeg"
import rides5 from "@/public/Amusement/rides5.jpeg"
import rides6 from "@/public/Amusement/rides6.jpeg"
import rides7 from "@/public/Amusement/rides7.jpeg"
import rides8 from "@/public/Amusement/rides8.jpeg"
import rides9 from "@/public/Amusement/rides9.jpeg"
import rides10 from "@/public/Amusement/rides10.jpeg"
import rides13 from "@/public/Amusement/rides13.webp"
import rides12 from "@/public/Amusement/rides12.webp"
import rides14 from "@/public/Amusement/rides14.webp"
import rides16 from "@/public/Amusement/rides16.webp"
import rides15 from "@/public/Amusement/rides15.webp"
import {AutoScroll} from "@splidejs/splide-extension-auto-scroll"
import { useState } from 'react';
import { useEffect } from 'react';

const Carousel = ({}) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  
  return (
    <>
    {
      domLoaded &&  <Splide aria-label="My Favorite Images" options={{
    type:'loop',
    drag:'free',
    perPage:3,
    autoScroll:{
        pauseOnHover: true,
        pauseOnFocus: true,
        rewind: false,
        speed: 1
    },
    arrows:false,
    focus:'center',
    gap:12,
    pagination: false,
    rewind: true,
    breakpoints:{
      1250:{
        perPage:3,
      },
      1024:{
        perPage:2
      },
      600:{
        perPage:1,
      },
    }
    

}} extensions={{AutoScroll}}>
  <SplideSlide>
    <Image priority src={rides15} alt="Image 1"/>
  </SplideSlide>
  <SplideSlide>
    <Image priority src={rides13} alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <Image priority src={rides12} alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <Image priority src={rides14} alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <Image priority src={rides16} alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <Image priority src={rides7} alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <Image priority src={rides8} alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <Image priority src={rides9} alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <Image priority src={rides10} alt="Image 2"/>
  </SplideSlide>
    </Splide>
}
</>
  )
}

export default Carousel
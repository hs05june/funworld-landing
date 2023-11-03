'use client'
import '@splidejs/react-splide/css/core';
import '@splidejs/react-splide/css';
import React from 'react'
import {Splide,SplideSlide} from "@splidejs/react-splide"
import Image from 'next/image'
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
    <img priority src={"https://funworldblr.s3.amazonaws.com/public/Amusement/rides15.webp"} alt="Image 1"/>
  </SplideSlide>
  <SplideSlide>
    <img priority src={"https://funworldblr.s3.amazonaws.com/public/Amusement/rides13.webp"} alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <img priority src={"https://funworldblr.s3.amazonaws.com/public/Amusement/rides12.webp"} alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <img priority src={"https://funworldblr.s3.amazonaws.com/public/Amusement/rides14.webp"} alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <img priority src={"https://funworldblr.s3.amazonaws.com/public/Amusement/rides16.webp"} alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <img priority src={"https://funworldblr.s3.amazonaws.com/public/Amusement/rides7.jpeg"} alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <img priority src={"https://funworldblr.s3.amazonaws.com/public/Amusement/rides8.jpeg"} alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <img priority src={"https://funworldblr.s3.amazonaws.com/public/Amusement/rides9.jpeg"} alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <img priority src={"https://funworldblr.s3.amazonaws.com/public/Amusement/rides10.jpeg"} alt="Image 2"/>
  </SplideSlide>
    </Splide>
}
</>
  )
}

export default Carousel
'use client'
import React from 'react'
import { BsArrowRightCircleFill } from "react-icons/bs"


const ProceedBtn = ({ text, clickFunction }) => {
  return (
    <div>
      <button className="rounded-full text-sm md:text-[21px]  shadow-md px-3 py-1 md:px-6 md:py-3 text-white font-[500] flex gap-4 items-center  text-center  justify-center btn " onClick={clickFunction} >
        <div className='flex justify-center items-center translate-x-[10%] hover:translate-x-[0%] btnDiv '>
          <span className=''>{text}</span>
          <span className='button-arrow ml-3 '><BsArrowRightCircleFill size={30} /></span>
        </div>
      </button>
    </div >
  )
}

export default ProceedBtn
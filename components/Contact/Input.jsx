import React from 'react'

function Input({placeholder,type}) {
  return (
    <>
    {
      type=="input" && 
      <div className='w-full py-4 px-4 rounded-md bg-[#F5F5F5E5]'>
        <input type="text" placeholder={placeholder} className=' bg-transparent w-full text-[#8A8A8A] outline-none border-none font-sans text-xl font-medium text-left ' />
    </div>
    }
    {
      type =="textarea" &&
      <div className='w-full py-4 px-4 rounded-md bg-[#F5F5F5E5]'>
        <textarea name={placeholder}  rows="5" placeholder={placeholder} className='w-full bg-transparent text-[#8A8A8A] outline-none border-none font-sans text-xl font-medium text-left '></textarea>
        {/* <input type="text" placeholder={placeholder} className=' bg-transparent w-full text-[#8A8A8A] outline-none border-none font-sans text-xl font-medium text-left ' /> */}
    </div>
    }
    
    </>
  )
}

export default Input
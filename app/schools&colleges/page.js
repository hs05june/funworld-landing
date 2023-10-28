import Image from 'next/image'
import bg1 from "@/public/Reusable/bg1.webp"
import students from "@/public/students.jpg"

import React from 'react'

const SchoolsColleges = () => {
    return (
        <div className="w-screen flex flex-col" >
            <section className='w-full min-h-[629px] relative max-lg:min-h-[400px] max-xl:min-h-[450px] xl:h-fit max-md:min-h-[300px] max-sm:min-h-[250px]'>
                <Image className='bg-cover bg-center bg-no-repeat absolute top-0 -z-10 w-full max-sm:h-full object-contain  max-xs:object-cover' src={bg1} alt="bacgkround img" width={2042} height={1029} />
                <div className="w-full bottom-[50%] absolute max-lg:bottom-[40%]">
                    <div className=" h-full w-full flex text-center justify-center items-center ">
                        <div className=" text-center font-extrabold text-[70px] text-white max-lg:text-6xl max-md:text-5xl  max-xs:text-4xl ">
                            Schools & Colleges
                        </div>
                    </div>
                </div>
            </section>

            <div className='w-[80vw] mx-auto flex flex-col items-center justify-center gap-6'>
                <div className='text-center px-12 my-6'>
                    Welcome to FunWorld Water Park - the ultimate destination for schools and colleges looking to make a splash! 🎉🏊‍♂️
                    <br />
                </div>

                <Image src={students} alt="abc" />
            </div>




        </div>
    )
}

export default SchoolsColleges
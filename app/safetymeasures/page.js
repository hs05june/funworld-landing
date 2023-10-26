"use client"
import React,{ useState } from 'react'
import bg1 from "@/public/Reusable/bg1.svg"
import Image from 'next/image'
import enhancedCleaning from "@/public/SafetyMeasures/enhancedCleaning.svg"
import physicalDistancing from "@/public/SafetyMeasures/physicalDistancing.svg"
import reducedContact from "@/public/SafetyMeasures/reducedContact.svg"
import limitedCapacity from "@/public/SafetyMeasures/limitedCapacity.svg"
import mask from "@/public/SafetyMeasures/mask.svg"
import screening from "@/public/SafetyMeasures/screening.svg"
import enhancedCleaningHover from "@/public/SafetyMeasures/enhancedCleaningHover.svg"
import physicalDistancingHover from "@/public/SafetyMeasures/physicalDistancingHover.svg"
import reducedContactHover from "@/public/SafetyMeasures/reducedContactHover.svg"
import limitedCapacityHover from "@/public/SafetyMeasures/limitedCapacityHover.svg"
import maskHover from "@/public/SafetyMeasures/maskHover.svg"
import screeningHover from "@/public/SafetyMeasures/screeningHover.svg"


const SafetyMeasures = () => {
    const [hover1,setHover1] = useState(false)
    const [hover2,setHover2] = useState(false)
    const [hover3,setHover3] = useState(false)
    const [hover4,setHover4] = useState(false)
    const [hover5,setHover5] = useState(false)
    const [hover6,setHover6] = useState(false)
    return (
        <div className="w-screen flex flex-col" >
            <section className='w-full min-h-[629px] relative max-lg:min-h-[400px] max-xl:min-h-[450px] xl:h-fit max-md:min-h-[300px] max-sm:min-h-[250px]'>
            <Image className='bg-cover bg-center bg-no-repeat absolute top-0 -z-10 w-full max-sm:h-full object-contain  max-xs:object-cover' src={bg1} alt="bacgkround img" width={2042} height={1029} />
            <div className="w-full bottom-[50%] absolute max-lg:bottom-[40%]">
          <div className=" h-full w-full flex text-center justify-center items-center ">
            <div className=" text-center font-extrabold text-[70px] text-white max-lg:text-6xl max-md:text-5xl  max-xs:text-4xl ">
              Covid 19
            </div>
          </div>
        </div>
    </section>
        <section className='w-full'>

        
            <div className='px-[13vw] max-sm:pt-2 max-md:pt-8 lg:pt-12 xl:pt-[5vw] flex flex-col gap-8 items-center text-justify max-md:px-[7vw] max-sm:px-[3vw]'>
                <h1 className='text-[54px] font-[600] max-md:text-5xl max-sm:text-4xl'>Safety Measures</h1>
                <p className='px-[10vw] text-center'>We have introduced a number of hygiene and safety measures, we request everyone to follow the same for a safe trip.
                </p>

                <div className='flex flex-wrap gap-6 items-center justify-center' >
                    <div className='max-w-[330px] min-w-[280px] h-[300px] flex flex-col gap-4 pt-12 bg-[#FFEEF6] px-8 pr-12  rounded-lg hover:bg-gradient-to-l  hover:from-[#E7034C] hover:to-[#FC7B03] hover:text-white' onMouseOver={()=>setHover1(true)} onMouseOut={()=>setHover1(false)}>
                        <Image src={hover1 ? enhancedCleaningHover : enhancedCleaning} alt="enhanced cleaning" />
                        <h3 className='text-[23px] font-[600]'>Enhanced Cleaning</h3>
                        <p>Cleaning procedures are enhanced throughout</p>
                    </div>

                    <div onMouseOver={()=>setHover2(true)} onMouseOut={()=>setHover2(false)} className='max-w-[330px] min-w-[280px] h-[300px] flex flex-col gap-4 pt-12 bg-[#FFEEF6] px-8 pr-12  rounded-lg hover:bg-gradient-to-l  hover:from-[#E7034C] hover:to-[#FC7B03] hover:text-white'>
                        <Image src={hover2 ? physicalDistancingHover : physicalDistancing} alt="Physical Distancing" />
                        <h3 className='text-[23px] font-[600]'>Physical Distancing
                        </h3>`
                        <p>Temporary adjustments are in place to promote physical distancing.</p>
                    </div>


                    <div className='max-w-[330px] min-w-[280px] h-[300px] flex flex-col gap-4 pt-12 bg-[#FFEEF6] px-8 pr-12  rounded-lg hover:bg-gradient-to-l  hover:from-[#E7034C] hover:to-[#FC7B03] hover:text-white' onMouseOver={()=>setHover3(true)} onMouseOut={()=>setHover3(false)}>
                        <Image src={hover3 ? reducedContactHover : reducedContact} alt="reduced contact" />
                        <h3 className='text-[23px] font-[600]'>Reduced Contact

                        </h3>
                        <p>
                            Experiences may be modified in order to reduce contact.
                        </p>
                    </div>

                    <div className='max-w-[330px] min-w-[280px] h-[300px] flex flex-col gap-4 pt-12 bg-[#FFEEF6] px-8 pr-12  rounded-lg hover:bg-gradient-to-l  hover:from-[#E7034C] hover:to-[#FC7B03] hover:text-white' onMouseOver={()=>setHover4(true)} onMouseOut={()=>setHover4(false)}>
                        <Image src={hover4 ? limitedCapacityHover : limitedCapacity} alt="limited capicity" />
                        <h3 className='text-[23px] font-[600]'>Limited Capacity
                        </h3>
                        <p>
                            We have reduced our occupancy every day for the safety reasons.
                        </p>
                    </div>

                    <div className='max-w-[330px] min-w-[280px] h-[300px] flex flex-col gap-4 pt-12 bg-[#FFEEF6] px-8 pr-12  rounded-lg hover:bg-gradient-to-l  hover:from-[#E7034C] hover:to-[#FC7B03] hover:text-white' onMouseOver={()=>setHover5(true)} onMouseOut={()=>setHover5(false)}>
                        <Image src={hover5 ? maskHover : mask} alt="wearning masks" />
                        <h3 className='text-[23px] font-[600]'>Face Masks
                        </h3>
                        <p>
                            Everyone at the park is required to wear the Mask.
                        </p>
                    </div>


                    <div className='max-w-[330px] min-w-[280px] h-[300px] flex flex-col gap-4 pt-12 bg-[#FFEEF6] px-8 pr-12  rounded-lg hover:bg-gradient-to-l  hover:from-[#E7034C] hover:to-[#FC7B03] hover:text-white' onMouseOver={()=>setHover6(true)} onMouseOut={()=>setHover6(false)}>
                        <Image src={hover6 ? screeningHover : screening} alt="temperature Screening" />
                        <h3 className='text-[23px] font-[600]'>Temperature Screenings

                        </h3>
                        <p>
                            Undergo a temperature screening with no-touch thermometers before entry.                        </p>
                    </div>

                </div>
            </div>
            </section>

        </div>
    )
}

export default SafetyMeasures
import ParkAttractions1 from "@/public/Home/parkAttractions/parkAttractions1.webp"
import ParkAttractions2 from "@/public/Home/parkAttractions/parkAttractions2.webp"
import ParkAttractions3 from "@/public/Home/parkAttractions/parkAttractions3.webp"
import ParkAttractions4 from "@/public/Home/parkAttractions/parkAttractions4.webp"
import ParkAttractions5 from "@/public/Home/parkAttractions/parkAttractions5.webp"
import ProceedBtn from "../Repeating/Button"
import FreeFall from "@/public/Home/parkAttractions/freeFall.webp"
import { animated, useInView } from "@react-spring/web"
import { useRouter } from "next/navigation"
// import waterpark from "@/public/Home/parkAttractions/waterpak.jpeg"





const ParkAttractions = () => {
    const router = useRouter()


    const [divRef, divProps] = useInView(() => ({
        from: {
            y: 100,
            opacity: 0,
        },
        to: {
            y: 0,
            opacity: 1
        },
        config: { duration: 1000 },
        reset: false,
        reverse: false,
        delay: 1000
    }))


    return (
        <div className='flex flex-col items-center px-[3vw] gap-6 relative mb-16'>
            <h2 className='xl:text-[62px] xl:leading-[62px] text-[45px] leading-[45px] text-[#0B1A48] font-[620] text-center'>Park Attractions</h2>
            <p className=' xl:px-[9rem] lg:px-[7rem] md:px-[5rem] px-[1rem]  font-[400] text-[20px] leading-[33px] text-center text-[#5B5B5B]'>Get ready to be mesmerized by a world of captivating park attractions that beckon with promises of unforgettable adventures and wondrous encounters. </p>
            <animated.div className='flex flex-wrap gap-4 justify-center mt-4' ref={divRef} style={divProps} >
                <div className='min-w-[270px] bg-cover bg-center max-w-[400px] h-[500px] bg-[url("../public/Home/parkAttractions/newimage2.jpg")] 
                '>
                    <div className="overlay w-full h-full flex flex-col items-center justify-end ">
                        <div className='text-white px-6 py-6 overlay-text'>
                            <div className="w-full">
                                <h3 className='text-[32px] font-[620]'>Amusement Park</h3>
                                <div className="w-[50%] h-1 bg-white underlineDiv">

                                </div>
                            </div>
                            <p className="text-[20px]">Prepare to be immersed in a world of excitement, and boundless joy</p>
                        </div>
                    </div>

                </div>
                <div className='min-w-[270px] max-w-[400px] bg-cover bg-center h-[500px] bg-[url("../public/Home/parkAttractions/newimage8.jpg")]'>
                    <div className="overlay w-full h-full flex flex-col items-center justify-end ">
                        <div className='text-white px-6 py-6 overlay-text'>
                            <div className="w-full">
                                <h3 className='text-[32px] font-[620]'>Water Park</h3>
                                <div className="w-[50%] h-1 bg-white underlineDiv">

                                </div>
                            </div>
                            <p className="text-[20px]">Escape the summer heat and embark on an aquatic adventure!</p>
                        </div>
                    </div>
                </div>
                <div className='min-w-[270px] max-w-[400px] bg-cover bg-center h-[500px] bg-[url("../public/Home/parkAttractions/newimage5.jpeg")] '>
                    <div className="overlay w-full h-full flex flex-col items-center justify-end">
                        <div className='text-white px-6 py-6 overlay-text'>
                            <div className="w-full">
                                <h3 className='text-[32px] font-[620]'>Snow City</h3>
                                <div className=" w-[50%] h-1 bg-white underlineDiv ">

                                </div>
                            </div>

                            <p className="text-[20px]">Experience the thrill of winter without leaving the city!</p>
                        </div>
                    </div>
                </div>
            </animated.div>
        </div>
    )
}

export default ParkAttractions
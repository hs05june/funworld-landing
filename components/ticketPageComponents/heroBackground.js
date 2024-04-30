import Image from "next/image";

export const HeroBackground = () => {
  return (
    <>
      <section className="w-full min-h-[400px] relative max-lg:min-h-[400px] max-xl:min-h-[400px] xl:h-fit max-md:min-h-[300px] max-sm:min-h-[250px]">
        <Image
          className="bg-cover bg-center bg-no-repeat absolute top-0 -z-10  max-sm:h-full object-contain  max-xs:object-cover  "
          src={"https://funworldblr.s3.amazonaws.com/public/Reusable/bg2.jpg"}
          alt="bacgkround img"
          width={2042}
          height={1029}
        />
        <div className="w-full bottom-[45%] sm:bottom-[60%] lg:bottom-[45%] xl:bottom-[40%] 1.5xl:bottom-[40%] 2xl:bottom-[35%] 3xl:bottom-[20%] absolute">
          <div className=" h-[100%] w-full flex flex-col text-center justify-center items-center ">
            <h1 className=" text-center px-[10vw] xl:leading-[60px] 2xl:text-[75px] 3xl:text-[85px] md:w-full font-extrabold lg:leading-[42px]  lg:text-[45px] xl:text-[65px] md:text-[50px] md:leading-[46px] text-[32px] text-white sm:text-3xl">
              Tickets
            </h1>
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
    </>
  );
};

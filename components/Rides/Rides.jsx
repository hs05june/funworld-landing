import Link from "next/link";
import React from "react";
const Rides = ({ img, text, index }) => {
  return (
    <Link
      img={img}
      href={`/ridedetails/${index}`}
      className="w-full flex flex-col imgcontainer cursor-pointer"
    >
      <img priority src={img} className="image h-[250px]" alt="abc" />
      <div className="w-full font-spartan py-4 text-left text-4xl font-bold max-xl:text-2xl">
        <div className=" trans   ">
          <span className="mr-0 opacity-0 whitespace-nowrap spannum ml-6"></span>
          <span>{text}</span>
        </div>
      </div>
    </Link>
  );
};

export default Rides;

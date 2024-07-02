import React from "react";
// import styles from "./featured.module.css";
import styles from "./featured.module.css";
import Image from "next/image";
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className="text-xl sm:text-2xl md:text-6xl">
        <b>Hey, Funworld here!</b> Discover our stories and creative ideas.
      </h1>

      <div className="my-8 grid grid-cols-1 md:grid-cols-2 justify-between items-center">
        
        <div className="relative">
          <Image src="/p1.jpeg" alt="" width={300} height={350} />
        </div>

        <div className="">
          <h1 className='font-semibold text-xl sm:text-2xl md:text-4xl my-2'>
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
          </h1>
          <p className=''>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button className={styles.button}>Read More</button>
        
        </div>
      </div>
    </div>
  );
};

export default Featured;

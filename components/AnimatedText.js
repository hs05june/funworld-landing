import React from 'react';
import { motion } from 'framer-motion';

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.3,
    },
  },
};

const singleword = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
    },
  },
};

const AnimatedText = ({ text }) => {
  return (
    <>
      <motion.span
        variants={quote}
        initial="initial"
        animate="animate"
        className="lg:text-6xl lg:leading-[65px] md:text-[45px] md:leading-[47px] text-[20px] leading-[22px] font-[760] lg:tracking-[-2.8px]"
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            variants={singleword}
            className=""
            key={index}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.span>
    </>
  );
};

export default AnimatedText;

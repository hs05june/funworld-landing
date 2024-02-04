"use client";
import Image from "next/image";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import ProceedBtn from "./Button";

let itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);

  const [isOpen, setIsOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavClick = () => {
    // console.log(isNavOpen)
    setIsNavOpen(true);
  };
  const router = useRouter();

  return (
    <>
      <div className="hidden lg:block z-20">
        <div className="bg-[#B6004C] flex p-1 text-white justify-between items-center px-[10vw] ">
          <div className="flex gap-4">
            <span>10:30 AM - 7:00 PM</span>
            <span>info@funworldblr.com</span>
            <span>08431110000</span>
          </div>

          <div className="flex flex-row md:justify-start justify-center gap-4">
            <div className="flex flex-row md:justify-start justify-center gap-4">
              <a
                href="https://www.facebook.com/funworld.bangalore/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-gradient-to-r from-[#FC0] to-[#FD1783] hover:scale-105 transition-all delay-200 border-2 border-white flex items-center justify-center rounded-full p-2"
              >
                <img
                  priority
                  src={
                    "https://funworldblr.s3.amazonaws.com/public/Reusable/fbFooter.webp"
                  }
                  alt="facebook icon"
                />
              </a>
              <a
                href="https://www.instagram.com/funworld__blr/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-gradient-to-r from-[#FC0] to-[#FD1783] hover:scale-105 transition-all delay-200 border-2 border-white flex items-center justify-center rounded-full p-2"
              >
                <img
                  priority
                  src={
                    "https://funworldblr.s3.amazonaws.com/public/Reusable/igFooter.webp"
                  }
                  alt="instagram icon"
                />
              </a>
              <a
                href="https://twitter.com/funworld_blr?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-gradient-to-r from-[#FC0] to-[#FD1783] hover:scale-105 transition-all delay-200 border-2 border-white flex items-center justify-center rounded-full p-2"
              >
                <img
                  priority
                  src={
                    "https://funworldblr.s3.amazonaws.com/public/Reusable/twitterFooter.webp"
                  }
                  alt="twitter icon"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white flex justify-between items-center shadow-lg gap-4 h-[130px] xl:pl-[10vw] xl:pr-[2vw] lg:pl-[5vw] lg:pr-[1vw] w-full">
          <div className="flex flex-row relative justify-between w-full">
            <div className="w-[250px] h-[100px]"></div>
            <Link className="absolute top-[-35px] z-10" href="/">
              <img
                className=""
                priority
                src={"https://funworldblr.s3.amazonaws.com/public/logo2.png"}
                alt="logo2"
              />
            </Link>

            <div className="flex xl:gap-8 lg:gap-4 gap-3 items-center  text-[19px] font-[600]">
              <Link href="/" className="flex flex-col group">
                <span>EXPLORE</span>
                <span
                  className={`w-0 group-hover:w-[100%] transition-all duration-200 h-[3px] bg-[#B6004C] ${
                    pathname == "/" ? "w-[100%]" : ""
                  }`}
                ></span>
              </Link>

              <Link href="/amusementpark" className="flex flex-col group">
                <span>AMUSEMENT PARK</span>
                <span
                  className={`w-0 group-hover:w-[100%] transition-all duration-200 h-[3px] bg-[#B6004C] ${
                    pathname == "/amusementpark" ? "w-[100%]" : ""
                  }`}
                ></span>
              </Link>

              <Link href="/waterpark" className="flex flex-col group">
                <span>WATER PARK</span>
                <span
                  className={`w-0 group-hover:w-[100%] transition-all duration-200 h-[3px] bg-[#B6004C]
                ${pathname == "/waterpark" ? "w-[100%]" : ""}
                `}
                ></span>
              </Link>

              <div className="flex flex-col group">
                <motion.nav
                  initial={false}
                  animate={isOpen ? "open" : "closed"}
                  className="menu relative top-7"
                >
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex gap-4 items-center"
                  >
                    COMPANY
                    <motion.div
                      variants={{
                        open: { rotate: 180 },
                        closed: { rotate: 0 },
                      }}
                      transition={{ duration: 0.2 }}
                      style={{ originY: 0.55 }}
                    >
                      <svg width="15" height="15" viewBox="0 0 20 20">
                        <path d="M0 7 L 20 7 L 10 16" />
                      </svg>
                    </motion.div>
                  </motion.button>
                  <motion.ul
                    variants={{
                      open: {
                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                        transition: {
                          type: "spring",
                          bounce: 0,
                          duration: 0.7,
                          delayChildren: 0.3,
                          staggerChildren: 0.05,
                        },
                      },
                      closed: {
                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                        transition: {
                          type: "spring",
                          bounce: 0,
                          duration: 0.3,
                        },
                      },
                    }}
                    style={{ pointerEvents: isOpen ? "auto" : "none" }}
                  >
                    <motion.li variants={itemVariants}>
                      {" "}
                      <Link href="/about">ABOUT US</Link>
                    </motion.li>
                    <motion.li variants={itemVariants}>
                      <Link href="/service">SERVICES</Link>
                    </motion.li>
                  </motion.ul>
                </motion.nav>
              </div>

              <div className="flex gap-4 items-center">
                <div className="h-[25px] w-[2px] bg-gray-500"></div>
                <Link href="/product/tickets">
                  <ProceedBtn text={"Buy Tickets"} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden block">
        <div className="flex flex-col items-end justify-around mx-5 h-20">
          <div className="w-fit h-fit absolute top-[-10px] left-5 z-10">
            <Image
              priority
              src={"https://funworldblr.s3.amazonaws.com/public/logo2.png"}
              alt="logo"
              width={100}
              height={100}
            />
          </div>

          <div className="flex flex-row gap-5 items-center">
            {/* <div>
              <Image width={150} height={60} src={buy} alt="buy tickets button" />
            </div> */}
            <Link href="/product/tickets">
              <button
                className="p-2 px-6 buyTicketsBtn text-white"
                onClick={() => {
                  setIsNavOpen(false);
                }}
              >
                Buy Tickets
              </button>
            </Link>
            <div
              onClick={() => setIsNavOpen(true)}
              className="cursor-pointer z-1"
            >
              <GiHamburgerMenu size={25} />
            </div>
          </div>
        </div>
        <div
          className="sidebar-container fixed w-full h-full overflow-hidden 
   justify-center bg-white grid pt-[120px] left-0 z-10"
          style={{
            opacity: `${isNavOpen ? "1" : "0"}`,
            top: ` ${isNavOpen ? "0" : "-100%"}`,
          }}
        >
          <button
            name="navbar btn"
            className="absolute right-0 p-5"
            onClick={() => setIsNavOpen(false)}
          >
            {/* Close icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
              />
            </svg>
          </button>

          <div className={`flex flex-col gap-5 z-50`}>
            <Link href="/" className="flex flex-col group">
              <span
                className={`${pathname === "/" ? "text-[#B6004C]" : ""}`}
                onClick={() => setIsNavOpen(false)}
              >
                EXPLORE
              </span>
              <span
                className={`w-0 group-hover:w-[100%]  transition-all duration-200 h-[3px] bg-[#B6004C] ${
                  pathname === "/" ? "w-[100%] " : ""
                }`}
              ></span>
            </Link>

            <Link href="/amusementpark" className="flex flex-col group">
              <span
                className={`${
                  pathname === "/amusementpark" ? "text-[#B6004C]" : ""
                }`}
                onClick={() => setIsNavOpen(false)}
              >
                AMUSEMENT PARK
              </span>
              <span
                className={`w-0 group-hover:w-[100%]  transition-all duration-200 h-[3px] bg-[#B6004C] ${
                  pathname === "/amusementpark" ? "w-[100%] " : ""
                }`}
              ></span>
            </Link>

            <Link href="/waterpark" className="flex flex-col group">
              <span
                className={`${
                  pathname === "/waterpark" ? "text-[#B6004C]" : ""
                }`}
                onClick={() => setIsNavOpen(false)}
              >
                WATER PARK
              </span>
              <span
                className={`w-0 group-hover:w-[100%]  transition-all duration-200 h-[3px] bg-[#B6004C] ${
                  pathname === "/waterpark" ? "w-[100%] " : ""
                }`}
              ></span>
            </Link>

            <Link href="/about" className="flex flex-col group">
              <span
                className={`${pathname === "/about" ? "text-[#B6004C]" : ""}`}
                onClick={() => setIsNavOpen(false)}
              >
                ABOUT US
              </span>
              <span
                className={`w-0 group-hover:w-[100%]  transition-all duration-200 h-[3px] bg-[#B6004C] ${
                  pathname === "/about" ? "w-[100%] " : ""
                }`}
              ></span>
            </Link>

            <Link href="/service" className="flex flex-col group">
              <span
                className={`${pathname === "/service" ? "text-[#B6004C]" : ""}`}
                onClick={() => setIsNavOpen(false)}
              >
                SERVICES
              </span>
              <span
                className={`w-0 group-hover:w-[100%]  transition-all duration-200 h-[3px] bg-[#B6004C] ${
                  pathname === "/service" ? "w-[100%] " : ""
                }`}
              ></span>
            </Link>

            {/* <div className='flex flex-col group'>
              <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                className="menu"
              >
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setIsOpen(!isOpen)}
                  className='flex gap-4 items-center'
                >
                  COMPANY
                  <motion.div
                    variants={{
                      open: { rotate: 180 },
                      closed: { rotate: 0 }
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ originY: 0.55 }}
                  >
                    <svg width="15" height="15" viewBox="0 0 20 20">
                      <path d="M0 7 L 20 7 L 10 16" />
                    </svg>
                  </motion.div>
                </motion.button>
                <motion.ul
                  variants={{
                    open: {
                      clipPath: "inset(0% 0% 0% 0% round 10px)",
                      transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.7,
                        delayChildren: 0.3,
                        staggerChildren: 0.05
                      }
                    },
                    closed: {
                      clipPath: "inset(10% 50% 90% 50% round 10px)",
                      transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.3
                      }
                    }
                  }}
                  style={{ pointerEvents: isOpen ? "auto" : "none" }}
                >
                  <Link href="/about" passHref>
                    <motion.a
                      as={motion.li}
                      variants={itemVariants}
                      whileHover="hover"

                    >
                      ABOUT US
                    </motion.a>
                  </Link>
                  <Link href="/service" passHref> 
                  <motion.li variants={itemVariants}>SERVICES</motion.li>
                  </Link>
                </motion.ul>
              </motion.nav>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

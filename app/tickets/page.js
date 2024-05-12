"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "react-calendar/dist/Calendar.css";

// Imported Functions
import ProceedBtn from "@/components/Repeating/Button";
import { ticketPricingFunction } from "@/components/ticketPageFunctions/ticketPricing";
import { checkCouponAndAddingDiscount } from "@/components/ticketPageFunctions/couponcheckAndAddingDiscount";
import { formatDate } from "@/components/ticketPageFunctions/formatDate";
import { findDayOfWeek } from "@/components/ticketPageFunctions/findDayOfWeek";
import { handleSummaryclick } from "@/components/ticketPageFunctions/handleSummaryClick";
import { RazorpayCheckout } from "@/components/ticketPageFunctions/RazorpayCheckout";

// Imported modules:
import ConfettiExplosion from "react-confetti-explosion";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import ClipLoader from "react-spinners/ClipLoader";
import { HeroBackground } from "@/components/ticketPageComponents/heroBackground";
import { TermsAndConditionsForTickets } from "@/components/ticketPageComponents/termsAndConditionsForTickets";
import { Banner } from "@/components/ticketPageComponents/Banner";

// Main function starts here:
const TicketsPage = () => {
  const [isAfter5pm, setIsAfter5pm] = useState(false);
  const [checkoutPrice, setCheckoutPrice] = useState(0);
  const [checkoutPriceAfterDiscount, setCheckoutPriceAfterDiscount] =
    useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [page, setPage] = useState(1);
  const targetComponent = useRef(null);
  const targetComponent2 = useRef(null);
  const [info, setInfo] = useState({
    visitDate: "",
    child: 0,
    adult: 0,
    senior: 0,
  });
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    number: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    email: "",
  });

  const currentDate = new Date();
  const nextDay = new Date(currentDate);
  nextDay.setDate(currentDate.getDate() + 1);
  const formattedCurrentDate = formatDate(currentDate);
  const formattedNextDay = formatDate(nextDay);

  const handleDateChange = (date) => {
    setInfo((prev) => {
      const updatedInfo = { ...prev, ["visitDate"]: date };
      return updatedInfo;
    });
  };

  const [ticketId, setTicketId] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  //handling changing of tickets
  const handleNoOfTickets = (action, type) => {
    if (action === "inc") {
      setInfo((prev) => {
        const updatedInfo = { ...prev, [type]: prev[type] + 1 };
        return updatedInfo;
      });
    } else {
      if (info[type] > 0) {
        setInfo((prev) => {
          const updatedInfo = { ...prev, [type]: prev[type] - 1 };
          return updatedInfo;
        });
      }
    }
  };

  const handleRemoveDiscountClick = () => {
    setCheckoutPriceAfterDiscount(checkoutPrice);
    setDiscountPrice(0);
    setDiscountApplied(false);
  };

  const handleCouponClickCall = (coupon) => {
    setCoupon(coupon);
    targetComponent2.current?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      checkCouponAndAddingDiscount({
        coupon,
        checkoutPrice,
        setDiscountPrice,
        setCheckoutPriceAfterDiscount,
        setDiscountApplied,
      });
    }, 500);
  };

  // Use Effect hooks

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      const istOptions = { timeZone: "Asia/Kolkata" };
      const formattedTime = now.toLocaleTimeString("en-US", istOptions);
      const lastTwoCharacters = formattedTime.slice(-2);
      const [hours, minutes, seconds] = formattedTime.split(":");
      let isAfter5pmIST = false;
      console.log(parseInt(hours, 10));
      if (lastTwoCharacters === "PM" && parseInt(hours, 10) != 12) {
        isAfter5pmIST = parseInt(hours, 10) + 12 >= 17;
      } else {
        isAfter5pmIST = parseInt(hours, 10) >= 17;
      }
      if (isAfter5pmIST) {
        handleDateChange(formattedNextDay);
      }
      setIsAfter5pm(isAfter5pmIST);
    };

    checkTime();

    // Check time every minute
    const intervalId = setInterval(checkTime, 60000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (info.child + info.adult + info.senior > 0 && info.visitDate)
      setCheckoutPrice(
        ticketPricingFunction("child", info.visitDate) * info.child +
          ticketPricingFunction("adult", info.visitDate) * info.adult +
          ticketPricingFunction("senior", info.visitDate) * info.senior
      );

    setCheckoutPriceAfterDiscount(
      ticketPricingFunction("child", info.visitDate) * info.child +
        ticketPricingFunction("adult", info.visitDate) * info.adult +
        ticketPricingFunction("senior", info.visitDate) * info.senior
    );
  }, [info]);


  useEffect(() => {
    if (targetComponent.current) {
      targetComponent.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [page]);

  useEffect(() => {
    if (coupon && discountPrice > 0) {
      checkCouponAndAddingDiscount({
        coupon,
        checkoutPrice,
        setDiscountPrice,
        setCheckoutPriceAfterDiscount,
        setDiscountApplied,
      });
    }
  }, [checkoutPriceAfterDiscount]);

  return (
    <div className="min-h-screen w-screen flex flex-col select-none	">
      <HeroBackground />
      {page == 2 ? (
        <div className="mb-6 mt-20 3xl:mt-80  2xl:mt-60 xl:mt-40">
          <div className="flex lg:flex-row flex-col items-center lg;gap-0 gap-6 text-white lg:space-x-4  justify-center">
            <div className="xl:w-[25vw] lg:w-[30vw] md:w-[65vw] w-[75vw] h-[240px] bg-red-600 rounded flex justify-center">
              <div
                className="flex flex-col items-center gap-2 w-[90%] mx-auto h-[90%] my-auto justify-center border-white border-dashed border-2 cursor-pointer hover:scale-105 transition-all delay-200"
                onClick={() => handleCouponClickCall("10SUMMEROFF")}
              >
                <p>
                  <span className="lg:text-2xl text-xl font-[700]">10%</span>{" "}
                  Cart Discount
                </p>
                <div className="border border-white rounded-xl lg:px-4 lg:py-2 px-2 py-1 mt-2">
                  10SUMMEROFF
                </div>

                <div className="mt-4 px-2 text-center text-[11px]">
                  Special Discount of 10% this summer
                </div>
              </div>
            </div>

            <div className="xl:w-[25vw] lg:w-[30vw] md:w-[65vw] w-[75vw] h-[240px] bg-red-600 rounded flex justify-center">
              <div
                className="flex flex-col items-center gap-2 w-[90%] mx-auto h-[90%] my-auto justify-center border-white border-dashed border-2 hover:scale-105 transition-all delay-200 cursor-pointer"
                onClick={() => handleCouponClickCall("20GOVTOFF")}
              >
                <p>
                  <span className="lg:text-2xl text-xl font-[700]">20%</span>{" "}
                  Cart Discount
                </p>
                <div className="border border-white rounded-xl lg:py-2 px-2 py-1 mt-2">
                  20GOVTOFF
                </div>

                <div className="mt-4 px-2 text-center text-[11px]">
                  20% OFF for Government Employees. Must show Government
                  Identification to avail discount. ID Compulsory for Entry.
                </div>
              </div>
            </div>

            <div
              className="xl:w-[25vw] lg:w-[30vw] md:w-[65vw] w-[75vw] h-[240px] bg-red-600 rounded flex justify-center"
              ref={targetComponent}
            >
              <div
                className="flex flex-col items-center gap-2 w-[90%] mx-auto h-[90%] my-auto justify-center border-white border-dashed border-2 hover:scale-105 transition-all delay-200 cursor-pointer"
                onClick={() => handleCouponClickCall("30STUDENTOFF")}
              >
                <p>
                  <span className="lg:text-2xl text-xl font-[700]">30%</span>{" "}
                  Cart Discount
                </p>

                <div className="border border-white rounded-xl lg:py-2 px-2 py-1 mt-2">
                  30STUDENTOFF
                </div>

                <div className="mt-4 px-2 text-center text-[11px]">
                  Must Carry a Valid Student ID Card for verification. Valid
                  only for School & College Students.
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {page == 1 ? (
        <div className="flex flex-col gap-8">
          <section className="flex items-center justify-center mt-4 lg:mt-24 xl:mt-40 2xl:mt-60 3xl:mt-80">
            <div className="md:w-[60vw] w-[80vw] min-h-[180px] bg-[#FFEEF6] rounded-2xl justify-around items-center gap-4 py-4">
              <div className="flex flex-col items-center justify-around gap-5 md:flex-row">
                {isAfter5pm ? null : (
                  <div
                    onClick={() => handleDateChange(formattedCurrentDate)}
                    className={`w-[220px] md:w-1/3 md:h-[130px] h-[80px] bg-[#0B1A48] text-white text-xs font-bold md:text-xl shadow-xl hover:scale-105 transition-all rounded-xl ease cursor-pointer flex flex-col gap-4 md:p-6 md:pt-8 pt-3 items-center text-center ${
                      info.visitDate === formattedCurrentDate
                        ? "buyTicketsBtn3"
                        : ""
                    } `}
                  >
                    <span className="md:relative md:bottom-4 ">
                      Today
                      <br />
                      {formattedCurrentDate} <br />
                      {findDayOfWeek(formattedCurrentDate)}
                    </span>
                  </div>
                )}

                <div
                  onClick={() => handleDateChange(formattedNextDay)}
                  className={`w-[220px] md:w-1/3 md:h-[130px] h-[80px] bg-[#0B1A48] text-white text-xs font-bold md:text-xl shadow-xl hover:scale-105 transition-all rounded-xl ease cursor-pointer flex flex-col gap-4 md:p-6 md:pt-8 pt-3 items-center text-center ${
                    info.visitDate === formattedNextDay ? "buyTicketsBtn3" : ""
                  } `}
                >
                  <span className="md:relative md:bottom-4">
                    Tomorrow <br />
                    {formattedNextDay} <br />
                    {findDayOfWeek(formattedNextDay)}
                  </span>
                </div>

                <div
                  className="w-[220px] md:w-1/3"
                  htmlFor="dateInput" // Use the "htmlFor" property with the input's ID
                >
                  <label
                    className={` md:h-[130px] h-[80px] p-1 text-xs font-bold rounded-xl shadow-xl bg-[#0B1A48] text-white  hover:scale-105 transition-all ease cursor-pointer flex flex-col gap-4 md:p-6 md:pt-8 pt-3 items-center text-center  ${
                      info.visitDate != formattedNextDay &&
                      info.visitDate != formattedCurrentDate
                        ? "buyTicketsBtn3 text-white"
                        : ""
                    } `}
                    onChange={(e) => handleDateChange(e.target.value)}
                  >
                    <input
                      className={`px-2 py-1 rounded text-black outline-none  ${
                        info.visitDate != formattedNextDay &&
                        info.visitDate != formattedCurrentDate
                          ? " "
                          : ""
                      } `}
                      value={info.visitDate}
                      type="date"
                      min={formattedCurrentDate} // Set the minimum date to the current date
                      onChange={(e) => handleDateChange(e.target.value)}
                    ></input>
                    Choose Another Date
                  </label>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col lg:gap-2 gap-12 justify-around md:w-[60vw] w-[80vw] mx-auto">
            <div className="flex flex-col gap-6 items-center ">
              <div className="flex flex-col gap-6 items-center mx-auto">
                <div className="flex flex-col md:w-[60vw] w-[80vw] mx-auto justify-around gap-4">
                  <span className="font-[600] text-xs sm:text-sm md:text-3xl">
                    Packages for date: {info.visitDate}(
                    {findDayOfWeek(info.visitDate)})
                  </span>

                  <p className="text-xs md:text-base">
                    <span className="text-red-500">Note: </span>Tickets of adult
                    maybe more expensive on Weekends
                  </p>

                  <div className="flex w-[100%] bg-[#FFEEF6] text-xs md:text-lg rounded-tl-2xl rounded-tr-2xl p-2 md:py-3 md:px-4 font-[600] items-center justify-around">
                    <label className="text-sm md:text-xl">
                      Fun World - Child
                    </label>
                    <label>
                      ₹{" "}
                      {info.visitDate
                        ? ticketPricingFunction("child", info.visitDate)
                        : "0.00"}
                    </label>
                    <div className="flex items-center gap-2">
                      <span
                        onClick={() => handleNoOfTickets("prev", "child")}
                        className="md:p-1 border rounded hover:scale-105 transition-all ease-in-out delay-150 hover:bg-gray-300"
                      >
                        <AiOutlineMinus />
                      </span>

                      <span className="">{info.child}</span>

                      <span
                        onClick={() => handleNoOfTickets("inc", "child")}
                        className="md:p-1 border rounded hover:scale-105 transition-all ease-in-out delay-150 hover:bg-gray-300"
                      >
                        <AiOutlinePlus />
                      </span>
                    </div>
                    <label className="md:w-[120px] text-center">
                      ₹{" "}
                      {info.visitDate && info.child > 0
                        ? ticketPricingFunction("child", info.visitDate) *
                          info.child
                        : "0.00"}
                    </label>
                  </div>

                  <div className="flex text-xs w-[100%] md:text-lg p-2 md:py-3 md:px-4 font-[600] items-center justify-around">
                    <label className="text-sm md:text-xl">
                      Fun World - Adult
                    </label>
                    <label>
                      ₹{" "}
                      {info.visitDate
                        ? ticketPricingFunction("adult", info.visitDate)
                        : "0.00"}
                    </label>
                    <div className="flex items-center gap-2">
                      <span
                        onClick={() => handleNoOfTickets("prev", "adult")}
                        className="md:p-1 border rounded hover:scale-105 transition-all ease-in-out delay-150 hover:bg-gray-300"
                      >
                        <AiOutlineMinus />
                      </span>

                      <span>{info.adult}</span>

                      <span
                        onClick={() => handleNoOfTickets("inc", "adult")}
                        className="md:p-1 border rounded hover:scale-105 transition-all ease-in-out delay-150 hover:bg-gray-300"
                      >
                        <AiOutlinePlus />
                      </span>
                    </div>
                    <label className="md:w-[120px] text-center">
                      ₹{" "}
                      {info.visitDate && info.adult > 0
                        ? ticketPricingFunction("adult", info.visitDate) *
                          info.adult
                        : "0.00"}
                    </label>
                  </div>

                  <div className="flex text-xs md:text-lg bg-[#FFEEF6] p-2 md:py-3 md:px-4 w-[100%] rounded-bl-2xl rounded-br-2xl font-[600] items-center justify-around">
                    <label className="text-sm md:text-xl">
                      Fun World - Senior
                    </label>
                    <label>
                      ₹{" "}
                      {info.visitDate
                        ? ticketPricingFunction("senior", info.visitDate)
                        : "0.00"}
                    </label>
                    <div className="flex items-center gap-2">
                      <span
                        onClick={() => handleNoOfTickets("prev", "senior")}
                        className="md:p-1 border rounded hover:scale-105 transition-all ease-in-out delay-150 hover:bg-gray-300"
                      >
                        <AiOutlineMinus />
                      </span>

                      <span>{info.senior}</span>

                      <span
                        onClick={() => handleNoOfTickets("inc", "senior")}
                        className="md:p-1 border rounded hover:scale-105 transition-all ease-in-out delay-150 hover:bg-gray-300"
                      >
                        <AiOutlinePlus />
                      </span>
                    </div>
                    <label className="md:w-[120px] text-center">
                      ₹{" "}
                      {info.visitDate && info.senior > 0
                        ? ticketPricingFunction("senior", info.visitDate) *
                          info.senior
                        : "0.00"}
                    </label>
                  </div>
                </div>
              </div>

              <div className="mx-auto">
                <div className="w-[60%] lg:w-[80%] h-[1.5px] rounded-full bg-gray-400 mx-auto"></div>
              </div>
            </div>

            {/* Cart section start */}
          </section>

          <div className="md:w-[60vw] w-[80vw] bg-[#0B1A48] rounded-xl mx-auto px-6 md:py-3 py-2 xl:text-[24px] md:text-[21px] text-[18px] font-[600] flex justify-between text-white">
            <span>Estimated Total</span>
            <span>
              ₹{" "}
              {info.child + info.adult + info.senior > 0 && info.visitDate
                ? `${
                    ticketPricingFunction("child", info.visitDate) *
                      info.child +
                    ticketPricingFunction("adult", info.visitDate) *
                      info.adult +
                    ticketPricingFunction("senior", info.visitDate) *
                      info.senior
                  } `
                : "0.00"}
            </span>
          </div>

          <hr className="md:w-[60vw] w-[80vw] mx-auto" />

          <div className="md:w-[60vw] w-[80vw] mx-auto flex flex-col gap-6">
            <h4 className="lg:text-[29px] font-[600] md:text-[24px] text-[#0B1A48] text-[21px]">
              Booking Details
            </h4>

            <div className="flex flex-col gap-6 grow">
              <div className="flex md:flex-row flex-col gap-6 grow">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  value={bookingDetails.name}
                  onChange={handleChange}
                  className=" outline-none text-[#5B5B5B] bg-[#F5F5F5E5] px-6 py-3 text-[550] rounded grow md:w-1/2"
                />
                <input
                  type="number"
                  name="number"
                  placeholder="Mobile Number*"
                  value={bookingDetails.number}
                  onChange={handleChange}
                  className="outline-none number-input text-[#5B5B5B] bg-[#F5F5F5E5] px-6 py-3 text-[550] rounded grow md:w-1/2"
                />
              </div>
              {/* <div className='flex md:flex-row flex-col gap-6 grow'> */}
              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                value={bookingDetails.email}
                onChange={handleChange}
                className="outline-none text-[#5B5B5B] bg-[#F5F5F5E5] px-6 py-3 text-[550] rounded grow"
              />
            </div>
          </div>

          <div className="md:w-[60vw] w-[80vw] mx-auto text-red-700 flex items-center justify-center mb">
            Please add correct information here as it will be used to send you
            the ticket.
          </div>

          <div className="md:w-[60vw] w-[80vw] mx-auto flex items-center justify-center mb-6">
            <span
              onClick={() =>
                handleSummaryclick({
                  info,
                  bookingDetails,
                  setTicketId,
                  setPage,
                })
              }
            >
              <ProceedBtn text={"Order Summary"} />
            </span>
          </div>
        </div>
      ) : page == 2 ? (
        <div className="md:w-[60vw] w-[80vw] mx-auto flex flex-col items-center  gap-4">
          <div className="text-[#0B1A48] text-[29px] font-[650]">
            Order Summary
          </div>

          {discountApplied && (
            <ConfettiExplosion
              duration={2000}
              onComplete={() => {
                setDiscountApplied(false);
              }}
              particleCount={500}
              colors={["#FF9252", "#DB1450", "#FFEEF6", "#BF61FF", "#FFCC00"]}
            />
          )}
          <div className="bg-[#D9D9D93B] w-full min-h-[400px] flex flex-col gap-6 py-8">
            <div className="flex justify-between px-8 lg:text-[25px] md:text-[22px] text-[16px] font-[500] text-[#0B1A48]">
              <span>Name</span>
              <span>{bookingDetails.name}</span>
            </div>

            <div className="flex justify-between px-8 lg:text-[25px] md:text-[22px] text-[16px] font-[500] text-[#0B1A48]">
              <span>Mobile Number</span>
              <span>{bookingDetails.number}</span>
            </div>

            <div className="flex justify-between px-8 lg:text-[25px] md:text-[22px] text-[16px] font-[500] text-[#0B1A48]">
              <span>Visit Date</span>
              <span>
                {info.visitDate} ({findDayOfWeek(info.visitDate)})
              </span>
            </div>

            <div className="px-6">
              <hr />
            </div>

            <div className="mx-auto">
              <table className="md:w-[58vw] w-[77vw]">
                <thead>
                  <tr ref={targetComponent2}>
                    <th className="  text-left  px-4 py-2 w-[30vw]">Product</th>
                    <th className="   px-4 py-2">Quantity</th>
                    <th className="  px-4 py-2">Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#FFEEF6]">
                    <td className="  px-4 py-2">Funworld-Child</td>
                    <td className="  px-4 py-2 text-center">{info.child}</td>
                    <td className="  px-4 py-2 text-center">
                      {ticketPricingFunction("child", info.visitDate) *
                        info.child}
                    </td>
                  </tr>

                  <tr className="bg-white">
                    <td className="  px-4 py-2">Funworld-Adult</td>
                    <td className="  px-4 py-2 text-center">{info.adult}</td>
                    <td className="  px-4 py-2 text-center">
                      {ticketPricingFunction("adult", info.visitDate) *
                        info.adult}
                    </td>
                  </tr>

                  <tr className="bg-[#FFEEF6]">
                    <td className="  px-4 py-2">Funworld-Senior</td>
                    <td className="  px-4 py-2 text-center">{info.senior}</td>
                    <td className="  px-4 py-2 text-center">
                      {ticketPricingFunction("senior", info.visitDate) *
                        info.senior}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {discountPrice > 0 && (
              <div className="w-[80%] md:text-[16px] text-[12px] m-auto text-center flex items-center justify-center">
                Coupon code applied sucessfully{" "}
                <span
                  onClick={handleRemoveDiscountClick}
                  className="text-xl ml-4 flex items-center gap-1 hover:scale-105 transition-all delay-100 text-[#FF0000]"
                >
                  Remove{" "}
                  <span>
                    <RxCross2 color="red" />
                  </span>
                </span>
              </div>
            )}

            {discountPrice > 0 ? (
              <>
                <span className="bg-[#A0C54E] w-[80%] rounded-xl mx-auto px-6 md:py-3 py-2 xl:text-[24px] md:text-[21px] text-[16px] font-[600] flex justify-between text-white">
                  <span>Amount Saved</span>
                  <span>₹ {discountPrice}</span>
                </span>
              </>
            ) : coupon ? (
              <>
                <span className="bg-[#A0C54E] w-[80%] rounded-xl mx-auto px-6 md:py-3 py-2 xl:text-[24px] md:text-[21px] text-[16px] font-[600] flex justify-between text-white">
                  <span>Amount Saved</span>
                  <span>₹ 0</span>
                </span>
              </>
            ) : null}

            <div>
              <div className="bg-[#0B1A48] w-[80%] rounded-xl mx-auto px-6 md:py-3 py-2 xl:text-[24px] md:text-[21px] text-[16px] font-[600] flex justify-between text-white">
                <span>Estimated Total</span>
                <span>
                  ₹{" "}
                  {info.child + info.adult + info.senior > 0 && info.visitDate
                    ? `${checkoutPriceAfterDiscount} `
                    : "0.00"}
                  {/* ₹  {(info.child + info.adult + info.senior > 0) && info.visitDate
                        ? `${(ticketPricingFunction("child", info.visitDate) * info.child) + (ticketPricingFunction("adult", info.visitDate) * info.adult) + (ticketPricingFunction("senior", info.visitDate) * info.senior)} `
                        : "0.00"} */}
                </span>
              </div>
            </div>

            <div className="px-6">
              <hr />
            </div>

            <div className="flex flex-col gap-4 items-center justify-center">
              <p className="text-[#0B1A48] text-[21px] font-[600] ">
                Apply Coupon Code
              </p>
            </div>

            <div className="flex items-center justify-center px-8 mt-6">
              <input
                placeholder="Enter Coupon code"
                className="py-4 px-4 couponInput outline-none lg:w-[70%] w-full"
                onChange={(e) => {
                  setCoupon(e.target.value);
                }}
                value={coupon}
              ></input>
              <button
                className="couponButton text-white p-4 flex gap-2"
                onClick={(e) => {
                  checkCouponAndAddingDiscount({
                    coupon,
                    checkoutPrice,
                    setDiscountPrice,
                    setCheckoutPriceAfterDiscount,
                    setDiscountApplied,
                  });
                }}
              >
                <span className="hidden md:inline">Apply</span>{" "}
                <span>
                  <BsArrowRightCircleFill size={24} />
                </span>
              </button>
            </div>
          </div>

          <div className="text-red-700">
            Please verify all the above details before proceeding to payment
          </div>
          <div className="md:w-[60vw] w-[80vw] mx-auto flex md:flex-row flex-col-reverse gap-8 items-center justify-center mb-6">
            <span onClick={() => setPage(1)}>
              <ProceedBtn text={"Update Tickets"} />
            </span>

            <span
              onClick={() =>
                RazorpayCheckout({
                  discountPrice,
                  coupon,
                  checkoutPriceAfterDiscount,
                  ticketId,
                  bookingDetails,
                  setCoupon,
                  info,
                })
              }
            >
              <ProceedBtn text={"Proceed to Payment"} />
            </span>
          </div>
        </div>
      ) : (
        <div className="relative h-[30vh]">
          <div className="absolute top-[50%] md:left-[45%] left-[30%]">
            <ClipLoader color="green" loading={page == 3} size={150} />
          </div>
        </div>
      )}
      <Banner />
      <TermsAndConditionsForTickets />
    </div>
  );
};

export default TicketsPage;

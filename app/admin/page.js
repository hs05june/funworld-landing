"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import ClipLoader from "react-spinners/ClipLoader";

const Admin = () => {
  const router = useRouter();
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [search, setSearch] = useState("");
  const [soldTicketsArray, setSoldTicketsArray] = useState();
  const [loading, setLoading] = useState(true);
  const [soldTicketsCategories, setSoldTicketsCategories] = useState({
    child: 0,
    adult: 0,
    senior: 0,
  });
  const [generalSoldTicketsArray, setGeneralsoldTicketArray] = useState([]);
  const [couponsDistribution, setCouponsDistribution] = useState({
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
  });

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      let currentDate = new Date();
      const accessToken = window.localStorage.getItem("fwAccessToken");
      config.headers["authorization"] = "Bearer " + accessToken;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    let accessToken = window.localStorage.getItem("fwAccessToken");
    const fetchSoldTickets = async () => {
      try {
        const res = await axiosJWT.get(
          "https://www.funworldbackend.tech/api/soldtickets/all"
        );
        let arr = res.data.sort((a, b) =>
          b.tickets[0].visitDate.localeCompare(a.tickets[0].visitDate)
        );
        setGeneralsoldTicketArray(arr);
        const filteredArray = arr.filter(
          (item) => item.tickets[0].visitDate === formattedCurrentDate
        );
        setSoldTicketsArray(filteredArray);
        setLoading(false);
      } catch (e) {
        window.alert("Err in fetching sold tickets");
        setLoading(false);
        router.replace("/adminlogin");
      }
    };

    if (!accessToken) {
      router.replace("/adminlogin");
    } else {
      fetchSoldTickets();
    }
  }, []);

  useEffect(() => {
    let child = 0,
      adult = 0,
      senior = 0;
    let a = 0,
      b = 0,
      c = 0,
      d = 0,
      e = 0,
      f = 0;
    soldTicketsArray?.forEach((e) => {
      child += e?.tickets[0]?.child;
      adult += e?.tickets[0]?.adult;
      senior += e?.tickets[0]?.senior;

      if (e?.coupon_used == "10SUMMEROFF") {
        a++;
      } else if (e?.coupon_used == "20GOVTOFF") {
        b++;
      } else if (e?.coupon_used == "30STUDENTOFF") {
        c++;
      } else if (e?.coupon_used == "FUN5") {
        d++;
      } else if (e?.coupon_used == "WONDERWOMEN") {
        e++;
      } else {
        f++;
      }
    });
    // console.log(a, b, c, d, e, f);
    setCouponsDistribution({ a, b, c, d, e, f });
    setSoldTicketsCategories({ child, adult, senior });
  }, [soldTicketsArray]);

  const handleDelete = async (id, index) => {
    let ask = window.confirm("Do you want to delete?");
    if (!ask) return;
    try {
      let token = window.localStorage.getItem("funworldLogin");
      const res = await axiosJWT.delete(
        `https://www.funworldbackend.tech/api/soldtickets?id=${id}`
      );
      console.log(res);
      let tempArray = [...soldTicketsArray];
      tempArray.splice(index, 1);
      setSoldTicketsArray(tempArray);
      let genTempArray = [];
      for (let i = 0; i < generalSoldTicketsArray.length; i++) {
        if (generalSoldTicketsArray[i]._id == id) continue;
        genTempArray.push(generalSoldTicketsArray[i]);
      }
      setGeneralsoldTicketArray(genTempArray);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheckedInChange = async (index, soldTicketId, ticketId) => {
    if (!window.confirm("Do you want to change checked-in status?")) return;

    const updatedSoldTicketsArray = [...soldTicketsArray]; // Create a copy of the array
    const ticketToUpdate = updatedSoldTicketsArray[index].tickets[0];
    ticketToUpdate.checkedIn = !ticketToUpdate.checkedIn;

    const updatedGeneralSoldTicketsArray = [...generalSoldTicketsArray]; // Create a copy of the array
    for (let i = 0; i < updatedGeneralSoldTicketsArray.length; i++) {
      if (updatedGeneralSoldTicketsArray._id == soldTicketId) {
        const generalTicketToUpdate =
          updatedGeneralSoldTicketsArray[i].tickets[0];
        generalTicketToUpdate.checkedIn = !generalTicketToUpdate.checkedIn;
      }
    }

    try {
      const res = await axiosJWT.put(
        `https://www.funworldbackend.tech/api/soldtickets?id=${soldTicketId}`,
        { tickets: updatedSoldTicketsArray[index].tickets }
      );

      // Assuming the API call was successful, update the state with the updated array
      setSoldTicketsArray(updatedSoldTicketsArray);
      setGeneralsoldTicketArray(updatedGeneralSoldTicketsArray);
      // console.log(res.data, ticketToUpdate);
    } catch (error) {
      console.error("Error updating checked-in status:", error);
    }
  };

  function findDayOfWeek(givenDate) {
    const dateObj = new Date(givenDate);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayOfWeek = days[dateObj.getDay()];
    return dayOfWeek;
  }

  //getting the formated today and tomorrow's date:

  const currentDate = new Date();
  const nextDay = new Date(currentDate);
  nextDay.setDate(currentDate.getDate() + 1);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const formattedCurrentDate = formatDate(currentDate);
  const formattedNextDay = formatDate(nextDay);

  //selecting different buttons from today, tomorrow , ...

  const [selectedButton, setSelectedButton] = useState("Today");

  const handleButtonClick = (btn) => {
    setSelectedButton(btn);
    if (btn === "Today") {
      // console.log(formattedCurrentDate, generalSoldTicketsArray[0].tickets[0].visitDate)
      const filteredArray = generalSoldTicketsArray.filter(
        (item) => item.tickets[0].visitDate === formattedCurrentDate
      );
      setSoldTicketsArray(filteredArray);
    } else if (btn === "Tomorrow") {
      const filteredArray = generalSoldTicketsArray.filter(
        (item) => item.tickets[0].visitDate === formattedNextDay
      );
      setSoldTicketsArray(filteredArray);
    } else {
      setSoldTicketsArray(generalSoldTicketsArray);
    }
  };

  const handleLogout = () => {
    window.localStorage.removeItem("fwAccessToken");
    router.replace("/adminlogin");
  };

  return (
    <>
      {loading ? (
        <>
          <div
            style={{
              position: "absolute",
              backgroundColor: "white",
              zIndex: "100",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ClipLoader color="lightblue" loading={loading} size={130} />
          </div>
        </>
      ) : (
        <>
          <div className="p-4">
            {selectedButton === "Today" ? (
              <>
                <div className="flex items-center justify-center gap-4 my-8">
                  <div className="flex items-center justify-center px-2">
                    10SUMMEROFF :{" "}
                    <span className="font-bold">{couponsDistribution?.a}</span>
                  </div>
                  <div className="flex items-center justify-center px-2">
                    20GOVTOFF :
                    <span className="font-bold">{couponsDistribution?.b}</span>
                  </div>
                  <div className="flex items-center justify-center px-2">
                    30STUDENTOFF :
                    <span className="font-bold">{couponsDistribution?.c}</span>
                  </div>
                  <div className="flex items-center justify-center px-2">
                    FUN5 :
                    <span className="font-bold">{couponsDistribution?.d}</span>
                  </div>
                  <div className="flex items-center justify-center px-2">
                    WONDERWOMEN :{" "}
                    <span className="font-bold">{couponsDistribution?.e}</span>
                  </div>
                  <div className="flex items-center justify-center px-2">
                    NO COUPON :
                    <span className="font-bold">{couponsDistribution?.f}</span>
                  </div>
                  <div
                    onClick={handleLogout}
                    className="flex items-center text-2xl cursor-pointer hover:scale-105  justify-center px-2 border "
                  >
                    Logout
                  </div>
                </div>
              </>
            ) : (
              <div className="mt-16"></div>
            )}

            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-8">
                <div>
                  <select
                    className="border px-4 py-2 text-xl rounded"
                    value={selectedButton}
                    onChange={(e) => handleButtonClick(e.target.value)}
                  >
                    <option value="Today">Today</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="General">General</option>
                  </select>
                </div>

                <div className="flex items-center">
                  <input
                    type="text"
                    className="p-2 border border-gray-300 rounded-md"
                    placeholder="Search tickets..."
                    value={search}
                    onInput={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                </div>

                {selectedButton == "Today" ? (
                  <>
                    <div>
                      {selectedButton}'s Bookings : {soldTicketsArray?.length}
                    </div>
                    <div>Children : {soldTicketsCategories?.child}</div>
                    <div>Adults : {soldTicketsCategories?.adult}</div>
                    <div>Seniors : {soldTicketsCategories?.senior}</div>
                    <div className="lg:w-[800px] md:min-w-[200px] flex">
                      <Link
                        href="/insights"
                        className="px-6 py-3 rounded border hover:scale-105 text-xl transition-all delay-150 text-white font-[500] bg-orange-400"
                      >
                        Queries / Holidays
                      </Link>
                    </div>
                  </>
                ) : null}
              </div>

              <div>
                {/* <h2 className="text-xl font-semibold mb-2">Revenue Last Week</h2>
                                <p className="text-lg">${revenueLastWeek}</p> */}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Tickets</h2>
              <table className="w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 border border-gray-300">ID</th>
                    <th className="p-2 border border-gray-300">ticket</th>
                    <th className="p-2 border border-gray-300">payment</th>
                    <th className="p-2 border border-gray-300">coupon</th>
                    <th className="p-2 border border-gray-300">Visit Date </th>
                    <th className="p-2 border border-gray-300">Tickets</th>
                    <th className="p-2 border border-gray-300">Checked In?</th>
                    {/* <th className="p-2 border border-gray-300">Date</th> */}
                  </tr>
                </thead>
                <tbody>
                  {soldTicketsArray &&
                    soldTicketsArray.map(
                      (ticket, index) =>
                        (ticket._id
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                          ticket.name
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                          ticket.coupon_used
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                          ticket.email
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                          ticket.number
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                          ticket.tickets[0].visitDate
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                          findDayOfWeek(ticket.tickets[0].visitDate)
                            .toLowerCase()
                            .includes(search.toLowerCase())) && (
                          <tr key={index}>
                            <td className="p-1 px-5 border border-gray-300 text-center ">
                              <div className="flex flex-row space-x-6 items-center">
                                <div
                                  className="cursor-pointer"
                                  onClick={async () => {
                                    await handleDelete(ticket._id, index);
                                  }}
                                >
                                  <Image
                                    src={
                                      "https://funworldblr.s3.amazonaws.com/public/delete.jpg"
                                    }
                                    width={30}
                                    height={30}
                                  ></Image>
                                </div>
                                <span className="text-center">
                                  {ticket._id}
                                </span>
                              </div>
                            </td>
                            <td className="p-2 border border-gray-300">
                              {ticket.name}
                              <br /> {ticket.email}
                              <br /> {ticket.number}
                            </td>
                            <td className="p-2 border border-gray-300 text-center">
                              {ticket.payment ? ticket.price : "Not Paid"}
                            </td>
                            <td className="p-2 border border-gray-300 text-center">
                              {ticket.coupon_used}
                            </td>
                            <td className="p-2 border border-gray-300">
                              {ticket.tickets.map((tik, ind) => (
                                <span
                                  key={ind}
                                  className="flex items-center justify-center"
                                >
                                  {tik.visitDate} <br />{" "}
                                  {findDayOfWeek(tik.visitDate)}
                                </span>
                              ))}
                            </td>
                            <td className="p-2 border border-gray-300 text-center">
                              <span>Child: {ticket.tickets[0].child}</span>{" "}
                              <br />
                              <span>Adult: {ticket.tickets[0].adult}</span>{" "}
                              <br />
                              <span>Senior: {ticket.tickets[0].senior}</span>
                            </td>
                            <td className="p-2 border border-gray-300 text-center">
                              <span
                                className={` font-semibold ${
                                  ticket.tickets[0].checkedIn === true
                                    ? "text-green-600"
                                    : "text-red-600"
                                }`}
                              >
                                {ticket.payment && (
                                  <span>
                                    {ticket.tickets[0].checkedIn === true
                                      ? "yes"
                                      : "no"}
                                  </span>
                                )}
                              </span>

                              {ticket.payment && (
                                <button
                                  onClick={() =>
                                    handleCheckedInChange(
                                      index,
                                      ticket._id,
                                      ticket.tickets[0]._id
                                    )
                                  }
                                  className={`px-2 py-1  text-white font-[600] ml-4 rounded hover:scale-105 transition-all delay-150 
                                  ${
                                    ticket.tickets[0].checkedIn === true
                                      ? "bg-green-600"
                                      : "bg-red-600"
                                  }`}
                                >
                                  Change
                                </button>
                              )}
                            </td>
                            {/* <td className="p-2 border border-gray-300">date</td> */}
                          </tr>
                        )
                    )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Admin;

"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import Image from "next/image";
import Link from "next/link";
import * as XLSX from 'xlsx';


const Insights = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [search, setSearch] = useState("");
  const [soldTicketsArray, setSoldTicketsArray] = useState();
  const [soldTicketsCategories, setSoldTicketsCategories] = useState({child:0, adult:0, senior:0});
  const [generalSoldTicketsArray, setGeneralsoldTicketArray] = useState([]);
  const [revenue,setRevenue] = useState(0);

  const [couponsDistribution, setCouponsDistribution] = useState({a:0,b:0,c:0,d:0,e:0,f:0});

  const[adultsDistribution, setAdultsDistribution] = useState({ten:0, twenty: 0, thirty:0, fun : 0, ww : 0, none:0});
  const[childDstribution, setChildDistribution] = useState({ten:0, twenty: 0, thirty:0, fun : 0, ww : 0, none : 0});
  const[seniorDistribution, setSeniorDistribution] = useState({ten:0, twenty: 0, thirty:0, fun : 0, ww : 0 , none : 0});

  useEffect(() => {
    let token = window.localStorage.getItem("funworldLogin");
    if (token) {
      const token1 = JSON.parse(token);
      let { email, password } = jwt.decode(token1);
      if (email && password) {
        axios
          .post("https://api2.fwblr.apistack.net/api/auth/admin", {
            email: email,
            password: password,
          })
          .then((res) => {
            if (res.data.admin) {
              setIsAdminLoggedIn(true);
            }
          });
      }
      setIsAdminLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const fetchSoldTickets = async () => {
      if (isAdminLoggedIn) {
        let token = window.localStorage.getItem("funworldLogin");
        try {
          const res = await axios.get(
            "https://api2.fwblr.apistack.net/api/soldtickets"
          );
          // console.log(res.data);
          // setSoldTicketsArray(res.data);
          let arr = res.data.sort((a, b) =>
            b.tickets[0].visitDate.localeCompare(a.tickets[0].visitDate)
          );
          setGeneralsoldTicketArray(arr);
          // console.log(arr)
          const filteredArray = arr.filter(
            (item) => item.tickets[0].visitDate === formattedCurrentDate
          );
          setSoldTicketsArray(filteredArray);
        } catch (e) {
          window.alert("Err in fetching sold tickets");
        }
      }
    };
    fetchSoldTickets();
  }, [isAdminLoggedIn]);

  useEffect(()=>{
    let child = 0, adult = 0, senior = 0;
    let a = 0, b= 0,c= 0,d= 0,e= 0,f= 0;


    let tenA =0, twentyA = 0, thirtyA =0, funA = 0, wwA = 0, nA = 0;
    let tenC =0, twentyC = 0, thirtyC =0, funC = 0, wwC = 0, nC = 0;
    let tenS =0, twentyS = 0, thirtyS =0, funS = 0, wwS= 0, nS = 0;
  
    soldTicketsArray?.forEach(e=>{
      child += e?.tickets[0]?.child;
      adult += e?.tickets[0]?.adult;
      senior += e?.tickets[0]?.senior;

      if(e?.coupon_used == '10SUMMEROFF'){
        a++;
        tenC += e?.tickets[0]?.child;
        tenA += e?.tickets[0]?.adult;
        tenS += e?.tickets[0]?.senior;
  
      }
      else if(e?.coupon_used == "20GOVTOFF"){
        b++;
        twentyC+= e?.tickets[0]?.child;
        twentyA += e?.tickets[0]?.adult;
        twentyS += e?.tickets[0]?.senior;
      }
      else if(e?.coupon_used == "30STUDENTOFF"){
        c++;
        
        thirtyC += e?.tickets[0]?.child;
        thirtyA += e?.tickets[0]?.adult;
        thirtyS += e?.tickets[0]?.senior;
      }
      else if(e?.coupon_used == "FUN5"){
        d++;
        funC += e?.tickets[0]?.child;
        funA += e?.tickets[0]?.adult;
        funS += e?.tickets[0]?.senior;

      }
      else if(e?.coupon_used== "WONDERWOMEN"){
        e++;
        wwC+= e?.tickets[0]?.child;
        wwA += e?.tickets[0]?.adult;
        wwS += e?.tickets[0]?.senior;
      }
      else{
        f++;
        nC+= e?.tickets[0]?.child;
        nA += e?.tickets[0]?.adult;
        nS += e?.tickets[0]?.senior;
      }
    })
    console.log(tenA,funA);
    setAdultsDistribution({
      ten: tenA,
      twenty: twentyA,
      thirty: thirtyA,
      fun: funA,
      ww: wwA,
      none: nA
    });
        setChildDistribution({
          ten: tenC,
          twenty: twentyC,
          thirty: thirtyC,
          fun: funC,
          ww: wwC,
          none: nC
        });

        setSeniorDistribution({
          ten: tenS,
          twenty: twentyS,
          thirty: thirtyS,
          fun: funS,
          ww: wwS,
          none: nS
        });
        
    setCouponsDistribution({a,b,c,d,e,f})
    setSoldTicketsCategories({child,adult,senior});
  },[soldTicketsArray])

  const revenueLastWeek = 200000;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    verifyCredentials(email, password);
  };

  const handleDelete = async (id, index) => {
    let ask = window.confirm("Do you want to delete?");
    if (!ask) return;
    try {
      let token = window.localStorage.getItem("funworldLogin");
      const res = await axios.delete(
        `https://api2.fwblr.apistack.net/api/soldtickets?id=${id}`,
        { headers: { token: token } }
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

  const verifyCredentials = async (email, password) => {
    try {
      const res = await axios.post(
        "https://api2.fwblr.apistack.net/api/auth/admin",
        {
          email: email,
          password: password,
        }
      );
      if (res.data.admin) {
        setIsAdminLoggedIn(true);
        let token = jwt.sign({ email: email, password: password }, "FUNWORLD");
        window.localStorage.setItem("funworldLogin", JSON.stringify(token));
      }
    } catch (e) {
      // console.log(e);
      window.alert(e);
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
      let token = window.localStorage.getItem("funworldLogin");
      const res = await axios.put(
        `https://api2.fwblr.apistack.net/api/soldtickets?id=${soldTicketId}`,
        { tickets: updatedSoldTicketsArray[index].tickets },
        { headers: { token: token } }
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


  const calculateTodaysRevenue = ()=>{
    let rev = 0;
    soldTicketsArray.forEach((ticket)=>{
      rev += ticket.price;
    })
    setRevenue(rev);


  }



   useEffect(()=>{
    if(soldTicketsArray){
      calculateTodaysRevenue();
    } 

   },[soldTicketsArray])


   


  const exportToExcel = () => {
    const data = [
      { coupon: "10SUMMEROFF",adult:  adultsDistribution.ten, child:childDstribution.ten, senior: seniorDistribution.ten },
      { coupon: "20GOVTOFF", adult: adultsDistribution.twenty, child: childDstribution.twenty, senior: seniorDistribution.twenty },
      { coupon: "30STUDENTOFF", adult: adultsDistribution.thirty, child: childDstribution.thirty, senior: seniorDistribution.thirty },
      { coupon: "FUN5", adult: adultsDistribution.fun, child: childDstribution.fun, senior: seniorDistribution.fun},
      { coupon: "WONDERWOMEN", adult:adultsDistribution.ww, child: childDstribution.ww, senior: seniorDistribution.ww},
      { coupon: "No Coupon", adult: adultsDistribution.none, child: childDstribution.none, senior: seniorDistribution.none},
      { coupon: "Grand Total", adult: soldTicketsCategories.adult, child: soldTicketsCategories.child, senior: soldTicketsCategories.senior},
    ];
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "data.xlsx");
  };






  

  return (
    <>
    {isAdminLoggedIn ? (
      <>
        <div className="min-h-10vh flex ">
          <div className="p-8 w-full flex-[3]">
          <div className="flex items-center justify-center gap-4 my-8">
            {/* <h1 className="text-3xl font-semibold mb-4">Admin Panel</h1> */}
            <div className="flex items-center justify-center px-2">
              10SUMMEROFF : <span className="font-bold">{couponsDistribution?.a}</span>
            </div>
            <div className="flex items-center justify-center px-2">
              20GOVTOFF :<span className="font-bold">{couponsDistribution?.b}</span>
            </div>
            <div className="flex items-center justify-center px-2">
              30STUDENTOFF :<span className="font-bold">{couponsDistribution?.c}</span>
            </div>
            <div className="flex items-center justify-center px-2">
              FUN5 :<span className="font-bold">{couponsDistribution?.d}</span>
            </div>
            <div className="flex items-center justify-center px-2">
              WONDERWOMEN : <span className="font-bold">{couponsDistribution?.e}</span>
            </div>
            <div className="flex items-center justify-center px-2">
              NO COUPON :<span className="font-bold">{couponsDistribution?.f}</span>
            </div>
          </div>
    
          </div>
           
          {/* <div className="flex-1 pt-8 px-4">
            <div className="text-xl font-[500] mb-4">Holidays</div>
            <form
              // onSubmit={handleAddHoliday}
              type="submit"
              className="flex gap-4"
            >
              <input
                required
                // value={holiday}
                onChange={(e) => setHoliday(e.target.value)}
                type="date"
                min={currentDate}
              ></input>
              <button type="submit" className="px-3 py-2 rounded border ">
                Add
              </button>
            </form>
    
            <div className="mt-6 flex flex-col gap-4">
              {allHolidays &&
                allHolidays.map((day) => (
                  <div className="flex gap-4 items-center" key={day._id}>
                    <span>{day.holidayDate}</span>
                    <span>{findDayOfWeek(day.holidayDate)}</span>
                    <button
                      className="px-2 py-2 rounded-sm border"
                      onClick={() => handleRemoveHoliday(day._id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
            </div>
          </div> */}
        </div>


        <div>
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

               <div>
                 {selectedButton}'s Bookings :  {soldTicketsArray?.length} 
               </div>
               <div>
                 Children :  {soldTicketsCategories?.child} 
               </div>
               <div>
                
                 Adults :  {soldTicketsCategories?.adult} 
               </div>
               <div>
                 Seniors :  {soldTicketsCategories?.senior} 
               </div>
                {/* <div className="lg:w-[800px] md:min-w-[200px] flex">
                  <Link
                    href="/contactformpage"
                    className="px-6 py-3 rounded border hover:scale-105 text-xl transition-all delay-150 text-white font-[500] bg-orange-400"
                  >
                    Queries / Holidays
                  </Link>
                </div> */}
              </div>  
            </div>
        </div>

        <br/>
        <br/>
        <br/>

       <div className="flex flex-col gap-4 items-center justify-center">
       <table className="w-[80vw] border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 border border-gray-300">coupons Used</th>
                    <th className="p-2 border border-gray-300">Adult</th>
                    <th className="p-2 border border-gray-300">Child</th>
                    <th className="p-2 border border-gray-300">Senior</th>
                    
                  </tr>
                </thead>


                <tr className="border-b border-red-500 text-center border-solid">
                  <td className="border-r border-red-500 border-solid">10SUMMEROFF </td>
                  <td className="border-r border-red-500 border-solid">{adultsDistribution?.ten} </td>
                  <td className="border-r border-red-500 border-solid">{childDstribution?.ten} </td>
                  <td>{seniorDistribution?.ten} </td>
                </tr>
                <tr className="border-b border-red-500 text-center border-solid">
                  <td className="border-r border-red-500 border-solid">20GOVTOFF </td>
                  <td className="border-r border-red-500 border-solid">{adultsDistribution?.twenty} </td>
                  <td className="border-r border-red-500 border-solid">{childDstribution?.twenty} </td>
                  <td>{seniorDistribution?.twenty} </td>
                </tr>
                <tr className="border-b border-red-500 text-center border-solid">
                  <td className="border-r border-red-500 border-solid">30STUDENTOFF </td>
                  <td className="border-r border-red-500 border-solid">{adultsDistribution?.thirty} </td>
                  <td className="border-r border-red-500 border-solid">{childDstribution?.thirty} </td>
                  <td>{seniorDistribution?.thirty} </td>
                </tr>
                <tr className="border-b border-red-500 text-center border-solid">
                  <td className="border-r border-red-500 border-solid">FUN5 </td>
                  <td className="border-r border-red-500 border-solid">{adultsDistribution?.fun}</td>
                  <td className="border-r border-red-500 border-solid">{childDstribution?.fun} </td>
                  <td>{seniorDistribution?.fun} </td>
                </tr>
                <tr className="border-b border-red-500 text-center border-solid">
                  <td className="border-r border-red-500 border-solid">WONDERWOMEN </td>
                  <td className="border-r border-red-500 border-solid">{adultsDistribution?.ww} </td>
                  <td className="border-r border-red-500 border-solid">{childDstribution?.ww}  </td>
                  <td>{seniorDistribution?.ww}  </td>
                </tr>
                <tr className="border-b border-red-500 text-center border-solid">
                  <td className="border-r border-red-500 border-solid">No Coupon </td>
                  <td className="border-r border-red-500 border-solid">{adultsDistribution?.none} </td>
                  <td className="border-r border-red-500 border-solid">{childDstribution?.none}  </td>
                  <td>{seniorDistribution?.none}  </td>
                </tr>
                <tr className="border-b border-red-500 text-center border-solid">
                  <td className="border-r border-red-500 border-solid font-bold">Grand Total </td>
                  <td className="border-r border-red-500 border-solid">{soldTicketsCategories?.adult} </td>
                  <td className="border-r border-red-500 border-solid">  {soldTicketsCategories?.child}  </td>
                  <td>  {soldTicketsCategories?.senior}   </td>
                </tr>

        </table>


        <div>
        <button className="px-4 py-2 text-white font-[500] bg-green-400 rounded-lg" onClick={exportToExcel}>Export to Excel</button> 
        </div>


    
       </div>

       
      
      </>
    ) : (
      <>
        <div className="min-h-[70vh] flex items-center justify-center  px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full">
            <p className="text-center mb-8 font-bold text-2xl">Admin Login</p>
            <form className="flex flex-col gap-4" onSubmit={handleLogin}>
              <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-4">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none rounded-none relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-b-md focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 sidebox-css"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    )}
    </>
  );
};

export default Insights;









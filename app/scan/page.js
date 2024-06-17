"use client";
import axios from "axios";
import jwt from "jsonwebtoken";
import { useEffect, useState } from "react";
import { AiOutlineCamera, AiOutlineClose } from "react-icons/ai";
import { QrReader } from "react-qr-reader";
import { useRouter } from "next/navigation";

const Scan = () => {
  const router = useRouter();
  const [data, setData] = useState("No result");
  const [isCameraOpen, setCameraOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  useEffect(() => {
    let accessToken = window.localStorage.getItem("fwAccessToken");
    if (!accessToken) {
      router.replace("/adminlogin");
    }
  }, []);

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

  const handleCameraClick = () => {
    setCameraOpen(true);
  };

  const handleScanResult = async (result, error) => {
    if (!!result) {
      setData(result?.text);
      let qrcode = result?.text;
      let soldTicketId = qrcode.split(" ")[0];
      console.log(soldTicketId);
      let res = await axios.get(
        `https://www.funworldbackend.tech/api/soldtickets?id=${soldTicketId}`
      );

      if (!res.data.status) {
        alert("No such Ticket");
        return;
      }
      let tickets = res.data.message.tickets;

      for (let i = 0; i < tickets.length; i++) {
        // if (tickets[i]._id == ticketId) {
        if (tickets[i].checkedIn) {
          alert("Already checked in");
          return;
        }
        let check = confirm(
          `Child: ${tickets[i].child} Adult: ${tickets[i].adult} Senior: ${tickets[i].senior}`
        );
        if (check) {
          tickets[i].checkedIn = true;
          res = await axiosJWT.put(
            `https://www.funworldbackend.tech/api/soldtickets?id=${soldTicketId}`,
            { tickets: tickets }
          );
        }
        return;
        // }
      }
      alert("No such Ticket");
      return;
    }

    if (!!error) {
      // console.log(error);
    }
  };

  const handleCameraClose = () => {
    setCameraOpen(false);
  };

  return (
    <>
      <>
        <div className="min-h-[70vh] flex flex-col items-center justify-center">
          {!isCameraOpen ? (
            <div
              className="border-2 border-blue-950 border-dashed hover:scale-105 transition-all ease-linear delay-150 p-2"
              onClick={handleCameraClick}
            >
              <AiOutlineCamera size={45} />
              <p>{data}</p>
            </div>
          ) : (
            <div className="lg:w-[60%] width-[85%]">
              <div className="flex gap-4 items-center p-2 mt-4">
                <h2 className="text-lg font-semibold">QR Code Scanner</h2>
                <button onClick={handleCameraClose}>
                  <AiOutlineClose size={24} />
                </button>
              </div>
              <QrReader
                onResult={handleScanResult}
                style={{ width: "100%" }}
                constraints={{ facingMode: "environment" }}
              />
              <p>{data}</p>
            </div>
          )}
        </div>
      </>
    </>
  );
};

export default Scan;

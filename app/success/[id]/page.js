"use client";
import TicketPage from "@/components/Repeating/TicketPage";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const Success = ({ params }) => {
  const [ticket, setTicket] = useState({});
  useEffect(() => {
    axios
      .get(`https://api2.fwblr.apistack.net/api/soldtickets?id=${params.id}`)
      .then((res) => {
        setTicket(res.data.message);
        console.log(res.data.message);
        // console.log(res.data.message);
        // window.localStorage.setItem("cart", JSON.stringify([]));
        // console.log(res.data.message)
      })
      .catch((err) => {
        // console.log(err)
      });
  }, []);
  return (
    <div>
      <div className="flex flex-col space-y-3 my-10">
        {ticket && ticket.payment === false ? (
          <div className="flex flex-col gap-4 text-center px-8 py-4 items-center min-h-[50vh]">
            <div className="">
              Sorry, There was some error in fetching the ticket, maybe the
              payment failed or some other error occured, If you paid the money,
              stay rest assured, our team will be there to help you while checking in, else if
              payment didn't went through,Please rebook the ticket by going to:{" "}

            </div>
            <Link
              className="px-4 py-2 rounded-lg bg-orange-600 w-[150px] text-white"
              href="/tickets"
            >
              Ticket's Page
            </Link>

            <div>
              In case if the ticket was booked, you will receive the mail for
              it. In case of any problem please mail to : info@funworldblr.com
            </div>
          </div>
        ) : (
          ticket.tickets &&
          ticket.tickets.map((t, ind) => {
            return (
              <>
                <TicketPage
                  key={ind}
                  id={params.id}
                  child={t.child}
                  adult={t.adult}
                  senior={t.senior}
                  date={t.visitDate}
                  name={ticket.name}
                  number={ticket.number}
                  email={ticket.email}
                  price={ticket.price}
                  discount={ticket.discount}
                  coupon_used={ticket.coupon_used}
                />
                <hr />
              </>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Success;

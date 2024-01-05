import React from "react";

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

export const ticketPricingFunction = (type, visitDate) => {
  const isAdult = type === "adult";
  // console.log(visitDate, typeof(visitDate))
  // ${year}-${month}-${day}
  const otherWeekendDates = [
    "2024-01-01",
    "2024-01-15",
    "2024-01-26",
    "2024-03-08",
    "2024-03-29",
    "2024-04-09",
    "2024-04-11",
    "2024-05-01",
    "2024-05-10",
    "2024-06-18",
    "2024-07-17",
    "2024-08-15",
    "2024-09-16",
    "2024-10-02",
    "2024-10-11",
    "2024-10-17",
    "2024-10-31",
    "2024-11-01",
    "2024-11-18",
    "2024-12-25",
  ];

  let isWeekend =
    findDayOfWeek(visitDate) === "Saturday" ||
    findDayOfWeek(visitDate) === "Sunday";

  for (let i = 0; i < otherWeekendDates.length; i++) {
    if (visitDate == otherWeekendDates[i]) {
      isWeekend = true;
    }
  }

  let price = 999; // Default price for non-adult and non-weekend tickets.

  if (isAdult) {
    if (isWeekend) {
      price = 1499;
    } else {
      price = 1199;
    }
  }
  //  else {
  //     if (isWeekend) {
  //         price = 1199;
  //     }
  // }

  return price;
};

function TicketPricing({ type, visitDate }) {
  const isAdult = type === "adult";
  const isWeekend =
    findDayOfWeek(visitDate) === "Saturday" ||
    findDayOfWeek(visitDate) === "Sunday";

  let price = 999; // Default price for non-adult and non-weekend tickets.

  if (isAdult) {
    if (isWeekend) {
      price = 1499;
    } else {
      price = 1199;
    }
  }
  // else {
  //     if (isWeekend) {
  //         price = 1199;
  //     }
  // }

  return <span>{price}</span>;
}

export default TicketPricing;

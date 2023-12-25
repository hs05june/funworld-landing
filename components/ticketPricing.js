import React from 'react';

function findDayOfWeek(givenDate) {
    const dateObj = new Date(givenDate);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = days[dateObj.getDay()];
    return dayOfWeek;
}


export const ticketPricingFunction = (type, visitDate) => {
    const isAdult = type === "adult";
    // console.log(visitDate, typeof(visitDate))
    // ${year}-${month}-${day}
    const otherWeekendDates = ['2023-09-18','2023-09-28','2023-10-02','2023-10-23','2023-10-24','2023-11-01','2023-11-14','2023-11-30','2023-12-25', '2024-01-01']

    let isWeekend = findDayOfWeek(visitDate) === "Saturday" || findDayOfWeek(visitDate) === "Sunday";

    for(let i = 0; i < otherWeekendDates.length; i++){
        if(visitDate == otherWeekendDates[i]){isWeekend = true}
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
    const isWeekend = findDayOfWeek(visitDate) === "Saturday" || findDayOfWeek(visitDate) === "Sunday";

    let price = 999; // Default price for non-adult and non-weekend tickets.

    if (isAdult) {
        if (isWeekend) {
            price = 1499;
        }
        else {
            price = 1199;
        }
    }
    // else {
    //     if (isWeekend) {
    //         price = 1199;
    //     }
    // }

    return (
        <span>{price}</span>
    );
}

export default TicketPricing;

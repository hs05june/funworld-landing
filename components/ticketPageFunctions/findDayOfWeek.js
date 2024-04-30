export function findDayOfWeek(givenDate) {
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

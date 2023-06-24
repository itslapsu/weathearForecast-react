import React from "react";

export default function DayDate({ weatherData, index }) {
  let date;

  if (weatherData) {
    date = new Date(
      weatherData.forecast.forecastday[index].date
    ).toLocaleDateString("ua-UA", {
      day: "2-digit",
      month: "2-digit",
    });
  } else {
    date = "Unknown";
  }

  return (
    <p className="days__link placeholder">
      {index === 0 ? "Today" : `${date}`}
    </p>
  );
}

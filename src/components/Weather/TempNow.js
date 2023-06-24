import React from "react";

export default function TempNow({ weatherData, day }) {
  let tempNow;

  if (weatherData) {
    if (day !== 0) {
      tempNow = Math.round(weatherData.forecast.forecastday[day].day.avgtemp_c);
    } else {
      tempNow = Math.round(weatherData.current.temp_c);
    }
  } else {
    tempNow = "18";
  }

  return (
    <>
      <p className="temp__now placeholder">{tempNow}</p>
      <p className="temp__celsiy placeholder">°C</p>
    </>
  );
}

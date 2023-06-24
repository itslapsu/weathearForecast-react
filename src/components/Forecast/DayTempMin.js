import React from "react";

export default function DayTempMin({ weatherData, index }) {
  const minTemp = weatherData
    ? Math.round(weatherData.forecast.forecastday[index].day.mintemp_c)
    : "18";

  return <p className="min forecastMin placeholder">{minTemp}°</p>;
}

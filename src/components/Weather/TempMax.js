import React from "react";

export default function TempMax({ weatherData, day }) {
  const tempMax = weatherData
    ? Math.round(weatherData.forecast.forecastday[day].day.maxtemp_c)
    : 22;

  return (
    <>
      <p className="max placeholder">{tempMax}°</p>
    </>
  );
}

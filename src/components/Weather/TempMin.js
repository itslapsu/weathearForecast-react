import React from "react";

export default function TempMin({ weatherData, day }) {
  const tempMin = weatherData
    ? Math.round(weatherData.forecast.forecastday[day].day.mintemp_c)
    : 18;

  return (
    <>
      <p className="min placeholder">{tempMin}°</p>
    </>
  );
}

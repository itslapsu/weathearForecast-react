import React from "react";

export default function DayTempMax({ weatherData, index }) {
  const maxTemp = weatherData
    ? Math.round(weatherData.forecast.forecastday[index].day.maxtemp_c)
    : "22";

  return <p className="max forecastMax placeholder">{maxTemp}°</p>;
}

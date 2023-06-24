import React from "react";
import clearImage from "../../image/clear.png";

export default function DayImage({ weatherData, index }) {
  const dayImageLink = weatherData
    ? "https://" + weatherData.forecast.forecastday[index].day.condition.icon
    : `${clearImage}`;

  return (
    <img
      src={dayImageLink.replace("64x64", "128x128")}
      alt=""
      className="days__icon placeholder"
    />
  );
}

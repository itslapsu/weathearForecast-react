import React from "react";
import clearImage from "../../image/clear.png";

export default function StatsItem({
  weatherData,
  icon,
  day,
  variable,
  text,
  title,
}) {
  const statsValue = weatherData
    ? `${Math.round(weatherData.forecast.forecastday[day].day[variable])} `
    : `17 `;

  return (
    <div className="stats__item">
      <img
        src={weatherData ? icon : clearImage}
        alt=""
        className="stats__item__img placeholder"
      />
      <div className="item__values placeholder">
        <p className="values__title placeholder">{title}</p>
        <p className="values__value wind placeholder">
          {statsValue}
          <span>{text}</span>
        </p>
      </div>
    </div>
  );
}

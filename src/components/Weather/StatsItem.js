import React from "react";

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
      <img src={icon} alt="" className="stats__item__img" />
      <div className="item__values">
        <p className="values__title ">{title}</p>
        <p className="values__value wind placeholder">
          {statsValue}
          <span>{text}</span>
        </p>
      </div>
    </div>
  );
}

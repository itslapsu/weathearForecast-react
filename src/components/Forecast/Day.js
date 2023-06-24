import React from "react";
import DayDate from "./DayDate";
import DayImage from "./DayImage";
import DayTemp from "./DayTemp";

export default function Day({ weatherData, index, day, setDay }) {
  const activeClass = index === day ? "days__item_active" : "";

  return (
    <li onClick={() => setDay(index)} className={`days__item ${activeClass}`}>
      <DayDate weatherData={weatherData} index={index} />
      <DayImage weatherData={weatherData} index={index} />
      <DayTemp weatherData={weatherData} index={index} />
    </li>
  );
}

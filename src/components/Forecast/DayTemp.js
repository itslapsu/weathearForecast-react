import React from "react";
import DayTempMax from "./DayTempMax";
import DayTempMin from "./DayTempMin";

export default function DayTemp({ weatherData, index }) {
  return (
    <div className="max-min">
      <DayTempMax weatherData={weatherData} index={index} />
      <DayTempMin weatherData={weatherData} index={index} />
    </div>
  );
}

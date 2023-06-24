import React from "react";
import TempNow from "./TempNow";
import TempMax from "./TempMax";
import TempMin from "./TempMin";

export default function Temp({ weatherData, day }) {
  return (
    <>
      <div className="temp">
        <TempNow weatherData={weatherData} day={day} />
      </div>
      <div className="max-min">
        <TempMax weatherData={weatherData} day={day} />
        <TempMin weatherData={weatherData} day={day} />
      </div>
    </>
  );
}

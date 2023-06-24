import "../css/Weather.css";
import React from "react";

import Location from "./Location";
import Temp from "./Temp";
import Stats from "./Stats";
import WeatherImage from "./WeatherImage";

function Weather({ weatherData, day }) {
  return (
    <section className="weather">
      <div className="weather__main">
        <WeatherImage weatherData={weatherData} day={day} />
        <Location weatherData={weatherData} />
        <Temp weatherData={weatherData} day={day} />
        <Stats weatherData={weatherData} day={day} />
      </div>
    </section>
  );
}

export default Weather;

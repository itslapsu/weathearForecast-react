import React from "react";

import wind from "../../image/wind.svg";
import rain from "../../image/rain.svg";
import humidity from "../../image/humidity.svg";
import StatsItem from "./StatsItem";

export default function Stats({ weatherData, day }) {
  return (
    <div className="stats">
      <StatsItem
        weatherData={weatherData}
        icon={wind}
        day={day}
        variable={"maxwind_kph"}
        text={"km/h"}
        title={"Wind"}
      />
      <StatsItem
        weatherData={weatherData}
        icon={humidity}
        day={day}
        variable={"avghumidity"}
        text={"%"}
        title={"Humidity"}
      />
      <StatsItem
        weatherData={weatherData}
        icon={rain}
        day={day}
        variable={"daily_chance_of_rain"}
        text={"%"}
        title={"Rain"}
      />
    </div>
  );
}

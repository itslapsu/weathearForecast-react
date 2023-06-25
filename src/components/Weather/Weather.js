import "../css/Weather.css";
import React from "react";

import Location from "./Location";
import Temp from "./Temp";
import Stats from "./Stats";
import WeatherImage from "./WeatherImage";
import WeatherBackgroundVideo from "./WeatherBackgroundVideo";

import bgImage from "../../image/bg-main.png";

// import bgLightning from "../../image/lightning.mp4";
import bgRain from "../../image/rain.mp4";
import bgCloudy from "../../image/cloudy.mp4";
import bgPartlyCloudy from "../../image/sun and cloud.mp4";
import bgFog from "../../image/fog.mp4";

function Weather({ weatherData, day }) {
  const [bgVideo, setBgVideo] = React.useState("");

  const weatherMainStyles =
    weatherData && bgVideo && !day
      ? { background: "rgba(143, 135, 250, 0.8)" }
      : { backgroundImage: `url(${bgImage})` };

  React.useEffect(() => {
    if (weatherData) {
      const currentCondition = weatherData?.current?.condition?.text;
      switch (currentCondition) {
        case "Partly cloudy":
          setBgVideo(bgPartlyCloudy);
          break;
        case "Overcast":
        case "Cloudy":
          setBgVideo(bgCloudy);
          break;
        case "Patchy rain possible":
        case "Light rain shower":
        case "Moderate or heavy rain shower":
        case "Torrential rain shower":
          setBgVideo(bgRain);
          break;
        case "Fog":
        case "Mist":
          setBgVideo(bgFog);
          break;
        default:
          setBgVideo(null);
      }
    }
  }, [weatherData, weatherData?.current?.condition?.text]);

  console.log(bgVideo);

  return (
    <section className="weather">
      <div className="weather__main" style={weatherMainStyles}>
        <WeatherBackgroundVideo
          weatherData={weatherData}
          day={day}
          bgVideo={bgVideo}
          setBgVideo={setBgVideo}
        />
        <WeatherImage weatherData={weatherData} day={day} />
        <Location weatherData={weatherData} />
        <Temp weatherData={weatherData} day={day} />
        <Stats weatherData={weatherData} day={day} />
      </div>
    </section>
  );
}

export default Weather;

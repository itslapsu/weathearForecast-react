export default function WeatherImage({ weatherData, day }) {
  let weatherImageLink;

  if (weatherData) {
    if (day === 0) {
      weatherImageLink = "https://" + weatherData.current.condition.icon;
    } else {
      weatherImageLink =
        "https://" + weatherData.forecast.forecastday[day].day.condition.icon;
    }
  }

  return weatherData ? (
    <img
      src={weatherImageLink.replace("64x64", "128x128")}
      alt=""
      className="weather__icon"
    />
  ) : (
    ""
  );
}

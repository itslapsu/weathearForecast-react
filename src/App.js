import "./App.css";
import Form from "./components/Form/Form";
import Weather from "./components/Weather/Weather";
import Forecast from "./components/Forecast/Forecast";
import React from "react";

const apiKey = "2205e20b14da4db286500717230805";
const apiURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&days=3&q=`;

function App() {
  const [weatherData, setWeatherData] = React.useState(0);
  const [day, setDay] = React.useState(0);

  const deletePlaceholders = () => {
    const items = document.getElementsByClassName("placeholder");
    Array.from(items).forEach((el) => {
      el.classList.remove("placeholder");
    });
  };

  const loadWeather = (city, event = false) => {
    if (event) event.preventDefault();

    fetch(`${apiURL}${city}`)
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("City not found");
        }
      })
      .then(function (data) {
        if (data) {
          setWeatherData(data);
          deletePlaceholders();
          console.log(data);
        }
      })
      .catch(function (error) {
        // Пустой блок catch
      });
  };

  return (
    <div className="App container">
      <Form
        deletePlaceholders={deletePlaceholders}
        setWeatherData={setWeatherData}
        loadWeather={loadWeather}
        day={day}
      />
      <Weather weatherData={weatherData} day={day} />
      <Forecast
        deletePlaceholders={deletePlaceholders}
        weatherData={weatherData}
        day={day}
        setDay={setDay}
      />
    </div>
  );
}

export default App;

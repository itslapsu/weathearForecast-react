import "../css/Form.css";
import React from "react";

function Form({ deletePlaceholders, setWeatherData, loadWeather }) {
  const [city, setCity] = React.useState("1");

  return (
    <section className="form">
      <div className="form__main">
        <form onSubmit={(e) => loadWeather(city, e)} className="form__form">
          <input
            onChange={(e) => setCity(e.target.value)}
            className="form__input"
            type="text"
            placeholder="City"
          />
          <button className="form__button"></button>
        </form>
      </div>
    </section>
  );
}

export default Form;

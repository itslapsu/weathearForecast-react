import React from "react";
import geo from "../../image/geo.svg";

export default function Location({ weatherData }) {
  const locationText = weatherData
    ? `${weatherData.location.name}, ${weatherData.location.country}`
    : "Kyiv, Ukraine";

  return (
    <div className="location">
      <img src={geo} alt="" className="location__img" />
      <p className="location__country placeholder">{locationText}</p>
    </div>
  );
}

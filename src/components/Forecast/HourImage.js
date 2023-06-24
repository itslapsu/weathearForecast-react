import React from "react";
import clearImage from "../../image/clear.png";

export default function HourImage({ hour }) {
  const hourImageLink = hour
    ? `https://${hour.condition.icon}`
    : `${clearImage}`;

  return (
    <img
      src={hourImageLink.replace("64x64", "128x128")}
      alt=""
      className="hour__icon"
    />
  );
}

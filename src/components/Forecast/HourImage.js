import React from "react";
import clearImage from "../../image/clear.png";

export default function HourImage({ hour, placeholder }) {
  const holderClass = placeholder ? "placeholder" : "";

  const hourImageLink = hour
    ? `https://${hour.condition.icon}`
    : `${clearImage}`;

  return (
    <img src={hourImageLink} alt="" className={`hour__icon ${holderClass}}`} />
  );
}

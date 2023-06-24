import React from "react";

export default function HourText({ hour, placeholder }) {
  const holderClass = placeholder ? "placeholder" : "";

  const hourText = hour
    ? new Date(hour.time).getHours().toString().padStart(2, "0")
    : "00";

  return <p className={`hour__text ${holderClass}`}>{hourText}</p>;
}

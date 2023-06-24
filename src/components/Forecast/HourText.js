import React from "react";

export default function HourText({ hour }) {
  const hourText = hour
    ? new Date(hour.time).getHours().toString().padStart(2, "0")
    : "00";

  return <p className="hour__text">{hourText}</p>;
}

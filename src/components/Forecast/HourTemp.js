import React from "react";

export default function HourTemp({ hour }) {
  const hourTemp = hour ? Math.round(hour.temp_c) : "20";

  return <p className="hour__temp">{hourTemp}°</p>;
}

import "../../components/css/Forecast.css";
import HourImage from "./HourImage";
import HourTemp from "./HourTemp";
import HourText from "./HourText";

function Hour({ hour, placeholder }) {
  const holderClass = placeholder ? "placeholder" : "";

  return (
    <li className={`hour ${holderClass}`}>
      <HourText hour={hour} placeholder={placeholder} />
      <HourImage hour={hour} placeholder={placeholder} />
      <HourTemp hour={hour} placeholder={placeholder} />
    </li>
  );
}

export default Hour;

import "../../components/css/Forecast.css";
import Day from "./Day";
import Hour from "./Hour";
// import { useRef } from "react";

function Forecast({ weatherData, day, setDay }) {
  //   const containerRef = useRef(null);

  //   const handleWheel = (event) => {
  //     const container = containerRef.current;
  //     container.scrollTo({
  //       left: container.scrollLeft + event.deltaY,
  //       behavior: "smooth", // Добавьте это, если вы хотите, чтобы прокрутка была плавной
  //     });
  //   };
  const hours = Array.from({ length: 24 }, (_, index) => index + 1);

  const hoursList = weatherData
    ? weatherData.forecast.forecastday[day].hour.map((hour) => {
        return <Hour key={hour.time_epoch} hour={hour} placeholder={0}></Hour>;
      })
    : hours.map((hour) => <Hour key={hour} placeholder={1} />);
  return (
    <section className="forecast">
      <div className="forecast__main">
        <div className="forecast__hours">
          <ul /*ref={containerRef} onWheel={handleWheel}*/ className="hours">
            {hoursList}
          </ul>
        </div>
        <div className="forecast__days placeholder-grow">
          <ul className="days">
            <Day
              weatherData={weatherData}
              day={day}
              index={0}
              setDay={setDay}
            />
            <Day
              weatherData={weatherData}
              day={day}
              index={1}
              setDay={setDay}
            />
            <Day
              weatherData={weatherData}
              day={day}
              index={2}
              setDay={setDay}
            />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Forecast;

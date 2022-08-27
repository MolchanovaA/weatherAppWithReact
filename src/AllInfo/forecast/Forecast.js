import React from "react";
import DailyForecast from "./DailyForecast";
import "./ForecastS.css";

export default function Forecast() {
  //DEFAULTS ICON!!
  const defaults = {
    icon: "CLEAR_DAY",
    color: "rgba(255, 255, 255, 0.87)",
    size: 50,
    animate: true,
  };

  function createWeekDayName(day, upCommingWeek = [], counter = 5) {
    if (counter === 0) return;
    if (day >= 7) {
      day = day - 7;
    }
    let weekDay = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thurstay",
      "Friday",
      "Saturday",
    ];

    upCommingWeek.push({ day: weekDay[day] });
    createWeekDayName(day + 1, upCommingWeek, counter - 1);

    return upCommingWeek;
  }
  let weekArray = createWeekDayName(2);

  weekArray.map((item) => (item.forecast = defaults));

  function dailyForecastCreator(item, i) {
    return <DailyForecast day={item.day} defaults={item.forecast} key={i} />;
  }

  return (
    <section className="forecastInfo ">
      {weekArray.map(dailyForecastCreator)}
    </section>
  );
}

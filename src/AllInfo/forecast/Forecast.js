import React from "react";
import DailyForecast from "./DailyForecast";
import "./ForecastS.css";

export default function Forecast() {
  const defaults = {
    icon: "CLEAR_DAY",
    color: "rgba(255, 255, 255, 0.87)",
    size: 50,
    animate: true,
  };
  return (
    <section className="forecastInfo ">
      <DailyForecast className="test" defaults={defaults} />
      <DailyForecast defaults={defaults} />
      <DailyForecast defaults={defaults} />
      <DailyForecast defaults={defaults} />
      <DailyForecast defaults={defaults} />
    </section>
  );
}

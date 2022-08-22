import React from "react";
import "./DailyForecastS.css";
import WeatherIcon from "../bodyInfo/WeatherIcon";

export default function DailyForecast({ day, defaults }) {
  return (
    <section className="dailyForecastInfo test">
      <h3>{day}</h3>
      <div>
        <WeatherIcon defaults={defaults} />
        <h4>30C</h4>
      </div>
    </section>
  );
}

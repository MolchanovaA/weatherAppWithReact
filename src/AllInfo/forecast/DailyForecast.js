import React from "react";
import "./DailyForecastS.css";
import WeatherIcon from "../bodyInfo/WeatherIcon";

export default function DailyForecast({ dailyWeather }) {
  // console.log(dailyWeather.descr, "--descrip");
  return (
    <section className="dailyForecastInfo test">
      <h3>{dailyWeather.day}</h3>
      <div>
        <WeatherIcon weatherDescrIcon={dailyWeather.descr} />
        <h4>{dailyWeather.temp}C</h4>
      </div>
    </section>
  );
}

import React from "react";
import "./WeatherDescrS.css";

export default function WeatherDescr({
  weather,
  filter = { humidity: "", windSpeed: "" },
}) {
  return (
    <section>
      <h2 className="text-center">{weather.cityName}</h2>
      <section className="mainInfo">
        <h3>Temp: {weather.temperature} C</h3>
        <h3>Hum: {filter.humidity} %</h3>
        <h3>Wind Speed: {filter.windSpeed} m/s</h3>
        <h3>{weather.day}</h3>
        <h3>
          {weather.date} {weather.month} {weather.year}
        </h3>
      </section>
    </section>
  );
}

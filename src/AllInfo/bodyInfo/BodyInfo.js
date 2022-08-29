import React from "react";
import "./BodyInfoS.css";
import WeatherDescr from "./WeatherDescr";
import WeatherIcon from "./WeatherIcon";

export default function BodyInfo({ weather, filterInfo }) {
  if (!weather) return;

  return (
    <section className="bodyInfoContainer">
      <WeatherDescr weather={weather} filter={filterInfo} />

      <WeatherIcon weatherDescrIcon={weather.description} />
    </section>
  );
}

import React from "react";
import BodyInfoS from "./BodyInfoS.css";
import WeatherDescr from "./WeatherDescr";
import WeatherIcon from "./WeatherIcon";

export default function BodyInfo() {
  return (
    <section className="bodyInfoContainer">
      <WeatherDescr />;
      <WeatherIcon />
    </section>
  );
}

import React from "react";
import "./BodyInfoS.css";
import WeatherDescr from "./WeatherDescr";
import WeatherIcon from "./WeatherIcon";

export default function BodyInfo() {
  const defaults1 = {
    icon: "CLEAR_DAY",
    color: "rgba(255, 255, 255, 0.87)",
    size: 150,
    animate: true,
  };
  return (
    <section className="bodyInfoContainer">
      <WeatherDescr />
      <WeatherIcon defaults={defaults1} />
    </section>
  );
}

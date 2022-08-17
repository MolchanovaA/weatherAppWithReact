import React from "react";
import WeatherDescrS from "./WeatherDescrS.css";

export default function WeatherDescr() {
  /*make render info from API */
  return (
    <section className="mainInfo">
      <h2>London</h2>
      <h3>22 C</h3>
      <h3>80%</h3>
      <h3>10m/s</h3>
      <h3>Tuesday</h3>
      <h3>20.08.2022</h3>
    </section>
  );
}

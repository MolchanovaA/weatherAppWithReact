import React from "react";
import "./WeatherDescrS.css";

export default function WeatherDescr() {
  /*make render info from API */
  return (
    <section>
      <h2 className="text-center">London</h2>
      <section className="mainInfo">
        <h3>22 C</h3>
        <h3>80%</h3>
        <h3>10m/s</h3>
        <h3>Tuesday</h3>
        <h3>20.08.2022</h3>
      </section>
    </section>
  );
}

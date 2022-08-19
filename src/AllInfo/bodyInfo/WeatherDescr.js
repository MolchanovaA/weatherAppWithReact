import React from "react";
import "./WeatherDescrS.css";

export default function WeatherDescr({ dataInfo }) {
  /*make render info from API */
  console.log(dataInfo);
  function createData(dayInfo) {
    if (!dayInfo) return;
    let weekDay = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thurstay",
      "Friday",
      "Saturday",
    ];
    return weekDay[dataInfo.dayOfWeek];
  }
  return (
    <section>
      <h2 className="text-center">London</h2>
      <section className="mainInfo">
        <h3>22 C</h3>
        <h3>80%</h3>
        <h3>10m/s</h3>
        <h3>{createData(dataInfo)}</h3>
        <h3>
          {dataInfo.day}.
          {dataInfo.month + 1 < 9 ? `0${dataInfo.month + 1}` : dataInfo.month}.
          {dataInfo.year}
        </h3>
      </section>
    </section>
  );
}

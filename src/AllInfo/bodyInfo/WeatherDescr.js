import React, { useState } from "react";
import axios from "axios";
import "./WeatherDescrS.css";

export default function WeatherDescr({ dataInfo, cityName }) {
  let [temp, setTemp] = useState("");
  let [hum, setHum] = useState("");
  let [wind, setWind] = useState("");
  let [descr, setDescr] = useState("");

  function callBack(resp) {
    setTemp(Math.round(resp.data.main.temp));
    setHum(resp.data.main.humidity);
    setWind(resp.data.wind.speed);
    setDescr(resp.data.weather[0].description);
  }
  function fail(e) {
    console.log(e.code, "fffffail");
  }

  let key = `47acee420b645368c8f4f5042bbda62e`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`;
  console.log(url);
  axios.get(url).then(callBack, fail);

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
      <h2 className="text-center">{cityName ? cityName : "Unnamed"}</h2>
      <section className="mainInfo">
        <h3>{temp}C</h3>
        <h3>{hum}%</h3>
        <h3>{wind}m/s</h3>
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

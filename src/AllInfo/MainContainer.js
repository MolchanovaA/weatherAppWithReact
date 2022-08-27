import React, { useState } from "react";
import axios from "axios";
import Header from "./header/Header";
import BodyInfo from "./bodyInfo/BodyInfo";
import Forecast from "./forecast/Forecast";
import Footer from "./footer/Footer";

import "./MainContainerS.css";

export default function MainContainer({ updHours }) {
  let [inputInfo, setInputInfo] = useState("");
  let [name, setName] = useState("");
  let [temp, setTemp] = useState("");
  let [hum, setHum] = useState("");
  let [wind, setWind] = useState("");
  let [descr, setDescr] = useState("");
  let [dayOfWeek, setDayOfWeek] = useState("");
  let [month, setMonth] = useState("");
  let [date, setDate] = useState("");
  let [year, setYear] = useState("");
  // let [hour, setHour] = useState("");

  /// GEOLOCATION

  function toSearchCurrentCoords() {
    function cordsDetecting(respond) {
      let long = respond.coords.longitude;
      let lat = respond.coords.latitude;
      let apiKey = `92af424606501aebb73d6eb016d67cdc`;
      let urlAPIGetCity = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
      axios.get(urlAPIGetCity).then(getWeatherInfoFromApi);
    }

    navigator.geolocation.getCurrentPosition(cordsDetecting);
  }

  // API CALL

  function getWeatherInfoFromApi(resp) {
    let data = new Date(+resp.data.list[0].dt * 1000);
    let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let months = [
      "Jan",
      "Feb",
      "March",
      "Apr",
      "May",
      "June",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    setDate(data.getDate());
    setDayOfWeek(week[data.getDay()]);
    setMonth(months[data.getMonth()]);
    setYear(data.getFullYear());
    // setHour(data.getHours());
    updHours(data.getHours());
    setName(resp.data.city.name);
    setTemp(Math.round(resp.data.list[0].main.temp));
    setHum(resp.data.list[0].main.humidity);
    setWind(resp.data.list[0].wind.speed);
    setDescr(resp.data.list[0].weather[0].description);
  }

  let key = `47acee420b645368c8f4f5042bbda62e`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${key}&units=metric`;

  axios.get(apiUrl).then(getWeatherInfoFromApi, toSearchCurrentCoords);

  function getCityName(nameA) {
    setName(nameA);
  }

  function toUpdFilter(param) {
    setInputInfo(param);
  }

  function showFilteredWeather(filter = []) {
    if (!filter[0] && !filter[1]) return;
    let weatherInfoObject = {
      humidity: filter[0].name === "Humidity" && filter[0].status ? hum : " ",
      windSpeed:
        filter[1].name === "WindSpeed" && filter[1].status ? wind : " ",
    };
    return weatherInfoObject;
  }

  let weatherObj = {
    cityName: name,
    temperature: temp,
    description: descr,
    day: dayOfWeek,
    date: date,
    month: month,
    year: year,
  };

  return (
    <div className="mainContainer">
      <Header updCity={getCityName} updFilter={toUpdFilter} />

      <BodyInfo
        weather={weatherObj}
        filterInfo={showFilteredWeather(inputInfo)}
      />
      <Forecast />
      <Footer />
    </div>
  );
}

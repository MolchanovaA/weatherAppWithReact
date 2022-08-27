import React from "react";
import "./BodyInfoS.css";
import WeatherDescr from "./WeatherDescr";
import WeatherIcon from "./WeatherIcon";

export default function BodyInfo({ weather, filterInfo }) {
  // console.log(weather, "filter");
  if (!weather) return;
  function setWeatherIcon(weatherDescription) {
    if (!weatherDescription) return;
    let iconObj = {
      "clear sky": "CLEAR_DAY",
      "few clouds": "PARTLY_CLOUDY_DAY",
      "scattered clouds": " CLOUDY",
      rain: " RAIN",
      "light rain": "RAIN",
      snow: "SNOW",
      mist: "FOG",
    };
    const def = {
      color: "goldenrod",
      size: 100,
      animate: true,
      icon: iconObj[weatherDescription],
    };
    // console.log(def);
    return def;
  }

  return (
    <section className="bodyInfoContainer">
      <WeatherDescr weather={weather} filter={filterInfo} />

      <WeatherIcon defaults={setWeatherIcon(weather.description)} />
    </section>
  );
}

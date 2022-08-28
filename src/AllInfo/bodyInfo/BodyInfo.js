import React from "react";
import "./BodyInfoS.css";
import WeatherDescr from "./WeatherDescr";
import WeatherIcon from "./WeatherIcon";

export default function BodyInfo({ weather, filterInfo }) {
  if (!weather) return;
  function setWeatherIcon(weatherDescription) {
    if (!weatherDescription) return;
    let iconObj = {
      "clear sky": "CLEAR_DAY",
      "few clouds": "PARTLY_CLOUDY_DAY",
      "overcast clouds": "PARTLY_CLOUDY_DAY",
      "scattered clouds": " CLOUDY",
      rain: " RAIN",
      "light rain": "RAIN",
      snow: "SNOW",
      mist: "FOG",
    };
    let icon = iconObj[weatherDescription];
    return icon;
  }

  return (
    <section className="bodyInfoContainer">
      <WeatherDescr weather={weather} filter={filterInfo} />

      <WeatherIcon icon={setWeatherIcon(weather.description)} />
    </section>
  );
}

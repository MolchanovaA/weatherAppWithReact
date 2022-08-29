import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./WeatherIconS.css";

export default function WeatherIcon({ weatherDescrIcon }) {
  function setWeatherIcon(weatherDescription) {
    if (!weatherDescription) return;
    let iconObj = {
      "clear sky": "CLEAR_DAY",
      "few clouds": "PARTLY_CLOUDY_DAY",
      "overcast clouds": "PARTLY_CLOUDY_DAY",
      "scattered clouds": "CLOUDY",
      rain: " RAIN",
      "light rain": "RAIN",
      snow: "SNOW",
      mist: "FOG",
    };
    let icon = iconObj[weatherDescription];
    return icon;
  }

  const defaults = {
    icon: "CLEAR_DAY",
    color: `rgba(255, 255, 255, 0.87)`,
    size: 100,
    animate: true,
  };
  if (weatherDescrIcon) {
    defaults.icon = setWeatherIcon(weatherDescrIcon) || "CLEAR_DAY";
  }

  return (
    <ReactAnimatedWeather
      icon={defaults.icon}
      color={defaults.color}
      size={defaults.size}
      animate={defaults.animate}
    />
  );
}

import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
// import "./WeatherIconS.css";

export default function WeatherIcon({ defaults }) {
  if (!defaults) return;

  return (
    <ReactAnimatedWeather
      icon={defaults.icon}
      color={defaults.color}
      size={defaults.size}
      animate={defaults.animate}
    />
  );
}

import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
// import "./WeatherIconS.css";

export default function WeatherIcon({ defaults }) {
  // const defaults = {
  //   icon: "CLEAR_DAY",
  //   color: "rgba(255, 255, 255, 0.87)",
  //   size: 150,
  //   animate: true,
  // };

  return (
    <ReactAnimatedWeather
      icon={defaults.icon}
      color={defaults.color}
      size={defaults.size}
      animate={defaults.animate}
    />
  );
}

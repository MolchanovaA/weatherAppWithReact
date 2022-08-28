import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./WeatherIconS.css";

export default function WeatherIcon({ icon }) {
  const defaults = {
    icon: "CLEAR_DAY" || icon,
    color: `rgba(255, 255, 255, 0.87)`,
    size: 100,
    animate: true,
  };
  if (icon) {
    defaults.icon = icon;
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

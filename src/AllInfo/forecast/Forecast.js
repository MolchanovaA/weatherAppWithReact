import React from "react";
import DailyForecast from "./DailyForecast";
import "./ForecastS.css";

export default function Forecast({ forecast }) {
  if (!forecast) {
    console.log("no info. forecast info in JSON");
  } else {
    let forecastFiveDays = JSON.parse(forecast);
    // console.log(forecastFiveDays, " FORECASSSS");
    function dailyForecastCreator(item, i) {
      // console.log(item, "from JSON");
      return <DailyForecast dailyWeather={item} key={i} />;
    }

    return (
      <section className="forecastInfo ">
        {forecastFiveDays.map(dailyForecastCreator)}
      </section>
    );
  }
}

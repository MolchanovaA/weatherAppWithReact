import React, { useState } from "react";
import Header from "./header/Header";
import BodyInfo from "./bodyInfo/BodyInfo";
import Forecast from "./forecast/Forecast";
import Footer from "./footer/Footer";

import "./MainContainerS.css";

export default function MainContainer({ dataInfo }) {
  let [name, setName] = useState("");
  let [inputInfo, setInputInfo] = useState("");
  function getCityName(nameA) {
    setName(nameA);
  }

  function toUpdFilter(param) {
    setInputInfo(param);
  }
  // console.log(inputInfo);
  return (
    <div className="mainContainer">
      <Header updCity={getCityName} updFilter={toUpdFilter} />

      <BodyInfo dataInfo={dataInfo} cityName={name} inputInfo={inputInfo} />

      <Forecast dayInfo={dataInfo.dayOfWeek} />
      <Footer />
    </div>
  );
}

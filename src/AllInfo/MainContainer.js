import React, { useState } from "react";
import Header from "./header/Header";
import BodyInfo from "./bodyInfo/BodyInfo";
import Forecast from "./forecast/Forecast";
import Footer from "./footer/Footer";

import "./MainContainerS.css";

export default function MainContainer({ dataInfo }) {
  let [name, setName] = useState("");
  function getCityName(name) {
    setName(name);
  }

  return (
    <div className="mainContainer">
      <Header upd={getCityName} />

      <BodyInfo dataInfo={dataInfo} cityName={name} />

      <Forecast dayInfo={dataInfo.dayOfWeek} />
      <Footer />
    </div>
  );
}

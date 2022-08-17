import React from "react";
import Header from "./header/Header";
import BodyInfo from "./bodyInfo/BodyInfo";
import Forecast from "./forecast/Forecast";
import "./MainContainerS.css";

export default function MainContainer() {
  return (
    <div className="mainContainer">
      <Header />
      <BodyInfo />
      <Forecast />
    </div>
  );
}

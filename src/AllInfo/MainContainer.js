import React from "react";
import Header from "./header/Header";
import BodyInfo from "./bodyInfo/BodyInfo";
import Forecast from "./forecast/Forecast";
import Footer from "./footer/Footer";
import "./MainContainerS.css";

export default function MainContainer({ dataInfo }) {
  return (
    <div className="mainContainer">
      <Header />
      <BodyInfo dataInfo={dataInfo} />
      <Forecast />
      <Footer />
    </div>
  );
}

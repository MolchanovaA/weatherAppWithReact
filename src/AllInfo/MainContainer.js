import React from "react";
import Header from "./header/Header";
import BodyInfo from "./bodyInfo/BodyInfo";

export default function MainContainer() {
  return (
    <div className="mainContainer">
      <Header />
      <BodyInfo />
    </div>
  );
}

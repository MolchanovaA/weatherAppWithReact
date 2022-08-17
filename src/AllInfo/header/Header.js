import React from "react";
import "./HeaderS.css";

export default function Header() {
  function showMenu(e) {
    e.target.classList.toggle("showMenu");
    let wrapper = e.target.closest(".formWrapper");
    wrapper.classList.toggle("anim");
    if (wrapper.classList.contains("anim")) {
      wrapper.classList.remove("hide");
    } else {
      wrapper.classList.add("hide");
    }
  }
  return (
    <div className="formWrapper">
      <div onClick={showMenu} className="smallMenu "></div>
      <form className="settings row text-center " id="weatherForm">
        <label className="col-md-3 col-sm-3">
          <input type="checkbox" name="Temperature" />
          <span className="settingTool">Temperature</span>
        </label>
        <label className="col-md-3 col-sm-3">
          <input type="checkbox" name="Humidity" />
          <span className="settingTool">Humidity</span>
        </label>
        <label className="col-md-3 col-sm-3">
          <input type="checkbox" name="WindSpeed" />
          <span className="settingTool">Wind Speed</span>
        </label>
        <label className="col-md-3 col-sm-3 iconSearch">
          <input type="search" name="enter a city" />
          <i className="fa-solid fa-magnifying-glass searchIcon"></i>
        </label>
        {/* <label className="col-md-3">
          <input type="submit" value="save"></input>
        </label> */}
      </form>
    </div>
  );
}

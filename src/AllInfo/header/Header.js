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
      <form className="settings row text-center ">
        <label className="col-md-4 col-sm-4">
          <input type="checkbox" name="Temperature" />
          <span className="settingTool">Temperature</span>
        </label>
        <label className="col-md-4 col-sm-4">
          <input type="checkbox" name="Humidity" />
          <span className="settingTool">Humidity</span>
        </label>
        <label className="col-md-4 col-sm-4">
          <input type="checkbox" name="WindSpeed" />
          <span className="settingTool">Wind Speed</span>
        </label>
        {/* <label className="col-md-3">
          <input type="submit" value="save"></input>
        </label> */}
      </form>
    </div>
  );
}

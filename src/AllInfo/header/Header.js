import React, { useState } from "react";
import "./HeaderS.css";

export default function Header({ upd }) {
  let [city, setCity] = useState("");
  let [inputInfo, setInputInfo] = useState("");

  //current Location //

  // function showCurrentCityName(apiRespond) {
  //   toCallApiByCityName(apiRespond.data.name);
  // }

  function toSearchCurrentCoords(respond) {
    let long = respond.coords.longitude;
    let lat = respond.coords.latitude;
    console.log(long, lat);

    let apiKey = `92af424606501aebb73d6eb016d67cdc`;
    let urlAPIGetCity = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
    console.log(urlAPIGetCity);
    // axios.get(urlAPIGetCity).then(showCurrentCityName);
  }

  navigator.geolocation.getCurrentPosition(toSearchCurrentCoords);

  ///

  function cathCityName(e) {
    setCity(e.target.value);
  }

  function sendCityName(e) {
    e.preventDefault();
    // console.log(city);
    upd(city);
  }

  function sendChangedFields(e) {
    e.preventDefault();
    if (e.target.name === "enter a city") return;
    let input = e.target.closest("label").querySelector("input");

    !input.checked ? (input.checked = true) : (input.checked = false);

    setInputInfo(input);
  }
  console.log(inputInfo.checked, inputInfo.name);
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
      <form
        onSubmit={sendCityName}
        onClick={sendChangedFields}
        className="settings row text-center "
        id="weatherForm"
      >
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
        <label className="col-md-3 col-sm-3 iconSearchLabel">
          <input onChange={cathCityName} type="search" name="enter a city" />
          <i className="fa-solid fa-magnifying-glass searchIcon"></i>
        </label>
        {/* <label className="col-md-3">
          <input type="submit" value="save"></input>
        </label> */}
      </form>
    </div>
  );
}

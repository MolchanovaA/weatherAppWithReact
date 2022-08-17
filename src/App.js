import "./App.css";
import MainContainer from "./AllInfo/MainContainer";

import day from "./AllInfo/pics/day.jpg";
import morning from "./AllInfo/pics/morning.jpg";
import evening from "./AllInfo/pics/evening.jpg";
import night from "./AllInfo/pics/night.jpg";

let backgroungImages = {
  morning: {
    background: `black url(${morning}) no-repeat  center`, // backgroundColor: "black",
    backgroundSize: "cover",
  },
  day: {
    background: `black url(${day}) no-repeat  center`, // backgroundColor: "black",
    backgroundSize: "cover",
  },
  evening: {
    background: `black url(${evening}) no-repeat  center`, // backgroundColor: "black",
    backgroundSize: "cover",
  },
  night: {
    background: `black url(${night}) no-repeat  center`, // backgroundColor: "black",
    backgroundSize: "cover",
  },
};

function App() {
  function getCurrentDate() {
    let date = new Date();
    let hours = date.getHours();
    return hours;
  }

  function setBackgroundImage() {
    let currentHours = getCurrentDate();
    let partOfDay;
    if (currentHours >= 22 || currentHours < 6) {
      partOfDay = "night";
    } else if (currentHours >= 7 && currentHours < 12) {
      partOfDay = "morning";
    } else if (currentHours >= 12 && currentHours < 18) {
      partOfDay = "day";
    } else if (currentHours >= 18 && currentHours < 22) {
      partOfDay = "evening";
    }
    return partOfDay;
  }
  return (
    <div className="App" style={backgroungImages[setBackgroundImage()]}>
      <MainContainer />
    </div>
  );
}

export default App;

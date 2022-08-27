import "./App.css";
import { useState } from "react";
import MainContainer from "./AllInfo/MainContainer";

import day from "./AllInfo/pics/day.jpg";
import morning from "./AllInfo/pics/morning.jpg";
import evening from "./AllInfo/pics/evening.jpg";
import night from "./AllInfo/pics/night.jpg";

let backgroungImages = {
  morning: {
    background: `url(${morning}) `,
  },
  day: {
    backgroundImage: `url(${day})`,
  },
  evening: {
    background: ` url(${evening}) `,
  },
  night: {
    background: `url(${night}) `,
  },
};

function App() {
  let [h, setH] = useState("");
  function updHours(hour) {
    setH(hour);
  }

  function setBackgroundImage(currentHours) {
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
    <div className="App" style={backgroungImages[setBackgroundImage(h)]}>
      <MainContainer updHours={updHours} />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import LikePicker from "./components/LikePicker/LikePicker";

function App() {
  const [stars, setStars] = useState(0);
  function handleChange(value: number) {
    setStars(value);
  }
  return (
    <div className="App">
      <LikePicker
        max={5}
        value={stars}
        onChange={handleChange}
        starStyle={{ fontSize: "3em" }}
        valueDescription={{
          1: "bad",
          2: "normal",
          3: "good",
          4: "great",
          5: "excellent",
        }}
      />
    </div>
  );
}

export default App;

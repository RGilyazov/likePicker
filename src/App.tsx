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
      <LikePicker max={5} value={stars} onChange={handleChange} />
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleSizeChange = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleSizeChange);

    return () => {
      window.removeEventListener("resize", handleSizeChange);
    };
  }, []);

  return (
    <div className="App">
      <h5> {windowSize}</h5>
    </div>
  );
}

export default App;

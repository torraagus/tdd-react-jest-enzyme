import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const decrementCounter = () => {
    if (counter > 0) setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <div className="App">
      <h1>Counter app</h1>
      <p id="counter">{counter}</p>
      <button id="btnIncrement" onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
      <button id="btnDecrement" onClick={decrementCounter}>
        Decrement
      </button>
    </div>
  );
}

export default App;

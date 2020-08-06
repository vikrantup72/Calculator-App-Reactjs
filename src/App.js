import React, { useState, useEffect, useRef } from "react";
import "./App.css";
function App() {
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  function handleClick(e) {
    setResult(result.concat(e.target.name));
  }

  function backspace() {
    setResult(result.slice(0, -1));
  }

  function clear() {
    setResult("");
  }

  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  }

  return (
    <>
    <h1>Simple Calculator</h1>
    <div className="calc-app">
      <from>
        <input type="text" value={result} ref={inputRef} />
      </from>

      <div className="keypad">
        <button id="clear" onClick={clear}>
          Clear
        </button>
        <button id="backspace" onClick={backspace}>
          C
        </button>
        <button name="+" onClick={handleClick}>
          +
        </button>
        <button id="btn" name="7" onClick={handleClick}>
          7
        </button>
        <button id="btn" name="8" onClick={handleClick}>
          8
        </button>
        <button id="btn" name="9" onClick={handleClick}>
          9
        </button>
        <button name="-" onClick={handleClick}>
          -
        </button>
        <button id="btn" name="4" onClick={handleClick}>
          4
        </button>
        <button id="btn" name="5" onClick={handleClick}>
          5
        </button>
        <button id="btn" name="6" onClick={handleClick}>
          6
        </button>
        <button  name="*" onClick={handleClick}>
          &times;
        </button>
        <button id="btn" name="1" onClick={handleClick}>
          1
        </button>
        <button id="btn" name="2" onClick={handleClick}>
          2
        </button>
        <button id="btn" name="3" onClick={handleClick}>
          3
        </button>
        <button  name="/" onClick={handleClick}>
          /
        </button>
        <button id="btn" name="0" onClick={handleClick}>
          0
        </button>
        <button id="btn" name="." onClick={handleClick}>
          .
        </button>
        <button class="bnt" id="result" onClick={calculate}>
          Result
        </button>
      </div>
    </div>
    </>
  );
}

export default App;
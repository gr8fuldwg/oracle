import React from "react";
import "./App.css";
import Thing from "./Oracle.js";
import Answer from "./Answers";

function App() {
  return (
    <div className="App">
      The Oracle
      <Thing />
      <Answer />
    </div>
  );
}

export default App;

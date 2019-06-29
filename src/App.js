import React from "react";
import "./App.css";
// import Question from "./Questions";
// import Answer from "./Answers";
import Nav from "./Nav";
import About from "./About";
import Thing from "./Thing";
import Oracle from "./Oracle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route path="/about" component={About}/>
        <Route path="/Oracle" component={Oracle}/>
        <Route path="/Thing" component={Thing}/>
      </div>
    </Router>
  );
}

export default App;

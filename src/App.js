import React from "react";
import "./App.scss";
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/Oracle" component={Oracle} />
          <Route path="/Thing" component={Thing} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h2>Home Page</h2>
  </div>
);

export default App;

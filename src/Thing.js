import React, { Component } from "react";
import "./App.css";
import Answer from "./Answers";

class Thing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };

    this.answer = this.answer.bind(this);
  }

  answer = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  render() {
    return (
      <div className="Thing">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button
              onClick={this.answer}
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon1"
            >
              Ask The Oracle
            </button>
            
          </div>
          <input
            type="text"
            className="form-control"
            placeholder=""
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
        </div>
        {this.state.show && <Box />}
      </div>
    );
  }
}

class Box extends Component {
  render() {
    return (
      <blockquote>
        <Answer className="text-center" />
      </blockquote>
    );
  }
}

export default Thing;

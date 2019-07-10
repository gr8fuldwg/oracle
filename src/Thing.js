import React, { Component } from "react";
import "./App.css";
import ThingAnswer from "./ThingAnswers";
import { Form } from "reactstrap";

class Thing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.answer = this.answer.bind(this);
  }

  answer = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };

  render() {
    return (
      <div className="thing-question">
        <Form className="needs-validation" novalidate>
          <div class="form-group">
            <label for="validationCustom01">The Oracle eagerly awaits</label>

            <input
              type="text"
              className="form-control"
              id="validationCustom01"
              placeholder="Ask the Oracle anything you wish..."
              minlength="3"
              required
            />
            <div className="valid-feedback">Looks good!</div>
            <div className="invalid-feedback">
              Please don't keep the Oracle in suspense. Ask away...
            </div>
          </div>
        </Form>

        <br />

        <div className="input-group-prepend justify-content-center">
          <button
            onClick={this.answer}
            className="btn btn-outline-secondary "
            type="button"
          >
            Submit to Oracle
          </button>
        </div>

        <div className="d-flex justify-content-center">
          {this.state.show && <Response />}
        </div>
      </div>
    );
  }
}

class Response extends Component {
  render() {
    return (
      <blockquote className="response">
        <ThingAnswer className="text-center" />
      </blockquote>
    );
  }
}

export default Thing;

import React from "react";
import "./App.css";
import Answer from "./Answers";

function Thing() {
  return (
    <div className="Thing">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button
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
      <blockquote>
        <Answer className="text-center" />
      </blockquote>
    </div>
  );
}

export default Thing;

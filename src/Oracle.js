import React from "react";
import "./App.css";
import Question from "./Questions";
import Answer from "./Answers";


function Oracle() {
  return (
    <div className="Oracle">
      <body className="body d-flex text-center">
        <div className="container">
          <div className="App container-fluid">
            <div className="question">
              <h1>
                <Question />
              </h1>
            </div>
          </div>

          <div className="answer d-flex text-center">
            <h1>
              <blockquote>
                <Answer className="text-center" />
              </blockquote>
            </h1>
          </div>
        </div>
      </body>
    </div>
   );
}

export default Oracle;

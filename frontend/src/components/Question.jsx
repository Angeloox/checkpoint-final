/* eslint-disable react/prop-types */
import React from "react";
import "./Question.css";

function Question({ currentCapital }) {
  return (
    <div>
      <h2 className="quiz__question">
        What is the K-pital of {currentCapital?.country} ?
      </h2>
    </div>
  );
}

export default Question;

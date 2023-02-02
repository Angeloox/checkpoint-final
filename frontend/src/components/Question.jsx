/* eslint-disable react/prop-types */
import React from "react";

function Question({ currentCapital }) {
  return (
    <div>
      <h2>What is the capital of {currentCapital?.country} ?</h2>
    </div>
  );
}

export default Question;

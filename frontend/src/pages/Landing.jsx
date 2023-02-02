import React from "react";
import { NavLink } from "react-router-dom";
import "./Landing.css";

function Landing() {
  return (
    <div className="App">
      <NavLink to="/Quiz">
        <button type="button">Are You Ready Motherfuckerzzzz ?</button>
      </NavLink>
    </div>
  );
}

export default Landing;

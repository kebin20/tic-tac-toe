/* eslint-disable react/prop-types */
import React from "react";
import "./Square.css";

function Square({value, onClick }) {
  return (
    <button className="squares" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;

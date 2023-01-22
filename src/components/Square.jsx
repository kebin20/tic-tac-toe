/* eslint-disable react/prop-types */
import React from "react";
import "./Square.css";
import xIcon from "./assets/icon-x.svg";
import oIcon from "./assets/icon-o.svg";

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value === "X" ? (
        <img src={xIcon} alt="X icon" />
      ) : value === "O" ? (
        <img src={oIcon} alt="O icon" />
      ) : null}
    </button>
  );
}

export default Square;

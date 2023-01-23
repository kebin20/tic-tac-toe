/* eslint-disable react/prop-types */
import React from "react";
import "./Square.css";
import xIcon from "./assets/icon-x.svg";
import oIcon from "./assets/icon-o.svg";
// import xOutline from "./assets/icon-x-outline"
// import oOutline from "./assets/icon-o-outline"

function Square({ value, onClick, winningCombination, index }) {
  return (
    <button
      className={
        winningCombination
          ? winningCombination.includes(index)
            ? `${value === "X" ? "winning-x-row" : "winning-o-row"}`
            : "square"
          : "square"
      }
      onClick={onClick}
    >
      {value === "X" ? (
        <img src={xIcon} alt="X icon" />
      ) : value === "O" ? (
        <img src={oIcon} alt="O icon" />
      ) : null}
    </button>
  );
}

export default Square;

// If winning combination equals to "X", change className to winning-x-row, else if winning combination equals to "O", change className to winning-o-row, else use className square

// if (winningCombination) {
//   if (winningCombination.includes("X")) {
//     return "winning-x-row"
//   } else if (winningCombination.includes("O")) {
//     return "winning-o-row"
//   }
// }
//  return "square"
// }

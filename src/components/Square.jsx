/* eslint-disable react/prop-types */
import React from "react";
import "./Square.css";
import xIcon from "./assets/icon-x.svg";
import oIcon from "./assets/icon-o.svg";

function Square({ value, onClick, winningCombination }) {
  return (
    <button
      className={
        winningCombination
          ? winningCombination.indexOf("X") !== -1
            ? "winning-x-row"
            : winningCombination.indexOf("O") !== -1
            ? "winning-o-row"
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

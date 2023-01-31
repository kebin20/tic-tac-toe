/* eslint-disable react/prop-types */
import React from "react";
import "./Square.css";
import xIcon from "./assets/icon-x.svg";
import oIcon from "./assets/icon-o.svg";
import xTransparent from "./assets/icon-x-transparent.svg";
import oTransparent from "./assets/icon-o-transparent.svg";

function Square({
  value,
  onClick,
  winningCombination,
  index,
  winner,
  playerOne,
  playerTwo,
  xIsNext,
}) {
  let squareClass = "square-o-turn";

  if (winningCombination) {
    if (winningCombination.includes(index)) {
      if (value === "X") {
        squareClass = "winning-x-row square";
      } else {
        squareClass = "winning-o-row square";
      }
    }
  } else if (xIsNext) {
    if (playerOne === "X" || playerTwo === "X") {
      squareClass = "square-x-turn";
    } else if (playerOne === "O" || playerTwo === "O") {
      squareClass = "square-o-turn";
    }
  }

  return (
    <button
      className={value ? "square" : squareClass}
      onClick={value ? null : onClick}
    >
      {winner && winningCombination.includes(index) ? (
        value === "X" ? (
          <img src={xTransparent} alt="X transparent icon" />
        ) : (
          <img src={oTransparent} alt="O transparent icon" />
        )
      ) : value === "X" ? (
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

/* eslint-disable react/prop-types */
import React from "react";
import Square from "./Square";
import "./Board.css";

function Board({ squares, onClick, winningCombination, winner }) {
  return (
    <div className="board">
      {squares.map((square, i) => (
        <Square
          key={i}
          winningCombination={winningCombination}
          winner={winner}
          value={square}
          onClick={() => onClick(i)}
          index={i}
        />
      ))}
    </div>
  );
}
export default Board;

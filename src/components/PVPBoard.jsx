/* eslint-disable react/prop-types */
import React from "react";
import Square from "./PVPSquare";
import "./PVPBoard.css";

function PVPBoard({ squares, onClick, winningCombination, winner, className, playerOne, playerTwo, xIsNext }) {
  return (
    <div className="board">
      {squares.map((square, i) => (
        <Square
          key={i}
          winningCombination={winningCombination}
          winner={winner}
          xIsNext={xIsNext}
          playerOne={playerOne}
          playerTwo={playerTwo}
          className={className}
          value={square}
          onClick={() => onClick(i)}
          index={i}
        />
      ))}
    </div>
  );
}
export default PVPBoard;

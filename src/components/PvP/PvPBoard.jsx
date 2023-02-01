/* eslint-disable react/prop-types */
import React from "react";
import PvPSquare from "./PvPSquare";
import "./PvPBoard.css";

function PvPBoard({ board, onClick, winningCombination, winner, className, playerOne, playerTwo, xIsNext }) {
  return (
    <div className="board">
      {board.map((square, i) => (
        <PvPSquare
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
export default PvPBoard;

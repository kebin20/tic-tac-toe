/* eslint-disable react/prop-types */
import React from "react";
import PvCSquare from "./PvCSquare";
import "./PvCBoard.css";

function PvCBoard({ board, onClick, winningCombination, winner, className, playerOne, playerCpu}) {
  return (
    <div className="board">
      {board.map((square, i) => (
        <PvCSquare
          key={i}
          winningCombination={winningCombination}
          winner={winner}
          playerOne={playerOne}
          playerCpu={playerCpu}
          className={className}
          value={square}
          onClick={() => onClick(i)}
          index={i}
        />
      ))}
    </div>
  );
}
export default PvCBoard;

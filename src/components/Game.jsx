import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";
import "./Game.css";

function Game(props) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  function handleClick(i) {
    const boardCopy = [...board];
    // If user click a filled in square or if game is won, return
    if (boardCopy[i] || winner) return null;
    // Insert an O or an X into the square
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  }

  return (
    <>
      <Board squares={board} onClick={handleClick} />
    </>
  );
}

export default Game;

import React, { useState } from "react";
import { calculateWinner } from "../helper";
import xIcon from "./assets/icon-x.svg";
import oIcon from "./assets/icon-o.svg";
import grayXIcon from "./assets/icon-x-gray.svg";
import grayOIcon from "./assets/icon-o-gray.svg";
import logo from "./assets/logo.svg";
import resetBtn from "./assets/icon-restart.svg";
import Board from "./Board";
import "./Game.css";

function Game(props) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  function handleClick(i) {
    const boardCopy = [...board];
    // If user click a filled in square or if game is won, return
    if (winner || boardCopy[i]) return;
    // Insert an O or an X into the square
    boardCopy[i] = xIsNext ? (
      <img src={xIcon} alt="X icon" />
    ) : (
      <img src={oIcon} alt="O icon" />
    );
    // boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  }

  function resetBoard() {
    return (
      <button
        onClick={() => setBoard(Array(9).fill(null))}
        className="reset-button"
      >
        <img src={resetBtn} alt="reset button" />
      </button>
    );
  }

  return (
    <>
      <div className="game-container">
        <header>
          <img src={logo} alt="picture of tic tac toe logo" className="logo" />
          <div className="turn-display-container">
            <p className="turn-display">
              {winner ? (
                `Winner: ${winner}`
              ) : xIsNext ? (
                <img src={grayXIcon} alt="gray X icon" className="xo-icons" />
              ) : (
                <img src={grayOIcon} alt="gray O icon" className="xo-icons" />
              )}{" "}
              Turn
            </p>
          </div>
          {resetBoard()}
        </header>
        <Board squares={board} onClick={handleClick} />
      </div>
    </>
  );
}

export default Game;

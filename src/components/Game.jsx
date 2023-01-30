/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { calculateWinner } from "../helper";
/* assets */
import grayXIcon from "./assets/icon-x-gray.svg";
import grayOIcon from "./assets/icon-o-gray.svg";
import logo from "./assets/logo.svg";
import resetBtn from "./assets/icon-restart.svg";
/* components */
import Board from "./Board";
import ScoreDisplay from "./ScoreDisplay";
import WinnerModal from "./WinnerModal";
import "./Game.css";

function Game(props) {
  const [squareValue, setSquareValue] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const [xScore, setXScore] = useState(0);
  const [tieScore, setTieScore] = useState(0);
  const [oScore, setOScore] = useState(0);

  const { winner, winningCombination } = calculateWinner(squareValue);

  console.log(squareValue)

  function handleClick(i) {
    const squareValueCopy = [...squareValue];
    // If user click a filled in square or if game is won, return
    if (winner || squareValueCopy[i]) return;
    // Insert an O or an X into the square
    squareValueCopy[i] = xIsNext ? "X" : "O";
    setSquareValue(squareValueCopy);
    setXisNext(!xIsNext);
  }

  function resetBoard() {
    setSquareValue(Array(9).fill(null));
  }

  function resetGameButton() {
    return (
      <button
        onClick={() =>
          setSquareValue(
            Array(9).fill(null),
            setXScore(0),
            setOScore(0),
            setTieScore(0)
          )
        }
        className="reset-button"
      >
        <img src={resetBtn} alt="reset button" />
      </button>
    );
  }

  useEffect(() => {
    if (winner) {
      if (winner === "X") {
        setXScore((score) => score + 1);
      } else if (winner === "O") {
        setOScore((score) => score + 1);
      }
    } else if (winner === null && !squareValue.includes(null)) {
      setTieScore((score) => score + 1);
    }
  }, [winner, squareValue]);

  return (
    <>
      <div className="game-container">
        <header>
          <img src={logo} alt="picture of tic tac toe logo" className="logo" />
          <div className="turn-display-container">
            <div className="turn-display">
              {winner  || winner === null && !squareValue.includes(null) ? (
                <WinnerModal
                  onResetBoard={resetBoard}
                  winner={winner}
                  onShowMenu={props.onShowMenu}
                  squareValue={squareValue}
                />
              ) : xIsNext ? (
                <img src={grayXIcon} alt="gray X icon" className="xo-icons" />
              ) : (
                <img src={grayOIcon} alt="gray O icon" className="xo-icons" />
              )}{" "}
              Turn
            </div>
          </div>
          {resetGameButton()}
        </header>
        <Board
          winningCombination={winningCombination}
          winner={winner}
          squares={squareValue}
          onClick={handleClick}
        />
        <ScoreDisplay xScore={xScore} tieScore={tieScore} oScore={oScore} />
      </div>
    </>
  );
}

export default Game;

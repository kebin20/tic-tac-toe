/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { calculateWinner } from "../../helper";
/* assets */
import grayXIcon from "../assets/icon-x-gray.svg";
import grayOIcon from "../assets//icon-o-gray.svg";
import logo from "../assets/logo.svg";
import resetBtn from "../assets/icon-restart.svg";
/* components */
import PvCBoard from "./PvCBoard";
import PvCScoreDisplay from "./PvCScoreDisplay";
import PvCWinnerModal from "./PvCWinnerModal";
import RestartModal from "../UI/RestartModal";
import "./PvCGame.css";

function PvCGame(props) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xScore, setXScore] = useState(0);
  const [tieScore, setTieScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [restart, setRestart] = useState(false);

  const { winner, winningCombination } = calculateWinner(board);

  // console.log(board);

  function computerPlay(localBoard, icon) {
    // const availableSpaces = localBoard.filter(
    //   (space) => space !== "X" && space !== "O"
    // );
    // console.log(availableSpaces);

    // const move =
    //   availableSpaces[Math.floor(Math.random() * availableSpaces.length)];

    const availableIndices = [];
    localBoard.forEach((space, index) => {
      if (space !== "X" && space !== "O") {
        return availableIndices.push(index);
      }
    });

    const move =
      availableIndices[Math.floor(Math.random() * availableIndices.length)];

    // Need computer to now insert it's assigned icon into the available space
    localBoard[move] = icon;
  }

  function handleClick(i) {
    const boardCopy = [...board];
    // If user click a filled in square or if game is won, return
    if (winner || boardCopy[i]) return;
    // Insert an O or an X into the square depending on the player

    // const cpuValue = props.playerOne === "X" ? "O" : "X";

    let value = "O";
    let cpuValue = "O";


      if (props.playerOne === "X") {
        value = "X";
      } else if (props.playerCpu === "X") {
        cpuValue = "X";
      }

        if (props.playerOne === "O") {
          value = "O";
        } else if (props.playerCpu === "O") {
          cpuValue = "O";
        }


    boardCopy[i] = value;
    // boardCopy[i] = props.playerOne;

    computerPlay(boardCopy, cpuValue);
    setBoard(boardCopy);
  }

  function resetBoard() {
    setBoard(Array(9).fill(null));
  }

  function resetGame() {
    setBoard(Array(9).fill(null), setXScore(0), setOScore(0), setTieScore(0));
    setRestart(false);
  }

  useEffect(() => {
    if (winner) {
      if (winner === "X") {
        setXScore((score) => score + 1);
      } else if (winner === "O") {
        setOScore((score) => score + 1);
      }
    } else if (winner === null && !board.includes(null)) {
      setTieScore((score) => score + 1);
    }
  }, [winner, board]);

  return (
    <>
      <div className="game-container">
        <header>
          <img src={logo} alt="picture of tic tac toe logo" className="logo" />
          <div className="turn-display-container">
            <div className="turn-display">
              {winner || (winner === null && !board.includes(null)) ? (
                <PvCWinnerModal
                  onResetBoard={resetBoard}
                  winner={winner}
                  onShowMenu={props.onShowMenu}
                  onRefreshPage={props.onRefreshPage}
                  board={board}
                  playerOne={props.playerOne}
                  playerCpu={props.playerCpu}
                />
              ) : props.playerOne === "X" ? (
                <img src={grayXIcon} alt="gray X icon" className="xo-icons" />
              ) : (
                <img src={grayOIcon} alt="gray O icon" className="xo-icons" />
              )}
              Turn
            </div>
          </div>
          {restart && (
            <RestartModal
              onRestartGame={resetGame}
              onCancel={() => setRestart(false)}
            />
          )}
          <button onClick={() => setRestart(true)} className="reset-button">
            <img src={resetBtn} alt="reset button" />
          </button>
        </header>
        <PvCBoard
          winningCombination={winningCombination}
          winner={winner}
          board={board}
          onClick={handleClick}
          onComputerPlay={computerPlay}
          playerOne={props.playerOne}
          playerCpu={props.playerCpu}
        />
        <PvCScoreDisplay
          xScore={xScore}
          tieScore={tieScore}
          oScore={oScore}
          playerOne={props.playerOne}
          playerCpu={props.playerCpu}
        />
      </div>
    </>
  );
}

export default PvCGame;

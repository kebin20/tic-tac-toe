/* eslint-disable react/prop-types */
import React from "react";
import "./NewGameMenu.css";
import grayXIcon from "./assets/icon-x-gray.svg";
import darkOIcon from "./assets/icon-o-dark.svg";
import logo from "./assets/logo.svg";

function NewGameMenu(props) {
// const [playerOneIcon, setPlayerOneIcon] = useState("")
// const {playerTwoIcon, setPlayerTwoIcon} = useState("")

// function choosePlayerIcon() {

// }

  return (
    <div className="welcome-menu-container">
      <img src={logo} alt="" className="logo-menu" />
      <div className="pick-mark-container">
        <p className="pick-mark-container__pick-player">Pick player 1 mark</p>
        <div className="pick-xo-btn-container">
          <button className="pick-x-btn">
            <img src={grayXIcon} alt="gray X icon" className="xo-icons-menu" />
          </button>
          <button className="pick-o-btn">
            <img src={darkOIcon} alt="dark O icon" className="xo-icons-menu" />
          </button>
        </div>
        <p className="pick-mark-container__note">Remember: x goes first</p>
      </div>
      <div className="new-game-btn-container">
        <button className="new-game-btn vscpu" disabled>
          New Game (vs cpu)
        </button>
        <button
          className="new-game-btn vsplayer"
          onClick={props.onDisplayMenuHandler}
        >
          New Game (vs player )
        </button>
      </div>
    </div>
  );
}

export default NewGameMenu;

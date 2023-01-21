/* eslint-disable react/prop-types */
import React from "react";
import "./NewGameMenu.css";
import xicon from "./assets/icon-x.svg";
import oicon from "./assets/icon-o.svg";

function NewGameMenu(props) {
  return (
    <div className="welcome-menu-container">
      <div className="logo-container">
        <img src={xicon} alt="x icon" className="logo x-icon" />
        <img src={oicon} alt="o icon" className="logo o-icon" />
      </div>
      <div className="pick-mark-container">
        <p className="pick-mark-container__pick-player">Pick player 1 mark</p>
        <div className="pick-xo-btn-container">
          <button className="pick-x-btn">X</button>
          <button className="pick-o-btn">O</button>
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

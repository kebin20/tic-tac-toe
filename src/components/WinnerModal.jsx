import React from "react";
import "./WinnerModal.css";
// import xIcon from "./assets/icon-x.svg";
import oIcon from "./assets/icon-o.svg";

function WinnerModal(props) {
  return (
    <div className="backdrop">
      <div className="winner-modal">
        <p className="show-winner-message">Player 1 Wins!</p>
        <div className="show-winner-icon-container">
          <img src={oIcon} alt="" className="winner-icon" />
          <p className="winner-icon-message">takes the round</p>
        </div>
        <div className="winner-modal-button-container">
          <button className="quit-button">Quit</button>
          <button className="next-round-button">Next Round</button>
        </div>
      </div>
    </div>
  );
}

export default WinnerModal;

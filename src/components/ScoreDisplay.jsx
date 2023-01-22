/* eslint-disable react/prop-types */
import React from "react";
import "./ScoreDisplay.css";

function ScoreDisplay(props) {
  return (
    <div className="score-display">
      <div className="x-score score">
        <p>X (P2)</p>
        <p className="score-number">{props.xScore}</p>
      </div>
      <div className="tie-score score">
        <p>Ties</p>
        <p className="score-number">{props.tieScore}</p>
      </div>
      <div className="o-score score">
        <p>O (P1)</p>
        <p className="score-number">{props.oScore}</p>
      </div>
    </div>
  );
}

export default ScoreDisplay;

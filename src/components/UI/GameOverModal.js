import React from "react";
import ScoreStar from "./ScoreStar";

import "./GameOverModal.css";

export default function GameOverModal(props) {
  if (!props.open) return null;
  return (
    <div className="game-over-modal-container">
      <div className="game-over-modal-wrapper bounce">
        <img
          className="game-over-banner"
          src="./img/game-over-banner.png"
          alt=""
        />
        <ScoreStar score={props.score} />
        <div className="endgame-text">
          {/* <p>Your Score is {props.score}</p> */}
          <p>You matched {props.matches} Pokemon!</p>
          <p>and made {props.errors} mistakes</p>
        </div>
      </div>
    </div>
  );
}

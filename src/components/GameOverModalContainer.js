import React from "react";
import GameOverModal from "./GameOverModal";

import "./GameOverModal.css";

export default function GameOverModalContainer(props) {
  if (!props.open) return null;
  return (
    <div className="modal-wrapper">
      <div className="star-container">
        <img className="score-star" src="./img/star.png" alt="" />
        <img
          className="score-star score-star-push"
          src="./img/star.png"
          alt=""
        />
        <img className="score-star" src="./img/star.png" alt="" />
      </div>
    </div>
  );
}

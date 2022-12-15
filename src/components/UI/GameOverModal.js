import React from "react";
import ScoreStar from "./ScoreStar";

import "./GameOverModal.css";

export default function GameOverModal(props) {
  if (!props.open) return null;
  return (
    <div className="modal-wrapper">
      <ScoreStar stars="2" />
    </div>
  );
}

import React from "react";
import GameOverModal from "./GameOverModal";

import "./GameOverModal.css";

export default function GameOverModalContainer(props) {
  if (!props.open) return null;
  return <div className="modal-wrapper">GameOverModalContainer</div>;
}

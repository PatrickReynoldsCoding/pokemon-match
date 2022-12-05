import React from "react";
import "./Card.css";

export default function Card(props) {
  const handleClick = () => {
    props.handleChoice(props.card);
  };
  return (
    <div className="card">
      <div className="">
        <img className="front" src={props.card.src} alt="card front" />
        <img
          className="back"
          src="/card_images/cover.png"
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

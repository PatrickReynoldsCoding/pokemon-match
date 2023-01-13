import React from "react";
import ScoreStar from "./ScoreStar";

import "./CSS/GameOverModal.css";

export default function GameOverModal(props) {
  let matchedPokemon = [];

  const pokeCatcher = () => {
    props.cards.map((card) => {
      if (card.matched)
        matchedPokemon.push(`${card.src[13]}${card.src[14]}${card.src[15]}`);
      // ** only push if unique
    });
  };

  const pokePicker = () => {
    // ** enter code for pulling images
    // if 1 match then "you caught ${matchedPokemon.name}"
    // if 6 match then "Wow you caught all 6 pokemon"
    // if 2 stars then you get to pick 3 pokemon
  };

  const saveCaughtPokemon = () => {
    // ** save to cookies the pokemon listed in matchedPokemon
  };

  if (!props.open) return null;
  return (
    <div className="game-over-modal-container">
      <div className="game-over-modal-wrapper bounce-from-top">
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
          {pokeCatcher()}
          {console.log(matchedPokemon)}
        </div>
      </div>
    </div>
  );
}

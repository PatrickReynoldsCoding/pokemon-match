import React from "react";

import "./CSS/PokeDexModal.css";

export default function PokeDexAllMonsIcon(props) {
  return (
    <div className={props.caught ? "caught" : "not-caught"}>
      <img className="pokedex-icon" src={props.image} alt="card front" />
    </div>
  );
}

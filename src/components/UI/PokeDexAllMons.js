import React from "react";

import "./CSS/PokeDexModal.css";

// components
import PokeDexAllMonsIcon from "./PokeDexAllMonsIcon";

export default function PokeDexAllMons(props) {
  return (
    <div className="all-mons-wrapper">
      {props.pullAllMons().map((pokemon) => (
        <PokeDexAllMonsIcon key={Math.random()} image={pokemon.src} />
      ))}
    </div>
  );
}

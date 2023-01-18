import React from "react";

import "./CSS/PokeDexModal.css";

// components
import PokeDexAllMons from "./PokeDexAllMons";

export default function PokedexModal(props) {
  const handleClick = () => {
    props.togglePokedex();
  };

  if (!props.open) return null;
  return (
    <div className="pokedex-modal-container" onClick={handleClick}>
      <div className="pokedex-modal-wrapper slide-from-left">
        <div className="pokedex-img">
          <div className="pokedex-screen">
            <PokeDexAllMons pullAllMons={props.pullAllMons} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

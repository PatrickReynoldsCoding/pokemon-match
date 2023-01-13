import React from "react";

import "./CSS/PokeDexModal.css";

// components
import PokeDexAllMons from "./PokeDexAllMons";

export default function PokedexModal(props) {
  if (!props.open) return null;
  return (
    <div className="pokedex-modal-container">
      <div className="pokedex-modal-wrapper slide-from-left">
        <div className="pokedex-body-top">
          <div className="big-button"></div>
          <div className="small-button-1"></div>
          <div className="small-button-2"></div>
          <div className="small-button-3"></div>
        </div>
        <div className="pokedex-body-right"></div>
        {/* <div className="pokedex-screen">
   
        </div>
        <PokeDexAllMons pullAllMons={props.pullAllMons} /> */}
      </div>
    </div>
  );
}

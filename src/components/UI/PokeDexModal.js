import React from "react";

import "./PokeDexModal.css";

// components
import PokeDexAllMons from "./PokeDexAllMons";

export default function PokedexModal(props) {
  if (!props.open) return null;
  return (
    <div className="pokedex-modal-container">
      <div className="pokedex-modal-wrapper slide-from-left">
        <div className="pokedex-screen">
          {/* *** add green pixitaled filter */}
        </div>
        <PokeDexAllMons />
      </div>
    </div>
  );
}
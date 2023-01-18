import React, { useEffect, useState } from "react";

import "./CSS/PokeDexModal.css";

// components
import PokeDexAllMons from "./PokeDexAllMons";

export default function PokedexModal(props) {
  const [transitionOut, setTransitionOut] = useState(false);

  const closePokedex = () => {
    setTransitionOut(!transitionOut);
    setTimeout(() => {
      props.togglePokedex();
      setTransitionOut(false);
    }, 1500);
  };

  if (!props.open) return null;
  return (
    <div className="pokedex-modal-container" onClick={closePokedex}>
      <div
        className={
          transitionOut
            ? "pokedex-modal-wrapper slide-out-from-center"
            : "pokedex-modal-wrapper slide-from-left"
        }
      >
        <div className="pokedex-img">
          <div className="pokedex-screen">
            <PokeDexAllMons pullAllMons={props.pullAllMons} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

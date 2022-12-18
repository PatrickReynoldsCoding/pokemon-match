import React from "react";

import "./PokeDexModal.css";

// components
import PokeDexAllMonsIcon from "./PokeDexAllMonsIcon";

export default function PokeDexAllMons() {
  const pullAllMons = () => {
    let allMons = [];
    let i = 1;

    while (i < 151) {
      let currentId = i;
      if (currentId.toString().length === 3) currentId = currentId.toString();
      if (currentId.toString().length === 2) currentId = `0${currentId}`;
      if (currentId.toString().length === 1) currentId = `00${currentId}`;

      allMons.push({
        src: `/card_images/${currentId}.png`,
        caught: false,
      });

      i++;
    }

    return allMons;
  };

  return (
    <div className="all-mons-wrapper">
      {pullAllMons().map((icon) => (
        <PokeDexAllMonsIcon key={""} image={icon.src} />
      ))}
    </div>
  );
}

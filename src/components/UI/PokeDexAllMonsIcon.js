import React from "react";

import "./PokeDexModal.css";

export default function PokeDexAllMonsIcon(props) {
  return (
    <div className="">
      <img className="icon" src={props.image} alt="card front" />
    </div>
  );
}

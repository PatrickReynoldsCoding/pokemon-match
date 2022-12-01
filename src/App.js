import React, { useState } from "react";

// // random pokemon number generator selector

let cardImages = [];
let usedPokemon = [];

for (let i = 0; i < 6; i++) {
  //random number selector between 1-151
  const randPokeSelector = () => {
    let randNum = Math.floor(Math.random() * 145 + i);
    if (randNum.toString().length === 3) return randNum.toString();
    if (randNum.toString().length === 2) return `0${randNum}`;
    if (randNum.toString().length === 1) return `00${randNum}`;
  };

  let currentPokemon = randPokeSelector();

  if (!usedPokemon.includes(currentPokemon)) usedPokemon.push(currentPokemon);
  cardImages.push({
    src: `/card_images/${currentPokemon}.png`,
    matched: true,
  });
}

console.log(cardImages);
function App() {
  return <div className=""></div>;
}

export default App;

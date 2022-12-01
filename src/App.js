import React, { useState } from "react";

// // random pokemon number generator selector

const cardImages = [];

for (let i = 0; i < 6; i++) {
  const randPokeSelector = () => {
    let randNum = Math.floor(Math.random() * (145 - 1 + 1) + i);
    if (randNum.toString().length === 3) return randNum.toString();
    if (randNum.toString().length === 2) return `0${randNum}`;
    if (randNum.toString().length === 1) return `00${randNum}`;
  };

  cardImages.push({
    src: `/card_images/${randPokeSelector()}.png`,
    matched: true,
  });
}

console.log(cardImages);
function App() {
  return <div className=""></div>;
}

export default App;

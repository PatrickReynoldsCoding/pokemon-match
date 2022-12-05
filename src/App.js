import React, { useEffect, useState } from "react";
import "./App.css";

// Components
import Card from "./Card";

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choice1, setChoice1] = useState(null);
  const [choice2, setChoice2] = useState(null);

  // random pokemon number generator selector
  const shuffleCards = () => {
    let sixChosenMons = [];
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

      if (!usedPokemon.includes(currentPokemon)) {
        usedPokemon.push(currentPokemon);
        sixChosenMons.push({
          src: `/card_images/${currentPokemon}.png`,
          matched: true,
          bomb: false,
        });
      }
    }
    let fullDeck = [...sixChosenMons, ...sixChosenMons];
    for (let i = 0; i < 4; i++) {
      fullDeck.push({
        src: `/card_images/Teamrockettrio.webp`,
        matched: true,
        bomb: true,
      });
    }
    fullDeck
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    return fullDeck;
  };

  // return cardImages;
  useEffect(() => {
    setCards(shuffleCards);
  }, []);

  const handleChoice = (card) => {
    console.log(card);
  };

  console.log(cards);
  return (
    <div className="App">
      <h1>Pokemon Match!</h1>
      <div>
        <button onClick={shuffleCards}>New Game</button>
        <div className="card-grid">
          {cards.map((card) => (
            <Card key={card.id} card={card} handleChoice={handleChoice} />
          ))}
        </div>
        {/* <p>Turns : {turns}</p> */}
      </div>
    </div>
  );
}
export default App;

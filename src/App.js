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
    let i = 1;

    while (sixChosenMons.length < 6) {
      //random number selector between 1-151
      const randPokeSelector = () => {
        let randNum = Math.floor(Math.random() * 145 + i);
        if (randNum.toString().length === 3) return randNum.toString();
        if (randNum.toString().length === 2) return `0${randNum}`;
        if (randNum.toString().length === 1) return `00${randNum}`;
      };

      let currentPokemon = randPokeSelector();
      console.log(currentPokemon);
      if (!usedPokemon.includes(currentPokemon)) {
        usedPokemon.push(currentPokemon);
        sixChosenMons.push({
          src: `/card_images/${currentPokemon}.png`,
          matched: false,
          bomb: false,
        });
      }
      i++;
      // console.log(sixChosenMons);
    }
    let fullDeck = [...sixChosenMons, ...sixChosenMons];
    // add 4 bombs
    for (let i = 0; i < 4; i++) {
      fullDeck.push({
        src: `/card_images/Teamrockettrio.webp`,
        matched: false,
        bomb: true,
      });
    }
    // console.log(fullDeck);

    fullDeck
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    console.log(fullDeck);
    setCards(fullDeck);
  };

  // run shuffleCards to load 16 cards;
  useEffect(() => {
    shuffleCards();
  }, []);

  // load card to choice states
  const handleChoice = (card) => {
    choice1 ? setChoice2(card) : setChoice1(card);
  };

  // run match function if 2 cards are picked
  useEffect(() => {
    bombCheck(choice1, choice2);

    //end game function if bombCheckw is picked
  }, [choice1, choice2]);

  // checks if the two cards match

  // bomb function
  const bombCheck = (choice1, choice2) => {
    if (choice1) {
      choice1.bomb ? console.log("game over") : console.log("all good");
    }
    if (choice2) {
      choice2.bomb ? console.log("game over") : console.log("all good");
    }
  };
  // console.log(cards);

  return (
    <div className="App">
      <h1>Pokemon Match!</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <Card key={Math.random()} card={card} handleChoice={handleChoice} />
        ))}
      </div>
      {/* <p>Turns : {turns}</p> */}
    </div>
  );
}
export default App;

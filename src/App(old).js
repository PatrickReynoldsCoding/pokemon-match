import React, { useEffect, useState } from "react";
import "./App.css";

// Components
import Card from "./components/Card.js";

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choice1, setChoice1] = useState(null);
  const [choice2, setChoice2] = useState(null);
  const [cardEnabler, setCardEnabler] = useState(true);

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
      if (!usedPokemon.includes(currentPokemon)) {
        usedPokemon.push(currentPokemon);
        sixChosenMons.push({
          src: `/card_images/${currentPokemon}.png`,
          matched: true,
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
        matched: true,
        bomb: true,
      });
    }
    // console.log(fullDeck);

    fullDeck
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    // console.log(fullDeck);
    setChoice1(null);
    setChoice2(null);
    setCards(fullDeck);
    setTurns(0);
    setTimeout(() => {
      gameStartCardFlipper();
    }, 5000);
  };

  //Start Game
  useEffect(() => {
    shuffleCards();
  }, []);

  // load card to choice states
  const handleChoice = (card) => {
    choice1 ? setChoice2(card) : setChoice1(card);
  };
  const clearChoices = (choice1, choice2) => {
    if (choice1 && choice2 !== null) {
      setChoice1(null);
      setChoice2(null);
      setCardEnabler(true);
    }
  };
  // run match function if 2 cards are picked
  useEffect(() => {
    // bombCheck(choice1, choice2);
    reviewChoices(choice1, choice2);

    //end game function if bombCheck is picked
  }, [choice1, choice2]);

  // checks if the two cards match
  // const reviewChoices = (choice1, choice2) => {
  //   if (choice1 && choice2) {
  //     setCardEnabler(false);
  //     if (choice1.src === choice2.src) {
  //       setCards((prevCards) => {
  //         return prevCards.map((card) => {
  //           if (card.src === choice1.src) {
  //             return { ...card, matched: true };
  //           } else {
  //             return card;
  //           }
  //         });
  //       });
  //     }
  //     setTimeout(() => {
  //       setChoice1(null);
  //       setChoice2(null);
  //       setCardEnabler(true);
  //     }, 1000);
  //     setTurns(turns + 1);
  //   }
  // };

  const reviewChoices = (choice1, choice2) => {
    if (choice1 && choice2) {
      matchChecker(choice1, choice2);
      setTimeout(() => clearChoices(choice1, choice2), 1000);

      setTurns(turns + 1);
      // console.log(choice1, choice2, turns);
    }
  };
  //match checker
  const matchChecker = (choice1, choice2) => {
    if (choice1 && choice2) {
      setCardEnabler(false);
      if (choice1.src === choice2.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choice1.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
      }
    }
  };
  // bomb function
  const bombCheck = (choice1, choice2) => {
    if (choice1 && choice2) {
      if (choice1.bomb && choice2.bomb) gameOver();
    }
  };

  // Game Over function
  const gameOver = () => {
    alert("Game Over");
  };
  // game start flipper
  const gameStartCardFlipper = () => {
    setCards((prevCards) => {
      return prevCards.map((card) => {
        return { ...card, matched: false };
      });
    });
  };

  return (
    <div className="App">
      <h1>Pokemon Match!</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <Card
            key={Math.random()}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choice1 || card === choice2 || card.matched}
            enabled={cardEnabler}
          />
        ))}
      </div>
      <p>Turns : {turns}</p>
    </div>
  );
}
export default App;

import { useEffect, useState } from "react";
import "./App.css";

//components
import Card from "./components/GameAssets/Card";
import GameOverModal from "./components/UI/GameOverModal";

function App() {
  const [cards, setCards] = useState([]);
  // const [turns, setTurns] = useState(0);
  const [choice1, setChoice1] = useState(null);
  const [choice2, setChoice2] = useState(null);
  const [cardEnabler, setCardEnabler] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);

  const [matches, setMatches] = useState(0);
  const [errorCounter, setErrorCounter] = useState(0);
  const [bomb, setBomb] = useState(false);

  // shuffle cards for new game
  // random pokemon number generator selector
  const shuffleCards = () => {
    let sixChosenMons = [];
    let usedPokemon = [];
    let i = 1;
    setIsGameOver(false);

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
        src: `/card_images/Teamrockettrio.png`,
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
    setErrorCounter(0);
    setMatches(0);
    setBomb(0);
    // setTurns(0);
    setTimeout(() => {
      gameStartCardFlipper();
    }, 1000);
  };

  // remember choice
  const handleChoice = (card) => {
    choice1 ? setChoice2(card) : setChoice1(card);
    if (card.bomb) {
      setTimeout(() => {
        gameOver();
      }, 500);
    }
  };

  //review choices
  useEffect(() => {
    reviewChoices(choice1, choice2);
  }, [choice1, choice2]);

  const reviewChoices = (choice1, choice2) => {
    if (choice1 && choice2) {
      bombCheck(choice1, choice2);
      matchChecker(choice1, choice2);
      setTimeout(() => clearChoices(choice1, choice2), 1000);
      console.log(errorCounter);
      // setTurns(turns + 1);
      // console.log(choice1, choice2, turns);
    }
  };
  // bomb function
  const bombCheck = (choice1, choice2) => {
    if (choice1 && choice2) {
      if (choice1.bomb && choice2.bomb) {
        gameOver();
        setBomb(true);
      }
    }
  };

  // Game Over function
  const gameOver = () => {
    setTimeout(() => {
      setIsGameOver(true);
    }, 1000);
  };

  useEffect(() => {
    if (matches === 6) gameOver(true);
  }, [matches]);
  //match checker
  const matchChecker = (choice1, choice2) => {
    if (choice1 && choice2) {
      setCardEnabler(false);
      if (choice1.src === choice2.src) {
        setMatches(matches + 1);
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choice1.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
      } else {
        setErrorCounter((prevCount) => {
          return prevCount + 1;
        });
      }
    }
  };

  console.log(matches);

  // clear choices
  const clearChoices = (choice1, choice2) => {
    if (choice1 && choice2 !== null) {
      setChoice1(null);
      setChoice2(null);
      setCardEnabler(true);
    }
  };

  // starting game card flipper
  const gameStartCardFlipper = () => {
    setCards((prevCards) => {
      return prevCards.map((card) => {
        return { ...card, matched: false };
      });
    });
  };

  // starts first game automatically

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="App">
      <GameOverModal
        open={isGameOver}
        score={bomb ? 20 - errorCounter : 20 - errorCounter - 11 + matches}
        errors={errorCounter}
        matches={matches}
        bomb={bomb}
      />
      <h1>Pokemon Pairs!</h1>
      <button onClick={shuffleCards}>New Game</button>
      {/* <p>Turns : {turns}</p> */}
      <div className="card-grid">
        {cards.map((card) => (
          <Card
            key={Math.random()}
            handleChoice={handleChoice}
            card={card}
            flipped={card === choice1 || card === choice2 || card.matched}
            enabled={cardEnabler}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Header from "./components/Header";
import Game from "./components/Game";
import Results from "./components/Results";
import RoundResultModal from "./components/RoundResultModal";
import "./App.css";

function App() {
  const players = {
    player1: "Player 1",
    player2: "Player 2",
  };
  const [rounds, setRounds] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [currentRound, setCurrentRound] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentRoundResult, setCurrentRoundResult] = useState(null);

  const addRound = (round) => {
    setRounds([...rounds, round]);
    setCurrentRoundResult(round);
    setModalIsOpen(true);
    if (rounds.length + 1 === 6) {
      setGameOver(true);
    } else {
      setCurrentRound(currentRound + 1);
    }
  };

  return (
    <div className="App">
      <Header players={players} />
      {!gameOver ? (
        <>
          <Game
            players={players}
            addRound={addRound}
            currentRound={currentRound}
          />
          <RoundResultModal
            isOpen={modalIsOpen}
            roundResult={currentRoundResult}
          />
        </>
      ) : (
        <Results rounds={rounds} players={players} />
      )}
    </div>
  );
}

export default App;

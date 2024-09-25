import React, { useState } from "react";

function Game({ players, addRound, currentRound }) {
  const [player1Choice, setPlayer1Choice] = useState("");
  const [player2Choice, setPlayer2Choice] = useState("");

  const handleChoice = (player, choice) => {
    if (player === "player1") {
      setPlayer1Choice(choice);
    } else {
      setPlayer2Choice(choice);
    }
  };

  const determineWinner = () => {
    if (player1Choice === player2Choice) return "Tie";
    if (
      (player1Choice === "Stone" && player2Choice === "Scissors") ||
      (player1Choice === "Scissors" && player2Choice === "Paper") ||
      (player1Choice === "Paper" && player2Choice === "Stone")
    ) {
      return players.player1;
    } else {
      return players.player2;
    }
  };

  const handleRound = () => {
    const winner = determineWinner();
    addRound({ player1Choice, player2Choice, winner });
    setPlayer1Choice("");
    setPlayer2Choice("");
  };

  return (
    <>
      <h2 className="roundc">Round {currentRound}</h2>
      <div className="game">
        <div className="player">
          <h3>{players.player1}</h3>
          <button onClick={() => handleChoice("player1", "Stone")}>
            Stone
          </button>
          <button onClick={() => handleChoice("player1", "Paper")}>
            Paper
          </button>
          <button onClick={() => handleChoice("player1", "Scissors")}>
            Scissors
          </button>
        </div>
        <div className="player">
          <h3>{players.player2}</h3>
          <button onClick={() => handleChoice("player2", "Stone")}>
            Stone
          </button>
          <button onClick={() => handleChoice("player2", "Paper")}>
            Paper
          </button>
          <button onClick={() => handleChoice("player2", "Scissors")}>
            Scissors
          </button>
        </div>
      </div>
      <button onClick={handleRound} className="submit">
        Submit Round
      </button>
    </>
  );
}

export default Game;

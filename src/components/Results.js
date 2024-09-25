import React from "react";

function Results({ rounds, players }) {
  const player1Wins = rounds.filter(
    (round) => round.winner === players.player1
  ).length;
  const player2Wins = rounds.filter(
    (round) => round.winner === players.player2
  ).length;

  return (
    <div className="results">
      <h2 className="gameover">Game Over</h2>
      <p>
        {players.player1} Wins: {player1Wins}
      </p>
      <p>
        {players.player2} Wins: {player2Wins}
      </p>
      <p>
        {player1Wins === player2Wins ? (
          <p className="drawtext">Match draw!!!</p>
        ) : player1Wins > player2Wins ? (
          <p className="winnertext">Winner is {players.player1}</p>
        ) : (
          <p className="winnertext">Winner is {players.player2}</p>
        )}
      </p>
    </div>
  );
}

export default Results;

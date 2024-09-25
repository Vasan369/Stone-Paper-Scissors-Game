import React from "react";

function RoundResultModal({ isOpen, roundResult }) {
  if (!roundResult) return null;

  return (
    <div isOpen={isOpen}>
      <h2>Round Result</h2>
      <p>Player 1 chose : {roundResult.player1Choice}</p>
      <p>Player 2 chose : {roundResult.player2Choice}</p>
      <p>Winner : {roundResult.winner}</p>
    </div>
  );
}

export default RoundResultModal;

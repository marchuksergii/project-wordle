import React, { useState } from 'react';

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessForm from "../GuessForm";
import GuessResults from "../GuessResults";
import LostBanner from "../LostBanner";
import WonBanner from "../WonBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = useState([]);
  const isWon = results?.some(guess => guess === answer);
  const isLost = results?.length === NUM_OF_GUESSES_ALLOWED && !isWon;
  const gameEnded = isLost || isWon;

  return (
    <>
      <GuessResults answer={answer} results={results} />
      <GuessForm setResults={setResults} gameEnded={gameEnded} />
      {isWon && <WonBanner attempts={results?.length} />}
      {isLost && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;

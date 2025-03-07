import React from 'react';

import { GUESS_LENGTH } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess = '', answer = '' }) {
  const guessLengthRange = range(GUESS_LENGTH);
  const splittedGuess = guess?.split('');
  const guessData = checkGuess(guess, answer);
  
  return (
    <p className="guess">
      {guessLengthRange?.map(index => (
        <span
          key={index}
          className={`cell${guessData ? ` ${guessData[index].status}` : ''}`}
        >
          {splittedGuess[index]}
        </span>
      ))}
    </p>
  )
}

export default Guess;

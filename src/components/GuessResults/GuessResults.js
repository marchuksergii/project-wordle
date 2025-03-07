import React from 'react';

import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessResults({ results, answer }) {
  const numberOfGuessesRange = range(NUM_OF_GUESSES_ALLOWED);
  
  return (
    <div className="guess-results">
      {numberOfGuessesRange?.map(index => (
        <Guess key={index} guess={results[index]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;

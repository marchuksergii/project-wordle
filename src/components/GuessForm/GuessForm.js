import React, { useState } from 'react';

import { GUESS_LENGTH } from "../../constants";

function GuessForm({ setResults, gameEnded }) {
  const [guess, setGuess] = useState('');

  function handleSubmit(event) {
    event?.preventDefault();
    setResults(prevResults => [...prevResults, guess]);
    setGuess('');
  }
  
  function handleChange(event) {
    const { value } = event?.target || {};
    setGuess(value?.toUpperCase());
  }
  
  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input"
        type="text"
        onChange={handleChange}
        value={guess}
        pattern={`^.{${GUESS_LENGTH}}$`}
        maxLength={GUESS_LENGTH}
        required
        disabled={gameEnded}
      />
    </form>
  );
}

export default GuessForm;

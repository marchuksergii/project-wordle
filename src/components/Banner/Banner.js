import React from 'react';

function Banner({ resultsLength, answer, isWon, isLost }) {
  const className = isWon ? 'happy' : isLost ? 'sad' : '';

  return isLost || isWon ? (
    <div className={`${className ? className : ''} banner`}>
      {isWon && (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {resultsLength} guesses</strong>.
        </p>
      )}
      {isLost && (
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      )}
    </div>
  ) : null;
}

export default Banner;

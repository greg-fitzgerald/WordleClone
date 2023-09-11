import React from 'react';
import {checkGuess} from '../../game-helpers'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Guess({guess, setGuess, guessList, setGuessList, answer, gameStatus, setGameStatus}) {
  
  function handleSubmit(event) {
    event.preventDefault();

    
    setGuessList([...guessList, checkGuess(guess, answer)])
    
    if (guess == answer) { 
      setGameStatus('W');
    } else if (guessList.length == NUM_OF_GUESSES_ALLOWED - 1) {
      setGameStatus('L')
    }

    setGuess('')
  }

  const disable = gameStatus != 'In Progress' ? true : false;

  return (

    // <form className="guess-input-wrapper" onSubmit={setGuessList([...guessList, guess])}>
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input"
        type="text"
        value={guess}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        required
        disabled={disable}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase())
        }}
      />
    </form>

  );
}

export default Guess;

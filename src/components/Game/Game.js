import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guess from '../Guess'
import PreviousGuesses from '../PreviousGuesses'



// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('')
  const [guessList, setGuessList] = React.useState([])

  return (
    <div>
      <PreviousGuesses guessList={guessList}/>
      <Guess guess={guess} setGuess={setGuess} guessList={guessList} setGuessList={setGuessList}/>
    </div>
  );
}

export default Game;

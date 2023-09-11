import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guess from '../Guess'
import Banner from '../Banner'
import PreviousGuesses from '../PreviousGuesses'



// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('')
  const [guessList, setGuessList] = React.useState([])
  const [gameStatus, setGameStatus]  = React.useState('In Progress')

  let banner;

  if (gameStatus != 'In Progress') {
    banner = <Banner gameStatus={gameStatus} guessList={guessList} answer={answer}/>
  }


  return (
    <div>
      <PreviousGuesses guessList={guessList}/>

      {banner}

      <Guess guess={guess} setGuess={setGuess} guessList={guessList} setGuessList={setGuessList} answer={answer} gameStatus={gameStatus} setGameStatus={setGameStatus}/>
    </div>
  );
}

export default Game;

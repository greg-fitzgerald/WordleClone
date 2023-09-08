import React from 'react';
import PreviousGuess from '../PreviousGuess'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';


function PreviousGuesses({guessList}) {

  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        // check to see if there is a entry for that index, otherwise make it blank
        const guess = guessList[index] != undefined ? guessList[index] : '     '

        return <PreviousGuess key={index} guess={guess}/>
      })}
    </div>
  );
}

export default PreviousGuesses;

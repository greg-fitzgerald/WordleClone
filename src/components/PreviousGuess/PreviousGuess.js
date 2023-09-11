import React from 'react';
import { range } from '../../utils';


function PreviousGuess({guess}) {

  return (
    <div className='guess'>
      {range(5).map(index => {

        let status = "cell " + guess[index].status;

        return <span className={status} key={index}>{guess[index].letter}</span>
      })}
    </div>
  );
}

export default PreviousGuess;

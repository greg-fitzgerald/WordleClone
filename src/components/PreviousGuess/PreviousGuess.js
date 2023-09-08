import React from 'react';
import { range } from '../../utils';

function PreviousGuess({guess}) {

  return (
    <div className='guess'>
      {range(5).map(index => {
        return <span className='cell' key={index}>{guess.charAt(index)}</span>
      })}
    </div>
  );
}

export default PreviousGuess;

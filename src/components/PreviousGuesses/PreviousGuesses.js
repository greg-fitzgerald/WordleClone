import React from 'react';

function PreviousGuesses({guessList}) {

  return (
    <div className='guess-results'>
      {guessList.map((item, index) => (<p key={index} className='guess'>{item}</p>))}
    </div>
  );
}

export default PreviousGuesses;

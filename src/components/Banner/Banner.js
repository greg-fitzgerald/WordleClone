import React from 'react';

function Banner({gameStatus, guessList, answer}) {
  
  let banner;

  if (gameStatus == 'W') {
    banner = <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {guessList.length} guesses</strong>.
      </p>
    </div>
  } else {
    banner = <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>
  }

  return (
    <div>{banner}</div>
  );
}

export default Banner;

import React, { useState } from 'react';

const BandCard = () => {
  const [ bandLikes, setBandLikes ] = useState(0)
  const incLikes = () => setBandLikes(bandLikes + 1)

  return (
    <div>
      <h3>Band Likes: {bandLikes}</h3>
      <button onClick={incLikes}>
        Like it!
      </button>
    </div>
  );
}

export default BandCard;

import React, { useState } from 'react';

export default function Flashcard({ front, back }) {
  const [flipped, setFlipped] = useState(false);

  function handleCardClick() {
    setFlipped(!flipped);
  }

  return (
    <div className={`vocab-card m-4 ${flipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="vocab-card-inner d-flex">
        <div className="vocab-card-front fw-bold">{front}</div>
        <div className="vocab-card-back">{back}</div>
      </div>
    </div>
  );
}
import React from 'react';

export default function Flashcard(front, back) {
  return (
    <div className="vocab-card m-4">
      <div className="vocab-card-inner d-flex">
        <div className="vocab-card-front fw-bold">{front}</div>
        <div className="vocab-card-back">{back}</div>
      </div>
    </div>
  );
}


import React from 'react';
import Flashcard from './Flashcard';

export default function Deck({ flashcards }) {
  return (
    <div className="container mt-5 justify-content-center d-flex flex-row flex-wrap">
      {flashcards.map((flashcard, index) => (
        <Flashcard key={index} front={flashcard.front} back={flashcard.back} />
      ))}
    </div>
  );
};


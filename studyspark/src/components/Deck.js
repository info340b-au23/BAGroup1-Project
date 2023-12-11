import React from 'react';
import { getDatabase, ref } from 'firebase/database';



export default function Deck({ flashcards }) {
  return (
    <div className="container mt-5 justify-content-center d-flex flex-row flex-wrap">
      {flashcards.map((flashcard, index) => (
        <Flashcard key={index} front={flashcard.front} back={flashcard.back} />
      ))}
    </div>
  );
};


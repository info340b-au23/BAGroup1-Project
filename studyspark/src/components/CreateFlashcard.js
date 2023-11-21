import React, { useState } from 'react';
import '../style.css';

export default function CreateFlashcard({ create }) { // pass in create flashcard callback function (in app js?) might change to just create here
  const [frontValue, setFrontValue] = useState('');
  const [backValue, setBackValue] = useState('');

  function addFlashcard() {
    if (frontValue && backValue) { // not allowed to create empty flashcards?
      create({ front: frontValue, back: backValue });
      setFrontValue('');
      setBackValue('');
    }
  }

  return (
    <div>
      <h1>Create Flashcards</h1>
      <div>
        <label>Front Value:</label>
        <input
          type="text"
          value={frontValue}
          onChange={(e) => setFrontValue(e.target.value)}
        />
      </div>
      <div>
        <label>Back Value:</label>
        <input
          type="text"
          value={backValue}
          onChange={(e) => setBackValue(e.target.value)}
        />
      </div>
      <button onClick={addFlashcard}>Create Flashcard</button>
    </div>
  );
}

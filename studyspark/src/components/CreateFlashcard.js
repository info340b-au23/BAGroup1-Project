import React, { useState } from "react";

export default function CreateFlashcard({ create, close, onFormSubmit }) {
  const [frontVal, setFrontVal] = useState("");
  const [backVal, setBackVal] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    create(frontVal, backVal);
    setFrontVal("");
    setBackVal("");
    onFormSubmit(); // keep form from closing after creation
  }

  return (
    <form onSubmit={handleSubmit} className="p-3 bg-dark rounded-4 mb-4">
      <h1>Create Flashcard</h1>
      <div className="mb-3">
        <label className="form-label">Front Value:</label>
        <input
          type="text"
          id="front-val"
          className="form-control"
          value={frontVal}
          onChange={(e) => setFrontVal(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Back Value:</label>
        <input
          type="text"
          id="back-val"
          className="form-control"
          value={backVal}
          onChange={(e) => setBackVal(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Create
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => {
          close();
        }}
      >
        Cancel
      </button>
    </form>
  );
}

/*
export default function CreateFlashcard({ create }) {
  // pass in create flashcard callback function (in app js?) might change to just create here
  const [frontValue, setFrontValue] = useState("");
  const [backValue, setBackValue] = useState("");

  function addFlashcard() {
    if (frontValue && backValue) {
      // not allowed to create empty flashcards?
      create({ front: frontValue, back: backValue });
      setFrontValue("");
      setBackValue("");
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
*/

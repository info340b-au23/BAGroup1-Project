import React, { useState, useEffect } from "react";
import DeckCard from "./DeckCard";
import { getDatabase, ref, onValue, push, remove } from "firebase/database";

export default function Decks(props) {
  const [showForm, setShowForm] = useState(false);
  const [decks, setDecks] = useState(null);
  useEffect(() => {
    const db = getDatabase();
    const decksRef = ref(db, `users/${props.currentUser.uid}/decks`);
    const offFunction = onValue(decksRef, (snapshot) => {
      const valueObj = snapshot.val();
      if (valueObj !== null) {
        const objKeys = Object.keys(valueObj);
        const objArray = objKeys.map((keyString) => {
          const deckObj = valueObj[keyString];
          deckObj.key = keyString;
          return deckObj;
        });
        setDecks(objArray);
      } else {
        setDecks(null);
      }
    });

    function cleanup() {
      console.log("Component is being removed");
      offFunction();
    }

    return cleanup;
  }, []);

  function handleEditDecks() {
    setShowForm(!showForm);
  }

  function handleRemoveDeck(deckKey) {
    const db = getDatabase();
    const deckRef = ref(db, `users/${props.currentUser.uid}/decks/${deckKey}`);
    console.log("DECK REMOVED");
    remove(deckRef) // Set the deck reference to null to remove it
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  let deckCards = null;
  if (decks !== undefined && decks !== null) {
    deckCards = decks.map((deck, index) => {
      return (
        <DeckCard
          key={deck.key}
          title={deck.title}
          description={deck.description}
          showForm={showForm}
          deckKey={deck.key}
          handleRemoveDeck={handleRemoveDeck}
        />
      );
    });
  }

  return (
    <main className="container d-flex flex-column text-center flex-grow-1 mt-5 scroll">
      <div>
        <h1 className="display-3 fw-bold mt-5">Your Decks</h1>
      </div>
      <button
        className="btn btn-primary mb-4 w-25 mx-auto justify-content-center"
        onClick={handleEditDecks}
      >
        {showForm ? "Cancel" : "Edit Decks"}
      </button>
      <div className="container">
        <div className="row">
          {showForm ? (
            <CreateDeckForm
              decks={decks}
              setDecks={setDecks}
              currentUser={props.currentUser}
            />
          ) : null}
          {deckCards && deckCards.length > 0 ? deckCards : null}
        </div>
      </div>
    </main>
  );
}

function CreateDeckForm({ decks, setDecks, currentUser }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const db = getDatabase();
    const userDeckRef = ref(db, `users/${currentUser.uid}/decks`);
    const deckInfo = { title: title, description: description };
    push(userDeckRef, deckInfo).catch((error) => {
      console.error("Error:", error);
    });
  }

  return (
    <form onSubmit={handleSubmit} className="p-3 bg-dark rounded-4 mb-4">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title:
        </label>
        <input
          type="text"
          id="title"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description:
        </label>
        <input
          type="text"
          id="description"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

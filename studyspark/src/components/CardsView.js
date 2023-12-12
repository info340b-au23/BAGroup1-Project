import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDatabase, ref, onValue, push, remove } from "firebase/database";
import Flashcard from "./Flashcard";
import CreateFlashcard from "./CreateFlashcard";

export default function CardsView(props) {
  const [showForm, setShowForm] = useState(false);
  const [cards, setCards] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const { deckId } = useParams();

  useEffect(() => {
    const db = getDatabase();
    const cardRef = ref(db, `users/${props.currentUser.uid}/decks/${deckId}/cards`);
    const offFunction = onValue(cardRef, (snapshot) => {
      const valueObj = snapshot.val();
      if (valueObj !== null) {
        const objKeys = Object.keys(valueObj);
        const objArray = objKeys.map((keyString) => {
          const cardObj = valueObj[keyString];
          cardObj.key = keyString;
          return cardObj;
        });
        setCards(objArray);
      } else {
        setCards(null);
      }
    });

    function cleanup() {
      console.log("Component is being removed");
      offFunction();
    }

    return cleanup;
  }, []);

  function handleAddCard() {
    setShowForm(true);
  }

  function handleCreateFlashcard(front, back) {
    const newCard = { frontVal: front, backVal: back };
    const db = getDatabase();
    const deckCardRef = ref(db, `users/${props.currentUser.uid}/decks/${deckId}/cards`);
    push(deckCardRef, newCard).catch((error) => {
      console.error("Error:", error);
    });
  }

  function handleRemoveCard(cardKey) {
    const db = getDatabase();
    const deckCardRef = ref(db, `users/${props.currentUser.uid}/decks/${deckId}/cards/${cardKey}`);
    remove(deckCardRef)
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function handleCloseForm() {
    setShowForm(false);
  }

  function handleEdit() {
    setEditMode(!editMode);
  }

  const cardsDeck = cards ? (
    cards.map((card, index) => (
      <Flashcard
        key={card.key}
        frontVal={card.frontVal}
        backVal={card.backVal}
        showForm={showForm}
        handleRemoveCard={() => handleRemoveCard(card.key)} // pass in cardkey to remove specific card
        editable={editMode}
      />
    ))
  ) : null;

  return (
    <div className="scroll">
      <main className="container d-flex flex-column text-center flex-grow-1 mt-5">
        <div>
          <h1 className="display-3 fw-bold">Your Deck</h1>
          <div className="btn-container d-flex justify-content-center">
            <button className="btn btn-primary" onClick={handleEdit}>
              {editMode ? "Cancel" : "Edit Deck"}
            </button>
            <a href="study-set.html" className="btn btn-primary">
              Study Mode
            </a>
            <button className="btn btn-primary" onClick={handleAddCard}>
              Add Card +
            </button>
          </div>
          <div className="container mt-3">
            <form className="d-flex justify-content-center">
              <div className="col-auto">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
              <button className="btn btn-primary mx-2" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>

        {showForm && (
          <CreateFlashcard
            cards={cards}
            setCards={setCards}
            create={handleCreateFlashcard}
            close={() => setShowForm(false)}
            onFormSubmit={handleCloseForm}
          />
        )}

        <div className="container mt-5 justify-content-center d-flex flex-row flex-wrap">
          {cardsDeck}
        </div>
      </main>

      <footer>
        <button type="button" className="btn btn-primary mt-5">
          Toggle Theme
        </button>
      </footer>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getDatabase, ref, onValue, push, remove } from "firebase/database";
import Flashcard from "./Flashcard";
import CreateFlashcard from "./CreateFlashcard";

export default function CardsView(props) {
  const [showForm, setShowForm] = useState(false);
  const [cards, setCards] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const { deckId } = useParams();
  const [filteredCards, setFilteredCards] = useState(null);

  useEffect(() => {
    const db = getDatabase();
    const cardRef = ref(
      db,
      `users/${props.currentUser.uid}/decks/${deckId}/cards`
    );
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
        setFilteredCards(objArray);
      } else {
        setCards(null);
        setFilteredCards(null);
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
    const deckCardRef = ref(
      db,
      `users/${props.currentUser.uid}/decks/${deckId}/cards`
    );
    push(deckCardRef, newCard).catch((error) => {
      console.error("Error:", error);
    });
  }

  function handleRemoveCard(cardKey) {
    const db = getDatabase();
    const deckCardRef = ref(
      db,
      `users/${props.currentUser.uid}/decks/${deckId}/cards/${cardKey}`
    );
    remove(deckCardRef).catch((error) => {
      console.error("Error:", error);
    });
  }

  function handleCloseForm() {
    setShowForm(false);
  }

  function handleEdit() {
    setEditMode(!editMode);
  }

  const sortedCards = filteredCards
    ? filteredCards.slice().sort((a, b) => a.frontVal.localeCompare(b.frontVal))
    : null;

  const cardsDeck = sortedCards
    ? sortedCards.map((card, index) => (
        <Flashcard
          key={card.key}
          frontVal={card.frontVal}
          backVal={card.backVal}
          showForm={showForm}
          handleRemoveCard={() => handleRemoveCard(card.key)}
          editable={editMode}
        />
      ))
    : null;

  function handleSearch(e) {
    e.preventDefault();
    const search = e.target.value;
    if (cards != null && search != null) {
      const filteredCards = cards.filter((card) =>
        card.frontVal.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredCards(filteredCards); // Update filtered cards state
    }
  }

  return (
    <div className="scroll">
      <main className="container d-flex flex-column text-center flex-grow-1 mt-5">
        <div>
          <h1 className="display-3 fw-bold">Your Deck</h1>
          <div className="btn-container d-flex justify-content-center">
            <button className="btn btn-primary mx-2" onClick={handleEdit}>
              {editMode ? "Cancel" : "Edit Deck"}
            </button>
            <button className="btn btn-primary mx-2" onClick={handleAddCard}>
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
                  onChange={(e) => handleSearch(e)}
                />
              </div>
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
    </div>
  );
}

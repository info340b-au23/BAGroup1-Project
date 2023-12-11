import React, { useState } from "react";
import { Link } from "react-router-dom";
import StudyMode from "./StudyMode";
import DeckCard from "./DeckCard";
import { getDatabase, ref } from 'firebase/database';
import Flashcard from "./Flashcard";
import CreateFlashcard from "./CreateFlashcard";


// // ref firebase db
// const db = getDatabase();
// // const users = ref(db, "users") // reference to entire user data base
// // const currUser = ref(db, "users/" + user) // reference to current user
// // const deck = ref(db, "users/" + user + "/" + "decks") 


export default function CardsView(props) {

  const [showForm, setShowForm] = useState(false);
  const [cards, setCards] = useState(props.cards || []);
  const [editMode, setEditMode] = useState(false);

  function handleAddCard() {
    setShowForm(true);
  }

  function handleCreateFlashcard(front, back) {
    const newCard = { frontVal: front, backVal: back };
    setCards((prevCards) => [...prevCards, newCard]);
  }

  function handleRemoveCard(index) {
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      updatedCards.splice(index, 1);
      return updatedCards;
    });
  }

  function handleCloseForm() {
    // setShowForm(false);
  }

  function handleEdit() {
    setEditMode(!editMode);
  }


  const cardsDeck = cards.map((card, index) => (
    <Flashcard
      key={index}
      frontVal={card.frontVal}
      backVal={card.backVal}
      showForm={showForm}
      handleRemoveCard={() => handleRemoveCard(index)}
      editable={editMode}
    />
  ));

  return (
    <div className="scroll">
      <main className="container d-flex flex-column text-center flex-grow-1 mt-5 " >
        <div>
          <h1 className="display-3 fw-bold">Your Deck</h1>
          <div className="btn-container d-flex justify-content-center">
          <button
              className="btn btn-primary"
              onClick={handleEdit} 
            >
              {editMode ? 'Cancel' : 'Edit Deck'}
            </button>
            <a href="study-set.html" className="btn btn-primary">
              Study Mode
            </a>
            <button className="btn btn-primary" onClick={handleAddCard}>
              Add Card +
            </button>
            <a href="decks/deck-delete.html" className="btn btn-danger">
              Delete Deck
            </a>
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
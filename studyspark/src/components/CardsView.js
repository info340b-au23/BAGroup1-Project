import React, { useState } from "react";
import { Link } from "react-router-dom";
import StudyMode from "./StudyMode";
import addFlashcard from "./CreateFlashcard";
import DeckCard from "./DeckCard"; 
import { getDatabase, ref } from 'firebase/database';

// // ref firebase db
// const db = getDatabase();
// // const users = ref(db, "users") // reference to entire user data base
// // const currUser = ref(db, "users/" + user) // reference to current user
// // const deck = ref(db, "users/" + user + "/" + "decks") 


export default function CardsView() {
  // Assume cardsData is an array containing user's saved cards
  const [cardsData, setCardsData] = useState([]);

  return (
    <div>
      <main className="container d-flex flex-column text-center flex-grow-1">
        <div>
          <br></br><br></br><br></br><br></br>
          <h1 className="display-3 fw-bold">Your Deck</h1>
          <div className="btn-container d-flex justify-content-center">
            <a href="decks/deck-edit.html" className="btn btn-primary">
              Edit Deck
            </a>
            <a href="study-set.html" className="btn btn-primary">
              Study Mode
            </a>
            <Link to="/create-flashcard" className="btn btn-primary">
              Add Card +
            </Link>
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

        <div className="container mt-5 justify-content-center d-flex flex-row flex-wrap">
          {cardsData.map((card, index) => (
            <DeckCard key={index} frontText={card.frontText} backText={card.backText} />
          ))}
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

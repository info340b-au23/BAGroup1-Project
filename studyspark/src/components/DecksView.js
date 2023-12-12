import React, { useState, useEffect } from "react";
import DeckCard from "./DeckCard";
import {
  getDatabase,
  ref,
  set as firebaseSet,
  onValue,
} from "firebase/database";

export default function Decks(props) {
  const [showForm, setShowForm] = useState(false);
  const [decks, setDecks] = useState(props.decks);
  useEffect(() => {
    const db = getDatabase();
    const decksRef = ref(db, "decks"); // ! Need to route to actual ref!!!
    const offFunction = onValue(decksRef, (snapshot) => {
      const valueObj = snapshot.val();
      const objKeys = Object.keys(valueObj);
      const objArray = objKeys.map((keyString) => {
        const deckObj = valueObj[keyString];
        deckObj.key = keyString;
        return deckObj;
      });
      setDecks(objArray);
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

  // TODO make link of card route to new page, then in deck page use useParams() to retrieve the data from firebase
  const deckCards = decks.map((deck, index) => {
    function handleRemoveDeck() {
      const updatedDecks = [...decks];
      updatedDecks.splice(index, 1);
      setDecks(updatedDecks);
    }

    return (
      <DeckCard
        key={index}
        title={deck.title}
        description={deck.description}
        showForm={showForm}
        handleRemoveDeck={handleRemoveDeck}
      />
    );
  });

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
            <CreateDeckForm decks={decks} setDecks={setDecks} />
          ) : null}
          {deckCards}
        </div>
      </div>
    </main>
  );
}

function CreateDeckForm({ decks, setDecks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // prevent default form submission which would refresh the page
    const db = getDatabase();
    const userDeckRef = ref(db, "users/")
    const newDeck = { title, description };
    setDecks(...decks, newDeck);
    // push(ref(db, "decks"), newDeck)
    //   .then((newDeckRef) => {
    //     // Update the local state with the new deck
    //     setDecks([...decks, { ...newDeck, id: newDeckRef.key }]);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
    }
    // The following is for adding to noSQL database once we include firebase functionality!
    // fetch("../data/decks.json", {
    // 	method: "POST",
    // 	headers: {
    // 		"Content-Type": "application/json",
    // 	},
    // 	body: JSON.stringify(newDeck),
    // })
    // 	.then((response) => {
    // 		console.log(response);
    // 		return response.json();
    // 	})
    // 	.catch((error) => {
    // 		console.error("Error:", error);
    // 	});

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

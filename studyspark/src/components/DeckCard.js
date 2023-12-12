import React from "react";
import { Link } from "react-router-dom";

export default function DeckCard({
  title,
  description,
  showForm,
  handleRemoveDeck,
  deckKey
}) {
  return (
    <div className="col-md-6 col-xl-3 d-flex justify-content-center">
      <div className="card mb-4 deck">
        <div className="card-body deck-body d-flex flex-column">
          <Link to={deckKey}>
            <h2 className="card-title">{title}</h2>
          </Link>
          <p className="card-text">{description}</p>
          {showForm && (
            <div className="mt-auto">
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleRemoveDeck(deckKey)}
              >
                X
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

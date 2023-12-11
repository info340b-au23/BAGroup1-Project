import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Flashcard({
  frontVal,
  backVal,
  showForm,
  handleRemoveCard,
  editable
}) {
  const [flipped, setFlipped] = useState(false);

  function handleCardClick() {
    setFlipped(!flipped);
  }

  return (
    <div className="col-md-6 col-xl-3">
      <div className={`vocab-card mb-4 ${flipped ? 'flipped' : ''}`} onClick={handleCardClick}>
        <div className="card-body">
          <div className="row">
            <div className="col-sm">
              <div className="vocab-card d-flex align-items-center justify-content-center">
                <div className={`vocab-card-inner ${flipped ? 'flipped' : ''}`}>
                <div className="vocab-card-front fw-bold">
                    {flipped ? backVal : frontVal}
                  </div>
                  <div className="vocab-card-back">{backVal}</div>
                  {editable && (
                    <div className="col-2 delete-button-container">
                      <button
                        className="btn btn-sm btn-danger delete-button"
                        onClick={handleRemoveCard}
                      >
                        X
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from "react";
import DeckCard from "./DeckCard";

export default function CardsView() {
    return (
        <div>
        <main class="container d-flex flex-column text-center flex-grow-1">
        <div>
            <br></br><br></br><br></br><br></br>
            <h1 class="display-3 fw-bold">Your Deck</h1>
            <div class="btn-container d-flex justify-content-center">
                <a href="decks/deck-edit.html" class="btn btn-primary"
                    >Edit Deck</a
                >
                <a href="study-set.html" class="btn btn-primary"
                    >Study Mode</a
                >
                <a href="decks/deck-delete.html" class="btn btn-danger"
                    >Delete Deck</a
                >
            </div>
            <div class="container mt-3">
                <form class="d-flex justify-content-center">
                    <div class="col-auto">
                        <input
                            class="form-control"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                    </div>
                    <button class="btn btn-primary mx-2" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </div>

        <div
            class="container mt-5 justify-content-center d-flex flex-row flex-wrap"
        >
            <div class="vocab-card m-4">
                <div class="vocab-card-inner d-flex">
                    <div class="vocab-card-front fw-bold">Vocab Word</div>
                    <div class="vocab-card-back">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Similique, quisquam.
                    </div>
                </div>
            </div>

            <div class="vocab-card m-4">
                <div class="vocab-card-inner d-flex">
                    <div class="vocab-card-front fw-bold">Vocab Word</div>
                    <div class="vocab-card-back">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Similique, quisquam.
                    </div>
                </div>
            </div>

            <div class="vocab-card m-4">
                <div class="vocab-card-inner d-flex">
                    <div class="vocab-card-front fw-bold">Vocab Word</div>
                    <div class="vocab-card-back">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Similique, quisquam.
                    </div>
                </div>
            </div>

            <div class="vocab-card m-4">
                <div class="vocab-card-inner d-flex">
                    <div class="vocab-card-front fw-bold">Vocab Word</div>
                    <div class="vocab-card-back">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Similique, quisquam.
                    </div>
                </div>
            </div>

            <div class="vocab-card m-4">
                <div class="vocab-card-inner d-flex">
                    <div class="vocab-card-front fw-bold">Vocab Word</div>
                    <div class="vocab-card-back">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Similique, quisquam.
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer>
        <button type="button" class="btn btn-primary mt-5">
            Toggle Theme
        </button>
    </footer>
    </div>
    );
}
import React, { useState } from "react";
import DeckCard from "./DeckCard";

export default function Decks(props) {
	const [showForm, setShowForm] = useState(false);
	const [decks, setDecks] = useState(props.decks);

	function handleEditDecks() {
		setShowForm(!showForm);
	}

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
		<main className="container d-flex flex-column text-center flex-grow-1 mt-5">
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
		const newDeck = { title, description };
		const updatedDecks = [...decks, newDeck];
		setDecks(updatedDecks);
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

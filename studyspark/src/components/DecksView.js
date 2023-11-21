import React from "react";
import DeckCard from "./DeckCard";

export default function Decks(props) {
	const deckCards = props.decks.map((deck, index) => {
		return (
			<DeckCard
				key={index}
				title={deck.title}
				description={deck.description}
			/>
		);
	});
	return (
		<main className="container d-flex flex-column text-center flex-grow-1 mt-5">
			<div>
				<h1 className="display-3 fw-bold my-5">Your Decks</h1>
			</div>
			<div className="container">
				<div className="row">
					{deckCards}
					<div className="col-md-6 col-xl-3 d-flex">
						<div className="card mb-4 deck">
							<div className="card-body deck-body">
								<div className="row">
									<div className="col-sm-auto col-xl-12"></div>
									<div className="col-sm">
										<h2 className="card-title">
											Create New...
										</h2>
										<p className="card-text">
											Maiores voluptate rem odit dolor
											temporibus asperiores maxime velit
											sapiente.
										</p>
										<a
											href="deck.html"
											// THIS WILL CHANGE
											className="stretched-link"
										></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}

import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import CardsView from "./CardsView";


export default function DeckCard({
	title,
	description,
	showForm,
	handleRemoveDeck,
}) {
	return (
		<div className="col-md-6 col-xl-3 d-flex">
			<div className="card mb-4 deck">
				<div className="card-body deck-body">
					<div className="row">
						<div className="col-sm">
							<Link to="/cards">
								<h2 className="card-title">{title}</h2>
							</Link>
							<p className="card-text">{description}</p>
						</div>
						{showForm && (
							<div className="col-2">
								<button
									className="btn btn-sm btn-danger"
									onClick={handleRemoveDeck}
								>
									X
								</button>
							</div>
						)}

					</div>
				</div>
			</div>
		</div>
	);
}

import React from "react";

const DeckCard = ({ title, description }) => {
	return (
		<div className="col-md-6 col-xl-3 d-flex">
			<div className="card mb-4 deck">
				<div className="card-body deck-body">
					<div className="row">
						<div className="col-sm-auto col-xl-12"></div>
						<div className="col-sm">
							<h2 className="card-title">{title}</h2>
							<p className="card-text">{description}</p>
							<a href="deck.html" className="stretched-link"></a>
							{/* THIS WILL CHANGE TO REROUTE TO DECK VIEW PAGE */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeckCard;

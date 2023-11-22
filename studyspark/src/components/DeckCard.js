import React from "react";
import { Link } from "react-router-dom";

export default function DeckCard({ title, description }) {
	return (
		<div className="col-md-6 col-xl-3 d-flex">
			<Link to={`/deck-${title}`}>
				<div className="card mb-4 deck">
					<div className="card-body deck-body">
						<div className="row">
							<div className="col-sm-auto col-xl-12"></div>
							<div className="col-sm">
								<h2 className="card-title">{title}</h2>
								<p className="card-text">{description}</p>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}

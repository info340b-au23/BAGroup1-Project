import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import Decks from "./DecksView";
import userDecks from "./decks.json";
import { CreateFlashcard } from "./CreateFlashcard";

export default function App(props) {
	const location = useLocation();

	const isHomePage = location.pathname === "/";

	return (
		<div
			className={`d-flex flex-column vh-100 ${isHomePage ? "title" : ""}`}
		>
			<Navbar />
			<Routes>
				<Route index element={<HomePage />} />
                <Route path="decks" element={<Decks decks={userDecks} />} />
			</Routes>
		</div>
	);
}

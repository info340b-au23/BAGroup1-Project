import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import Decks from "./DecksView";
import userDecks from "../data/decks.json";
import Login from "./Login";
import Signup from "./Signup";
import CardsView from "./CardsView";
import StudyMode from "./StudyMode";

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
				<Route path="login" element={<Login />} />
				<Route path="Signup" element={<Signup />} />
				<Route path="/cards" element={<CardsView />} />
				<Route path="/StudyMode" element={<StudyMode />} />
			</Routes>
		</div>
	);
}

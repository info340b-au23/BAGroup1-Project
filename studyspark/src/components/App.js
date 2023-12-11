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
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMJJ_WEPBr3N-d8za6wmzH-Je04E6QJdQ",
  authDomain: "studyspark-97b92.firebaseapp.com",
  projectId: "studyspark-97b92",
  storageBucket: "studyspark-97b92.appspot.com",
  messagingSenderId: "337626103078",
  appId: "1:337626103078:web:f6504517c82ed9843355e7",
  databaseURL: "https://studyspark-97b92-default-rtdb.firebaseio.com"
};

initializeApp(firebaseConfig);


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

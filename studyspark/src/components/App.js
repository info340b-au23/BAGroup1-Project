import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate, useNavigate, Outlet } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import Decks from "./DecksView";
import userDecks from "../data/decks.json";
import Login from "./Login";
import Signup from "./Signup";
import CardsView from "./CardsView";
import StudyMode from "./StudyMode";

export default function App(props) {
  const [currentUser, setCurrentUser] = useState(null); // ! Need to set user functionality
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const navigateTo = useNavigate();
  
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if(user) {
        user.userName = user.displayName;
        user.userId = user.uid;
        setCurrentUser(user);
      }
      else {
        setCurrentUser(null);
      }
    })
  }, [])

  const loginUser = (userObj) => {
    setCurrentUser(userObj);
    
    if(userObj.userId !== null){
      navigateTo('/decks'); 
    }
  }

  return (
    <div className={`d-flex flex-column vh-100 ${isHomePage ? "title" : ""}`}>
      <Navbar currentUser={currentUser}/>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="login" element={<Login currentUser={currentUser} loginCallback={loginUser}/>} />
        <Route path="signup" element={<Signup currentUser={currentUser} loginCallback={loginUser}/>} />
        {/* Protected Routes */}
        <Route element={<ProtectedPage currentUser={currentUser} />}>
          <Route path="decks" element={<Decks decks={userDecks} />} />
          <Route path="cards" element={<CardsView />} />
          <Route path="studymode" element={<StudyMode />} />
        </Route>
      </Routes>
    </div>
  );
}

function ProtectedPage(props) {
  if (props.currentUser === null) { // TODO change to .userId or whatever we use for users
    return <Navigate to="/Signup" />;
  } else {
    return <Outlet />;
  }
}

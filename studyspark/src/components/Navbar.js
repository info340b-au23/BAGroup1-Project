import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import LoginIcon from "@mui/icons-material/Login";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default function Navbar() {
  // to get user for login
  const [user, setUser] = useState(null);

  // logged in 
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // logged out
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  function getUser(email) {
    const ind = email.indexOf('@');
    return email.substring(0, ind);
  }
  
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img
            src="/img/studyicon.png"
            alt="The logo of StudySpark"
            className="nav-icon pe-2"
          />
          StudySpark
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navtoggle"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navtoggle">
          <ul className="navbar-nav ms-auto align-items-center">
            {user ? (
              <>
                <li className="nav-item mx-2">
                  <NavLink className="nav-link" to="/decks">
                    <span className="px-1">
                      <DashboardCustomizeIcon />
                    </span>
                    Decks
                  </NavLink>
                </li>
                <li className="nav-item mx-2">
                  <span className="nav-link">Logged in as {getUser(user.email)}</span>
                </li>
                <li className="nav-item mx-2">
                  <button className="btn btn-link nav-link" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item mx-2">
                  <NavLink className="nav-link" to="/decks">
                    <span className="px-1">
                      <DashboardCustomizeIcon />
                    </span>
                    Decks
                  </NavLink>
                </li>
                <li className="nav-item mx-2">
                  <NavLink className="nav-link" to="/login">
                    <span className="px-1">
                      <LoginIcon />
                    </span>
                    Login / Signup
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import LoginIcon from "@mui/icons-material/Login";

export default function Navbar() {
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
          </ul>
        </div>
      </div>
    </nav>
  );
}

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const formNavigate = useNavigate();

  const loginWithEmailAndPassword = async (email, password, formNavigate) => {
    const auth = getAuth();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful");
      formNavigate("/decks");
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    loginWithEmailAndPassword(email, password, formNavigate);
  };

  return (
    <div className="container mt-5">
      <div className="text-center align-items-center login-title">
        <h1 className="display-3 fw-bold">Log in to StudySpark:</h1>
        <h3 className="text-center lead">
          Don't have an account? Register{" "}
          <Link className="link-decor" to="/Signup">
            here
          </Link>
        </h3>
      </div>
      <form className="loginForm" onSubmit={(event) => handleSubmit(event)}>
        <div className="form-group">
          <label className="col-form-label" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label className="col-form-label" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Enter your password"
            minLength="6"
            required
          />
        </div>
        <div className="form-check mt-3">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue=""
            id="flexCheckDefault"
          />
          <label
            className="form-check-label"
            htmlFor="flexCheckDefault"
          >
            Keep me signed in
          </label>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary mt-3">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
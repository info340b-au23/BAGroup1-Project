import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const signUpWithEmailAndPassword = async (email, password, formNavigate) => {
  const auth = getAuth();

  try {
    // Check if the email is already registered
    await createUserWithEmailAndPassword(auth, email, password);

    console.log("Registration successful");
    formNavigate("/decks");
  } catch (error) {
    console.error("Registration failed:", error.message);
  }
};

export default function Signup() {
  const formNavigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    signUpWithEmailAndPassword(email, password, formNavigate);
  }

  return (
    <div className="container mt-5">
      <div className="text-left align-items-center login-title">
        <h1 className="display-3 fw-bold text-center">
          {" "}
          Sign up for StudySpark:{" "}
        </h1>
        <h3 className="text-center lead">
          {" "}
          Already have an account? Login{" "}
          <Link className="link-decor" to="/Login">
            here
          </Link>
          :{" "}
        </h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="col-form-label" htmlFor="email">
            Email Address:
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <label className="col-form-label" htmlFor="password">
            Password:{" "}
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter a password"
            name="password"
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
            required
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            I have read and agreed to the{" "}
            <a className="link-decor" href="#">
              Terms and Conditions
            </a>
            .
          </label>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary mt-5">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
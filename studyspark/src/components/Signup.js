import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set as firebaseSet, onValue } from 'firebase/database';

export default function Signup(props) {
  const formNavigate = useNavigate();
  let currentUser = props.currentUser;

  function writeUserData(currentUser) {
    const db = getDatabase();
    firebaseSet(ref(db, 'users/' + currentUser.uid), {
      displayName: currentUser.displayName,
      email: currentUser.email
    });
  }
  
  const signUpWithEmailAndPassword = async (email, password, displayname, formNavigate) => {
    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(function(user){currentUser = user.user});
      console.log("Registration successful");
      currentUser.displayName = displayname
      writeUserData(currentUser);
      formNavigate("/decks");
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  };
  
  function handleSubmit(event) {
    event.preventDefault();
    const signUpEmail = event.target.elements.email.value;
    const signUpPassword = event.target.elements.password.value;
    const signUpDisplayName = event.target.elements.flname.value;
    signUpWithEmailAndPassword(signUpEmail, signUpPassword, signUpDisplayName, formNavigate);
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
            placeholder="Enter an email"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <label className="col-form-label" htmlFor="name">
            First and Last Name: 
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter a name"
            name="flname"
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
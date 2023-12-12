import React from "react";
import { Link, Navigate } from "react-router-dom";
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from "firebase/auth";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { getDatabase, ref, set as firebaseSet, onValue } from 'firebase/database';

export default function Login(props) {
  const currentUser = props.currentUser;
  const auth = getAuth();
  
  function writeUserData(currentUser) {
    const db = getDatabase();
    firebaseSet(ref(db, 'users/' + currentUser.userId), {
      displayName: currentUser.displayName,
      email: currentUser.email
    });
  }

  const firebaseUIConfig = {
    signInOptions: [
        GoogleAuthProvider.PROVIDER_ID, 
        {provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },],
    signInFlow: 'popup', 
    credentialHelper: 'none', 
    callbacks: {signInSuccessWithAuthResult: () => {return false;}}
}
  if (currentUser) {
    writeUserData(currentUser);
    return <Navigate to="/decks" />
  }

  return (
    <div className="container mt-5">
      <div className="text-center align-items-center login-title">
        <h1 className="display-3 fw-bold">Log in to StudySpark:</h1>
        <h3 className="text-center lead">
          Don't have an account? Click below to sign up for free!
        </h3>
      </div>
      <StyledFirebaseAuth uiConfig = {firebaseUIConfig} firebaseAuth={auth} />
    </div>
  );
}
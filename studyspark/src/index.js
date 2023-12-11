import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyDMJJ_WEPBr3N-d8za6wmzH-Je04E6QJdQ",
	authDomain: "studyspark-97b92.firebaseapp.com",
	databaseURL: "https://studyspark-97b92-default-rtdb.firebaseio.com",
	projectId: "studyspark-97b92",
	storageBucket: "studyspark-97b92.appspot.com",
	messagingSenderId: "337626103078",
	appId: "1:337626103078:web:f6504517c82ed9843355e7"
  };
  

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

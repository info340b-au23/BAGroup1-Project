import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const formNavigate = useNavigate();

	function HandleSubmit() {
		formNavigate("/decks");
	}

	return (
		<div className="container mt-5">
			<div className="text-center align-items-center login-title">
				<h1 className="display-3 fw-bold">Log In to StudySpark:</h1>
				<h3 className="text-center lead">
					Don't have an account? Register{" "}
					<Link className="link-decor" to="/Signup">
						here
					</Link>
				</h3>
			</div>
			<form className="loginForm" onSubmit={HandleSubmit}>
				<div className="form-group">
					<label className="col-form-label" htmlFor="username">
						Username:
					</label>
					<input
						type="text"
						className="form-control"
						placeholder="Enter your username"
						minLength="6"
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label className="col-form-label" htmlFor="password">
						Password:
					</label>
					<input
						type="text"
						className="form-control"
						placeholder="Enter your password"
						minLength="6"
						onChange={(e) => setPassword(e.target.value)}
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

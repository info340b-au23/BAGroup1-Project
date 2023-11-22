import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
	const formNavigate = useNavigate();
	function HandleSubmit() {
		formNavigate("/decks");
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
			<form onSubmit={HandleSubmit}>
				<div className="form-group">
					<label className="col-form-label" htmlFor="email">
						Email Address:
					</label>
					<input
						type="email"
						className="form-control"
						placeholder="Enter Email"
						required
					/>
				</div>
				<div className="form-group">
					<label className="col-form-label" htmlFor="username">
						Username:{" "}
					</label>
					<input
						type="text"
						className="form-control"
						placeholder="Enter username"
						minLength="6"
						required
					/>
				</div>
				<div className="form-group">
					<label className="col-form-label" htmlFor="password">
						Password:{" "}
					</label>
					<input
						type="text"
						className="form-control"
						placeholder="Enter a password"
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
					<label
						className="form-check-label"
						htmlFor="flexCheckDefault"
					>
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

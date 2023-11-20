import { NavLink } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<NavLink className="navbar-brand" to="/">
					StudySpark
				</NavLink>
				<div className="navbar-nav ml-auto">
					<NavLink className="nav-link" to="/decks">
						Decks
					</NavLink>
					<NavLink className="nav-link" to="/login">
						Log In
					</NavLink>
					<NavLink className="nav-link" to="/sign_up">
						Sign Up
					</NavLink>
				</div>
			</div>
		</nav>
	);
}

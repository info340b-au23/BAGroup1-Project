export default function Navbar({ handleButtonClick }) {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<button
					className="navbar-brand btn btn-link"
					onClick={() => handleButtonClick("index")}
				>
					StudySpark
				</button>
				<div className="navbar-nav ml-auto">
					<button
						className="nav-link btn btn-link"
						onClick={() => handleButtonClick("decks")}
					>
						Decks
					</button>
					<button
						className="nav-link btn btn-link"
						onClick={() => handleButtonClick("login")}
					>
						Log In
					</button>
					<button
						className="nav-link btn btn-link"
						onClick={() => handleButtonClick("sign_up")}
					>
						Sign Up
					</button>
				</div>
			</div>
		</nav>
	);
}

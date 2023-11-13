export default function Navbar(props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand" href="index.html">
					StudySpark
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navToggle"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navToggle">
					<ul className="navbar-nav me-auto">
						<li className="nav-item">
							<a className="nav-link" href="decks.html">
								Decks
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="login.html">
								Log In
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="sign_up.html">
								Sign Up
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

import React from "react";

export default function HomePage() {
	return (
		<>
			<main className="home-text container d-flex flex-column text-center align-items-center flex-grow-1">
				<h1 className="display-1 fw-bold">
					Welcome to <span className="text-purple">StudySpark!</span>
				</h1>
				<p className="lead fw-bold">
					The ultimate e-flashcard learning platform.
				</p>
			</main>

			<footer>
				<p>
					<em>Image from wallpaperaccess.com</em>
				</p>
			</footer>
		</>
	);
}

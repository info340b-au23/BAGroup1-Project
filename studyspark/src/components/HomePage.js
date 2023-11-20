export default function HomePage() {
	return (
		<>
			<main className="container d-flex flex-column text-center align-items-center justify-content-center flex-grow-1 mb-5">
                <h1 className="display-1 fw-bold">Welcome to StudySpark!</h1>
                <p className="lead fw-bold">
                    Your ultimate e-flashcard learning platform.
                </p>
			</main>

			<footer>
				<p>
					<em>Image credit: wallpaperaccess.com</em>
				</p>
				<button type="button" className="btn btn-primary mt-5">
					Toggle Theme
				</button>
			</footer>
		</>
	);
}

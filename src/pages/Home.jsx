import React from "react";
import { Auth } from "../components/Auth";
import "../styles/Home.scss";

function Home(props) {
	const handleFirstNameChange = (event) => {
		props.onFirstNameChange(event);
	};

	return (
		<section className="home">
			<header className="header">
				<h1 className="header__title">
					my<span className="header__title-logo">Library</span>
				</h1>
				<p className="header__paragraph">
					Collect memories from world of books
				</p>
			</header>
			<Auth
				firstName={props.firstName}
				onFirstNameChange={handleFirstNameChange}
			/>
		</section>
	);
}

export default Home;

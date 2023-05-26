import React from "react";
import { Auth } from "../components/Auth";
import "../styles/Home.scss";
import Logo from "../components/Logo"

function Home(props) {
	const handleFirstNameChange = (event) => {
		props.onFirstNameChange(event);
	};

	return (
		<section className="home">
			<header className="header">
				<Logo />
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
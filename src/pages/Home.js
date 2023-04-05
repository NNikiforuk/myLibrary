import React from "react";
import { Auth } from "../components/Auth";
import "../styles/Home.scss";
import { useState } from "react";

function Home() {
	const [firstName, setFirstName] = useState("");

	const handleFirstNameChange = (newFirstName) => {
		setFirstName(newFirstName);
	};

	console.log(firstName);

	return (
		<section className="home">
			<header className="header">
				<h1 className="header__title">myLibrary</h1>
				<p className="header__paragraph">
					Collect memories from world of books
				</p>
			</header>
			<Auth onFirstNameChange={handleFirstNameChange} />
		</section>
	);
}

export default Home;

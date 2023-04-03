import React from "react";
import { Auth } from "../components/Auth";
import "../styles/Home.scss";

function Home() {
	return (
		<section className="home">
			<header className="header">
				<h1 className="header__title">myLibrary</h1>
				<p className="header__paragraph">
					Collect memories from world of books
				</p>
			</header>
			<Auth />
		</section>
	);
}

export default Home;

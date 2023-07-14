import React from "react";
import { Auth } from "../components/Auth";
import "../styles/Home.scss";
import Logo from "../components/Logo";

function Home() {
	return (
		<section className="home">
			<header className="header">
				<Logo fontSize="24px" />
				<p className="header__paragraph">
					Collect memories from world of books
				</p>
			</header>
			<Auth />
		</section>
	);
}

export default Home;

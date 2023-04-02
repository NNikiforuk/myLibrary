import React from "react";
import { Auth } from "../components/Auth";
import "../styles/Home.css";

function Home() {
	return (
		<div className="home">
			<h1>myLibrary</h1>
			<p>Collect memories from the world of books</p>
			<div className="home-form">
				<div className="home-inputs">
					<Auth />
					
				</div>
			</div>
		</div>
	);
}

export default Home;

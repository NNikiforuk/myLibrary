import React from "react";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faPlus,
	faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navbar() {
	const [isBurgerCollapsed, setIsBurgerCollapsed] = useState(false);
	const [wantAddBook, setWantAddBook] = useState(false);

	const toggleBurger = () => {
		setIsBurgerCollapsed(!isBurgerCollapsed);
	};

	const toggleAddBook = () => {
		setWantAddBook(!wantAddBook);
	};

	return (
		<nav className="navbar">
			<div className="navbar-container">
				<div className="navbar-logo">
					<h1>myLibrary</h1>
				</div>
				<div className="navbar-burger" onClick={toggleBurger}>
					<FontAwesomeIcon icon={faBars} />
				</div>
				<div className={isBurgerCollapsed ? "navbar-menu show" : "navbar-menu"}>
					<div className="navbar-menu-item" onClick={toggleAddBook}>
						<FontAwesomeIcon icon={faPlus} />
						<span>Add book</span>
					</div>
					<div className="navbar-menu-item">
						<FontAwesomeIcon icon={faSignOutAlt} />
						<span>Log out</span>
					</div>
				</div>
				<div className="navbar-links">
					<div className="navbar-links-item" onClick={toggleAddBook}>
						<FontAwesomeIcon icon={faPlus} />
						<span>Add book</span>
					</div>
					<div className="navbar-links-item">
						<FontAwesomeIcon icon={faSignOutAlt} />
						<span>Log out</span>
					</div>
				</div>
			</div>

			{wantAddBook && (
				<div className="add-book-overlay">
					<div className="add-book-form">
						<h2>Add book</h2>
						<form>
							<input type="text" placeholder="Title" />
							<input type="text" placeholder="Author" />
							<input type="data" placeholder="Finished" />
							<div className="add-book-form-btns">
								<button type="submit">Add</button>
								<button onClick={toggleAddBook}>Cancel</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</nav>
	);
}

export default Navbar;

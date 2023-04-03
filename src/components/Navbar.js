import React from "react";
import "../styles/Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faPlus,
	faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import NewBook from "./NewBook";

function Navbar(props) {
	const [isBurgerCollapsed, setIsBurgerCollapsed] = useState(false);
	const [wantAddBook, setWantAddBook] = useState(false);

	const toggleBurger = () => {
		setIsBurgerCollapsed(!isBurgerCollapsed);
	};

	const handleChildStateChange = (newState) => {
		setWantAddBook(newState);
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
					<div className="navbar-menu-item" onClick={handleChildStateChange}>
						<FontAwesomeIcon icon={faPlus} />
						<span>Add book</span>
					</div>
					<div className="navbar-menu-item">
						<FontAwesomeIcon icon={faSignOutAlt} />
						<span>Log out</span>
					</div>
				</div>
				<div className="navbar-links">
					<div className="navbar-links-item" onClick={handleChildStateChange}>
						<FontAwesomeIcon icon={faPlus} />
						<span>Add book</span>
					</div>
					<div className="navbar-links-item">
						<FontAwesomeIcon icon={faSignOutAlt} />
						<span>Log out</span>
					</div>
				</div>
			</div>

			{wantAddBook && <NewBook onStateChange={handleChildStateChange} booksRef={props.booksRef} getBookList={props.getBookList} />}
		</nav>
	);
}

export default Navbar;

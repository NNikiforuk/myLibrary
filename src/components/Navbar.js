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
import { useNavigate } from "react-router-dom";

function Navbar(props) {
	const [isBurgerCollapsed, setIsBurgerCollapsed] = useState(false);
	const [wantAddBook, setWantAddBook] = useState(false);
	let navigate = useNavigate();

	const toggleBurger = () => {
		setIsBurgerCollapsed(!isBurgerCollapsed);
	};

	const handleChildStateChange = (newState) => {
		setWantAddBook(newState);
		setIsBurgerCollapsed(false);
	};

	const logout = async () => {
		try {
			let authToken = sessionStorage.removeItem("Auth Token");
			if (!authToken) {
				navigate("/");
			}
			setIsBurgerCollapsed(!isBurgerCollapsed);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<nav className="navbar">
			<div className="navbarContainer">
				<div className="navbar__logo">
					<h1>
						my<span className="navbar__logo-title">Library</span>
					</h1>
				</div>
				<div className="navbar__burger" onClick={toggleBurger}>
					<FontAwesomeIcon icon={faBars} />
				</div>
				<div
					className={isBurgerCollapsed ? "navbar__menu show" : "navbar__menu"}
				>
					<div className="navbar__menu__item" onClick={handleChildStateChange}>
						Add book
					</div>
					<div className="navbar__menu__item" onClick={logout}>
						Log out
					</div>
				</div>
				<div className="navbar__links">
					<div className="navbar__links__item" onClick={handleChildStateChange}>
						<FontAwesomeIcon icon={faPlus} />
						<span className="navbar__links__title">Add book</span>
					</div>
					<div className="navbar__links__item">
						<FontAwesomeIcon icon={faSignOutAlt} />
						<span className="navbar__links__title" onClick={logout}>
							Log out
						</span>
					</div>
				</div>
			</div>

			{wantAddBook && (
				<NewBook
					onStateChange={handleChildStateChange}
					booksCollectionRef={props.booksRef}
					getBookList={props.getBookList}
				/>
			)}
		</nav>
	);
}

export default Navbar;

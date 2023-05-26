import React from "react";
import "../styles/NewBook.scss";
import { useState } from "react";
import { addDoc } from "firebase/firestore";
import { auth } from "../config/firebase";

function NewBook(props) {
	const [newBookTitle, setNewBookTitle] = useState("");
	const [newBookAuthor, setNewBookAuthor] = useState("");
	const [newBookFinished, setNewBookFinished] = useState("");

	const toggleAddBook = () => {
		props.onStateChange(false);
	};

	const onSubmitBook = async () => {
		try {
			await addDoc(props.booksCollectionRef, {
				title: newBookTitle,
				author: newBookAuthor,
				finished: newBookFinished,
				userId: auth?.currentUser?.uid,
			});
			await props.getBookList();
			toggleAddBook();
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<section className="addBook">
			<div className="addBook__form">
				<h2 className="addBook__form__title">Add book</h2>
				<div>
					<input
						className="addBook__form__input"
						type="text"
						placeholder="Title"
						onChange={(e) => setNewBookTitle(e.target.value)}
					/>
					<input
						className="addBook__form__input"
						type="text"
						placeholder="Author"
						onChange={(e) => setNewBookAuthor(e.target.value)}
					/>
					<input
						className="addBook__form__input"
						type="date"
						placeholder="Finished"
						onChange={(e) => setNewBookFinished(e.target.value)}
					/>
					<div className="addBook__form__buttons">
						<button className="addBook__form__button" onClick={onSubmitBook}>
							Add
						</button>
						<button className="addBook__form__button" onClick={toggleAddBook}>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default NewBook;

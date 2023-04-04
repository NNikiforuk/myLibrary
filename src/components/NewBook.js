import React from "react";
import "../styles/NewBook.scss";
import { useState } from "react";
import { addDoc } from "firebase/firestore";

function NewBook(props) {
	const [wantAddBook, setWantAddBook] = useState(false);
	const [newBookTitle, setNewBookTitle] = useState("");
	const [newBookAuthor, setNewBookAuthor] = useState("");
	const [newBookFinished, setNewBookFinished] = useState("");

	const toggleAddBook = () => {
		setWantAddBook(!wantAddBook);
	};

	const onSubmitBook = async () => {
		try {
			await addDoc(props.booksCollectionRef, {
				title: newBookTitle,
				author: newBookAuthor,
				finished: newBookFinished,
			});
			props.getBookList();
			props.onStateChange(false);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<section className="addBook">
			<div className="addBook__form">
				<h2 className="addBook__form__title">Add book</h2>
				<form>
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
						<button
							className="addBook__form__button"
							onClick={toggleAddBook}
							value={wantAddBook}
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}

export default NewBook;

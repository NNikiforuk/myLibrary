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
			await addDoc(props.booksRef, {
				title: newBookTitle,
				author: newBookAuthor,
				finished: newBookFinished,
			});
			props.getBookList();
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="add-book-overlay">
			<div className="add-book-form">
				<h2>Add book</h2>
				<form>
					<input
						type="text"
						placeholder="Title"
						onChange={(e) => setNewBookTitle(e.target.value)}
					/>
					<input
						type="text"
						placeholder="Author"
						onChange={(e) => setNewBookAuthor(e.target.value)}
					/>
					<input
						type="date"
						placeholder="Finished"
						onChange={(e) => setNewBookFinished(e.target.value)}
					/>
					<div className="add-book-form-btns">
						<button onClick={onSubmitBook}>Add</button>
						<button onClick={toggleAddBook} value={wantAddBook}>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default NewBook;

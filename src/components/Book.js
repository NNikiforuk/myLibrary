import React from "react";
import { useState } from "react";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { database } from "../config/firebase";
import "../styles/Book.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

function Book(prop) {
	const [updatedTitle, setUpdatedTitle] = useState("");
	const [updatedAuthor, setUpdatedAuthor] = useState("");
	const [wantToEditBook, setWantToEditBook] = useState(false);

	const editBook = async (id) => {
		setWantToEditBook(true);
	};

	const deleteBook = async (id) => {
		const bookDoc = doc(database, "books", id);
		await deleteDoc(bookDoc);
		await prop.getBookList();
	};

	const updateBookTitle = async (id) => {
		const bookDoc = doc(database, "books", id);
		await updateDoc(bookDoc, { title: updatedTitle });
		await prop.getBookList();
	};

	const updateBookAuthor = async (id) => {
		const bookDoc = doc(database, "books", id);
		await updateDoc(bookDoc, { author: updatedAuthor });
		await prop.getBookList();
	};

	const cancelUpdateBook = async () => {
		setWantToEditBook(false);
	};

	return (
		<div className="book">
			<h1 className="book__title">{prop.book.title}</h1>
			<p className="book__author">{prop.book.author}</p>
			<div className="book__controls">
				<FontAwesomeIcon
					className="book__controls"
					icon={faPenToSquare}
					onClick={() => editBook(prop.book.id)}
				/>
				<FontAwesomeIcon
					className="book__controls"
					icon={faTrash}
					onClick={() => deleteBook(prop.book.id)}
				/>
				{wantToEditBook === true ? (
					<div className="updateBook__container">
						<div className="updateBook show">
							<input
								className="updateBook__input"
								type="text"
								placeholder="Update title..."
								onChange={(e) => setUpdatedTitle(e.target.value)}
							/>
							<button
								className="updateBook__button"
								onClick={() => updateBookTitle(prop.book.id)}
							>
								Change
							</button>
							<input
								className="updateBook__input"
								type="text"
								placeholder="Upd`ate author..."
								onChange={(e) => setUpdatedAuthor(e.target.value)}
							/>
							<button
								className="updateBook__button"
								onClick={() => updateBookAuthor(prop.book.id)}
							>
								Change
							</button>
							<button
								className="updateBook__button__submit"
								onClick={cancelUpdateBook}
							>
								Cancel
							</button>
						</div>
					</div>
				) : (
					<div className="updateBook hide"></div>
				)}
			</div>
		</div>
	);
}

export default Book;

import React from "react";
import { useState } from "react";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { database } from "../config/firebase";
import "../styles/Book.scss";

function Book(prop) {
	const [updatedTitle, setUpdatedTitle] = useState("");
	const [updatedAuthor, setUpdatedAuthor] = useState("");

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

	const deleteBook = async (id) => {
		const bookDoc = doc(database, "books", id);
		await deleteDoc(bookDoc);
		await prop.getBookList();
	};

	return (
		<div className="book">
			<h1 className="book__title">{prop.book.title}</h1>
			<p className="book__author">{prop.book.author}</p>
			<div className="book__inputs">
				<div className="book__inputs__one">
					<input
						className="book__input"
						type="text"
						placeholder="Update title..."
						onChange={(e) => setUpdatedTitle(e.target.value)}
					/>
					<button
						className="book__button"
						onClick={() => updateBookTitle(prop.book.id)}
					>
						Edit title
					</button>
				</div>
				<div className="book__inputs__one">
					<input
						className="book__input"
						type="text"
						placeholder="Update author..."
						onChange={(e) => setUpdatedAuthor(e.target.value)}
					/>
					<button
						className="book__button"
						onClick={() => updateBookAuthor(prop.book.id)}
					>
						Edit author
					</button>
				</div>
			</div>
			<button onClick={() => deleteBook(prop.book.id)}>Delete</button>
		</div>
	);
}

export default Book;

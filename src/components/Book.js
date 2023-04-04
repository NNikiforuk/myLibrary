import React from "react";
import { useState } from "react";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { database } from "../config/firebase";

function Book(prop) {
	const [updatedTitle, setUpdatedTitle] = useState("");

	const updateBookTitle = async (id) => {
		const bookDoc = doc(database, "books", id);
		await updateDoc(bookDoc, { title: updatedTitle });
		await prop.getBookList();
	};

	const deleteBook = async (id) => {
		const bookDoc = doc(database, "books", id);
		await deleteDoc(bookDoc);
		await prop.getBookList();
	};

	return (
		<div className="book">
			{prop.bookList.map((book) => (
				<div className="library__main__item" key={book.id} id={book.id}>
					<h1>{book.title}</h1>
					<p>{book.author}</p>
					<button onClick={() => deleteBook(book.id)}>Delete</button>
					<button onClick={() => updateBookTitle(book.id)}>Update title</button>
					<input
						type="text"
						placeholder="Update title..."
						onChange={(e) => setUpdatedTitle(e.target.value)}
					/>
				</div>
			))}
		</div>
	);
}

export default Book;

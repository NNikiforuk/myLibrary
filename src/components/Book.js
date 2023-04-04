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
			<h1>{prop.book.title}</h1>
			<p>{prop.book.author}</p>
			<input
				type="text"
				placeholder="Update title..."
				onChange={(e) => setUpdatedTitle(e.target.value)}
			/>
			<button onClick={() => updateBookTitle(prop.book.id)}>Edit title</button>
			<button onClick={() => deleteBook(prop.book.id)}>Delete</button>
		</div>
	);
}

export default Book;

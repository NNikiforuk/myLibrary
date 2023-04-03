import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Library.scss";
import { useEffect, useState } from "react";
import { Auth } from "../components/Auth";
import { database } from "../config/firebase";
import {
	getDocs,
	collection,
	deleteDoc,
	doc,
	updateDoc,
} from "firebase/firestore";

function Library() {
	const [bookList, setBookList] = useState([]);
	const booksCollectionRef = collection(database, "books");
	const [updatedTitle, setUpdatedTitle] = useState("");

	const getBookList = async () => {
		try {
			const data = await getDocs(booksCollectionRef);
			const filteredData = data.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}));
			setBookList(filteredData);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getBookList();
	}, []);

	const deleteBook = async (id) => {
		const bookDoc = doc(database, "books", id);
		await deleteDoc(bookDoc);
		await getBookList();
	};

	const updateBookTitle = async (id) => {
		const bookDoc = doc(database, "books", id);
		await updateDoc(bookDoc, { title: updatedTitle });
		await getBookList();
	};

	return (
		<div className="library">
			<Navbar booksRef={booksCollectionRef} getBookList={getBookList} />
			<main className="library-main">
				{bookList.map((book) => (
					<div className="library-main-item" key={book.id} id={book.id}>
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
				{/* <div className="library-main-shelf"></div>
				<p className="library-main-shelf-title">2023</p> */}
			</main>
		</div>
	);
}

export default Library;

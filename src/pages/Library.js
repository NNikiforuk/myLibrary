import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Library.css";
import { useEffect, useState } from "react";
import { Auth } from "../components/Auth";
import { database } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

function Library() {
	const [bookList, setBookList] = useState([]);

	const booksCollectionRef = collection(database, "books");

	useEffect(() => {
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
		getBookList();
	}, []);

	return (
		<div className="library">
			<Navbar />
			<main className="library-main">
				{bookList.map((book) => {
					<div className="library-main-item">
						<h1>{book.title}</h1>
						<p>{book.author}</p>
					</div>;
				})}
			</main>
		</div>
	);
}

export default Library;

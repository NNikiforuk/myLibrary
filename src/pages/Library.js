import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Library.scss";
import { useEffect, useState } from "react";
import { database } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import NewBook from "../components/NewBook";
import Book from "../components/Book";

function Library(props) {
	const [bookList, setBookList] = useState([]);
	const [wantAddBook, setWantAddBook] = useState(false);
	const booksCollectionRef = collection(database, "books");

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

	const handleChildStateChange = (newState) => {
		setWantAddBook(newState);
	};

	return (
		<main className="library">
			<Navbar booksRef={booksCollectionRef} getBookList={getBookList} />
			<div className="library__books">
				{bookList.map((book) => (
					<Book book={book} bookList={bookList} getBookList={getBookList} key={book.id} />
				))}
			</div>
			{wantAddBook && (
				<NewBook
					onStateChange={handleChildStateChange}
					booksCollectionRef={booksCollectionRef}
					getBookList={getBookList}
				/>
			)}
		</main>
	);
}

export default Library;

import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Library.scss";
import { useEffect, useState } from "react";
import { database } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import NewBook from "../components/NewBook";
import Book from "../components/Book";
import Cover from "../components/Cover";

function Library(props) {
	const [bookList, setBookList] = useState([]);
	const [wantAddBook, setWantAddBook] = useState(false);
	const booksCollectionRef = collection(database, "books");
	const [myName, setMyName] = useState("");
	const [currentYear, setCurrentYear] = useState(0);

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
		setMyName(props.firstName);
	}, []);

	useEffect(() => {
		setCurrentYear(new Date().getFullYear());
	}, []);

	const handleChildStateChange = (newState) => {
		setWantAddBook(newState);
	};

	return (
		<div className="libraryContainer">
			<Navbar booksRef={booksCollectionRef} getBookList={getBookList} />
			<div className="library">
				<h1 className="library__books-hello">Hi {myName}!</h1>

				<div className="bookshelf">
					<div className="bookshelf__books">
						{bookList.map((book) => (
							<Cover book={book} key={book.id} />
						))}
					</div>
					<div className="bookshelf__shelf"></div>
					<div className="bookshelf__shelf__title">{currentYear}</div>
				</div>

				<div className="library__books">
					{bookList.map((book) => (
						<Book
							book={book}
							bookList={bookList}
							getBookList={getBookList}
							key={book.id}
						/>
					))}
				</div>
				{wantAddBook && (
					<NewBook
						onStateChange={handleChildStateChange}
						booksCollectionRef={booksCollectionRef}
						getBookList={getBookList}
					/>
				)}
			</div>
		</div>
	);
}

export default Library;
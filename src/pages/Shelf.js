import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Library.scss";
import NewBook from "../components/NewBook";
import Book from "../components/Book";

function Library() {

	return (
		<div className="shelvesContainer">
			<Navbar booksRef={booksCollectionRef} getBookList={getBookList} />
			<div className="shelves">
				<h1 className="library__books-hello">Hi {myName}!</h1>
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

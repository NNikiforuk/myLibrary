import React from "react";
import "../styles/Cover.scss";

function Cover(props) {

	const r = Math.floor(Math.random() * 255);
	const g = Math.floor(Math.random() * 255);
	const b = Math.floor(Math.random() * 255);
	const a = 0.8;

	const bookBackgroundColor = {
		backgroundColor: `rgb(${r}, ${g}, ${b}, ${a})`,
	};

	return (
		<div className="bookshelf__book" key={props.book.id} style={bookBackgroundColor} />
	);
}

export default Cover;

import React from "react";

function books(props) {
	const book = props.book;
	return (
		<div key={book.title}>
			<h5>{book.title}</h5>
			<p>{book.author}</p>
			<p>{book.pages} </p>
		</div>
	);
}

export default books;

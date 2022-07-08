import React from "react";
import Books from "./Books";
function RenderingLists() {
	const bookList = ["Final Empire", "Well of Ascension", "Hero of Ages"];

	const books = [
		{
			title: "Final Empire",
			author: "Brandon Sanderson",
			pages: 564,
		},
		{
			title: "Well of Ascension",
			author: "Brandon Sanderson",
			pages: 783,
		},
		{
			title: "Hero of Ages",
			author: "Brandon Sanderson",
			pages: 503,
		},
	];

	return (
		<div>
			{bookList.map((book) => {
				return <h2 key={book}>{book}</h2>;
			})}

			<hr />
			{books.map((book) => {
				return <Books key={book.title} book={book} />;
			})}
		</div>
	);
}

export default RenderingLists;

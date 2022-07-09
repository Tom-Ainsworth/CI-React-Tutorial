import React, { useState } from "react";

function ControlledFormHooks() {
	const [name, setName] = useState("");
	const [category, setCategory] = useState("website");
	const [comments, setComments] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(name, category, comments);
	};
	return (
		<div>
			<h2>Please fill the form in</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="id-name">Your Name:</label>
					<input id="id-name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
				</div>
				<div>
					<label htmlFor="id-category">Query category:</label>

					<select id="id-category" name="category" onChange={(e) => setCategory(e.target.value)}>
						<option value="website">Website issue</option>
						<option value="order">Order issue</option>
						<option value="general">General issue</option>
					</select>
				</div>
				<div>
					<label htmlFor="id-comments">Comments:</label>
					<textarea id="id-comments" name="comments" onChange={(e) => setComments(e.target.value)} />
				</div>
				<input type="submit" value="Submit"></input>
			</form>
		</div>
	);
}

export default ControlledFormHooks;

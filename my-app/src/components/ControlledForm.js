import React, { Component } from "react";

export class ControlledForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			category: "website",
			comment: "",
		};
	}

	handleNameChange = (e) => {
		this.setState(
			{
				name: e.target.value,
			},
			() => {
				console.log(this.state.name);
			}
		);
	};

	handleCategoryChange = (e) => {
		this.setState(
			{
				category: e.target.value,
			},
			() => {
				console.log(this.state.category);
			}
		);
	};

	handleCommentChange = (e) => {
		this.setState(
			{
				comment: e.target.value,
			},
			() => {
				console.log(this.state.comment);
			}
		);
	};

	render() {
		return (
			<div>
				<h2>Please fill the form in</h2>
				<form>
					<div>
						<label htmlFor="id-name">Your Name:</label>
						<input
							id="id-name"
							name="name"
							type="text"
							value={this.state.name}
							onChange={this.handleNameChange}></input>
					</div>
					<div>
						<label htmlFor="id-category">Query category:</label>

						<select id="id-category" name="category" onChange={this.handleCategoryChange}>
							<option value="website">Website issue</option>
							<option value="order">Order issue</option>
							<option value="general">General issue</option>
						</select>
					</div>
					<div>
						<label htmlFor="id--comments">Comments:</label>
						<textarea id="id--comments" name="comments" onChange={this.handleCommentChange} />
					</div>
					<input type="submit" value="Submit"></input>
				</form>
			</div>
		);
	}
}

export default ControlledForm;

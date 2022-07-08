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

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
	};
	render() {
		return (
			<div>
				<h2>Please fill the form in</h2>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label htmlFor="id-name">Your Name:</label>
						<input id="id-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}></input>
					</div>
					<div>
						<label htmlFor="id-category">Query category:</label>

						<select id="id-category" name="category" onChange={this.handleChange}>
							<option value="website">Website issue</option>
							<option value="order">Order issue</option>
							<option value="general">General issue</option>
						</select>
					</div>
					<div>
						<label htmlFor="id--comments">Comments:</label>
						<textarea id="id--comments" name="comments" onChange={this.handleChange} />
					</div>
					<input type="submit" value="Submit"></input>
				</form>
			</div>
		);
	}
}

export default ControlledForm;

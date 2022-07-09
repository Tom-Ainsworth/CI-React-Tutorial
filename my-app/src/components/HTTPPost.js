import React, { Component } from "react";
import axios from "axios";

export class HTTPPost extends Component {
	constructor(props) {
		super(props);

		this.state = {
			apiResponse: null,
		};
	}

	// componentDidMount() {
	// 	axios
	// 		.get("https://jsonplaceholder.typicode.com/posts")
	// 		.then((response) => {
	// 			console.log(response);
	// 			this.setState({ posts: Array.isArray(response.data) ? response.data : [response.data] });
	// 		})
	// 		.catch((error) => {
	// 			this.setState({ error: error.message });
	// 		});
	// }

	postToApi = () => {
		axios
			.post("https://jsonplaceholder.typicode.com/posts", {
				title: "Hello World",
				body: "It Works!",
				userId: 123,
			})
			.then((response) => this.setState({ apiResponse: response.data }));
	};
	render() {
		const { apiResponse } = this.state;
		return (
			<div>
				<button onClick={this.postToApi}>Create Post</button>
				{apiResponse ? (
					<div>
						<h1>{apiResponse.title}</h1>
						<p>Post ID: {apiResponse.id}</p>
						<p>{apiResponse.body}</p>
						<p>user id: {apiResponse.userId}</p>
					</div>
				) : (
					<p>Please click the button above</p>
				)}
			</div>
		);
	}
}

export default HTTPPost;

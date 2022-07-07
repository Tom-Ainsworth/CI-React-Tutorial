import React from "react";

class StatefulGreeting extends React.Component {
	// Instantiating the state as an empty object
	constructor(props) {
		super(props);
		this.state = {
			introduction: "Hello!",
			buttonText: "Exit!",
		};
	}

	handleClick() {
		this.setState(
			{
				introduction: "Goodbye!",
				buttonText: "Enter",
			},
			() => {
				console.log("New State", this.state.introduction, this.state.buttonText);
			}
		);
		console.log(this.state.introduction, this.state.buttonText);
	}

	render() {
		return (
			<div>
				<h1>
					{this.state.introduction} {this.props.greeting}
				</h1>
				<button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
			</div>
		);
	}
}

export default StatefulGreeting;

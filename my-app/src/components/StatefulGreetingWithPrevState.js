import React from "react";

class StatefulGreeting extends React.Component {
	// Instantiating the state as an empty object
	constructor(props) {
		super(props);
		this.state = {
			introduction: "Hello!",
			buttonText: "Exit!",
			count: 0,
		};
	}

	handleClick() {
		this.setState((prevState, prevProps) => {
			console.log("Previous State:", prevState, prevProps);
			return {
				introduction: prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
				buttonText: prevState.buttonText === "Enter!" ? "Exit!" : "Enter!",
			};
		});
	}

	increment() {
		this.setState((prevState, prevProps) => {
			console.log("Previous State:", prevState, prevProps);
			return {
				count: prevState.count + 1,
			};
		});
	}

	incrementFive() {
		this.increment();
		this.increment();
		this.increment();
		this.increment();
		this.increment();
	}

	render() {
		return (
			<div>
				<h1>{this.state.introduction}</h1>
				<button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
				<button onClick={() => this.increment()}>Increment</button>
				<p>You've clicked {this.state.count} times</p>
			</div>
		);
	}
}

export default StatefulGreeting;

import React, { Component } from "react";
import MethodsAsPropsChild from "./MethodsAsPropsChild";

class MethodsAsPropsParent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false,
		};
	}

	// Method to JUST handle sign in function
	handleSignIn = () => {
		this.setState((prevState) => ({
			isLoggedIn: prevState.isLoggedIn === true ? false : true,
		}));
	};

	// Method to handle JUST sign out function
	handleSignOut = () => {
		this.setState({ isLoggedIn: false });
		console.log(this);
	};

	// * Better method to handle both at once by toggling the state to the one that is NOT the current value
	toggleIsLoggedIn = () => {
		this.setState((prevState) => ({
			isLoggedIn: !prevState.isLoggedIn,
		}));
	};

	render() {
		return (
			<div>
				<MethodsAsPropsChild
					isLoggedIn={this.state.isLoggedIn}
					handleSignIn={this.handleSignIn}
					handleSignOut={this.handleSignOut}
					toggleIsLoggedIn={this.toggleIsLoggedIn}
				/>
			</div>
		);
	}
}

export default MethodsAsPropsParent;

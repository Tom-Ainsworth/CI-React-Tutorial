import React from "react";

function ConditionalRenderingFunction(props) {
	return (
		<div>
			<h1>{props.connected ? "Connected" : "Disconnected"}</h1>
		</div>
	);
}

export default ConditionalRenderingFunction;

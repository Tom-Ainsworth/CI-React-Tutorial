import React from "react";

function EvenetsFunctional() {
	function clickHandler() {
		console.log("Clicked the function button");
	}
	return (
		<div>
			<button onClick={clickHandler}>Click me - function component</button>
		</div>
	);
}

export default EvenetsFunctional;

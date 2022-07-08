import React from "react";

function UserData(props) {
	return (
		<div>
			<h1>{props.isLoaded ? "Data loaded" : "Data not loaded"}</h1>
		</div>
	);
}

export default UserData;

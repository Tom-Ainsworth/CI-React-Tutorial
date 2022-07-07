import logo from "./logo.svg";
import "./App.css";
import StatefulGreetingWithPrevState from "./components/StatefulGreetingWithPrevState";
function App() {
	return (
		<div className="App">
			<StatefulGreetingWithPrevState greeting="Nice to meet you!" name="Tom" age="28" />
		</div>
	);
}

export default App;

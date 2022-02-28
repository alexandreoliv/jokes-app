import React from "react";
import { Counter } from "./features/counter/Counter";
import { Favourites } from "./features/favourites/Favourites";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Counter />
				<Favourites />
			</header>
		</div>
	);
}

export default App;

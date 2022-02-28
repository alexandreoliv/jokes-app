import React from "react";
import { Jokebox } from "./features/jokebox/Jokebox";
import { Favourites } from "./features/favourites/Favourites";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Jokebox />
				<Favourites />
			</header>
		</div>
	);
}

export default App;

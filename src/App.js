
import React from "react";
import "./App.css";
import Navbar from "./components/navbar.js";
import Learn from "./components/learn.js";
import Skils from "./components/skils.js";

function App() {
	return (
		<div>
			<Navbar />
			<Learn />
			<Skils />
		</div>
	);
}
export default App;

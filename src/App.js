import React from "react";
import "./App.css";
import Navbar from "./components/navbar.js";
import Learn from "./components/learn.js";
import Skils from "./components/skils.js";
import About from "./components/about.js";
import Pricing from "./components/contact.js";
import Footr from "./components/footr.js";

function App() {
	return (
		<div>
			<Navbar />
			<Learn />
			<Skils />
			<About />
			<Pricing />
			<Footr />
		</div>
	);
}
export default App;

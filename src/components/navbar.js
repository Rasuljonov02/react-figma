import React from "react";
import logoTip from "../img/Britlex.png";
import Img from "./kitop.js";

function Navbar() {
	return (
		<>
			<div className="navbar">
			<Img link={logoTip} alt="salom" />


				<span>
					<a href="replace">Home</a>
					<a href="replace">Skills</a>
					<a href="replace">About Us</a>
					<a href="replace">Pricing</a>
					<a href="replace">Contacts</a>
				</span>

				<button className="navBtn">Let's Talk</button>
			</div>
		</>
	);
}

export default Navbar;

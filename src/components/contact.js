import React from "react";
import odam from "../img/odamcha.png";

import Img from "./kitop.js";

function Pricing() {
	return (
		<>
			<div className="contact">
				<div className="chaplar">{<Img link={odam} alt="odamcha" />}</div>
				<div className="onglarv">
					<h1 className="contacth1">Contact us</h1>
					<p className="aaaa">
						Discover your current English level by taking our free online English test.Sign up to
						our newsletter for learning tips and free resources
					</p>
					<span className="ferx">
						<h1 className="emter">Enter Your E-mail</h1>
						<button className="btn">Subscribe</button>
					</span>
				</div>
			</div>
		</>
	);
}

export default Pricing;

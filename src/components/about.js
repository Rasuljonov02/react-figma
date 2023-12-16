import React from "react";
import pul from "../img/pul.png";

import Img from "./kitop.js";

function About() {
	return (
		<>
			<div className="about">
				<div className="abouyChap">
					<h1 className="abouth1">About</h1>
					<p className="aboutp">
						The model offers a framework for discussing problems related  to the user's
						experience, as well as possible ways and means of  solving them. Application
						development begins at the top level  (strategy), where the future software product
						is described quite  vr abstractly from the point of view of the expectations of
						both
						users and the customer.
					</p>
					<span className="aboutSpan">
						<p className="aboutP">
							<h1 className="son">800</h1>
							Pupils
						</p>
						<p className="aboutP">
							<h1 className="son">18</h1>
							Teachers
						</p>
						<p className="aboutP">
							<h1 className="son">6</h1>
							Foreign lanfuages
						</p>
					</span>
				</div>
				<div className="abouyOng">
					<Img link={pul} alt="pul" />
				</div>
			</div>
		</>
	);
}

export default About;

import React from "react";
import logo from "../img/Britlex.png";

import Img from "./kitop.js";

function Footr() {
	return (
		<>
			<div className="footr">
				<div className="log">
					{<Img link={logo} alt="Britlex" />}
					<span>
						<p className="tugadi">Terms and Conditions • Privacy Policy • Cookie Policy</p>
					</span>
				</div>
			</div>
		</>
	);
}

export default Footr;

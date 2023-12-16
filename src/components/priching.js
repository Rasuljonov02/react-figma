import React from "react";
import self from "../img/self.png";
import live from "../img/live.png";
import personal from "../img/personal.png";

import Img from "./kitop.js";

function Pricing() {
	return (
		<>


		
			<div className="pricing">
				<h1>Pricing</h1>
				<div className="pricingImg">
					<div className="self">
						<Img link={self} alt="selfasas" />
						<h3 className="self-study">Self-srudy online course</h3>
						<p className="selStart">
							Start learning English online in live classes with qualified EC teachers and students
							from all over the world.
						</p>
						<span className="per">
							<h3> £5.99</h3> <p> per month</p>
						</span>
					</div>

					<div className="selfa">
						<Img link={live} alt="livea" />
						<h3 className="self-study">Live online classes</h3>
						<p className="selStart">
							Interactive group classes with expert teachers. Free 7-day trial
						</p>
						<span className="per">
							<h3> £12.99</h3> <p> per month</p>
						</span>
					</div>
					<div className="nhhyfdgf">
						<Img link={personal} alt="personal" />
						<h3 className="self-study">Personal Tuition</h3>
						<p className="selStart">
							Online one-to-one English tutoring – enjoy our first session for only $1
						</p>
						<span className="per">
							<h3> £20.99</h3> <p> per month</p>
						</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default Pricing;

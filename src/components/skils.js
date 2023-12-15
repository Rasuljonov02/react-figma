import React from "react";
import spiking from "../img/speaking.png";
import Liking from "../img/liting.png";
import writing from "../img/writing.png";
import rading from "../img/rading.png";

import Img from "./kitop.js";


function Skils() {
	return (
		<>
			<div className="skils">
				<h1>Skills</h1>
				<div className="gridlar">
					<div className="speking">
						<Img link={spiking} alt="sale" />
						<span className="spancha">
							<h2>Speaking</h2>
							<p>
								Improve your English skills and Confidensce. <br />
								Live classes and interaction lessons online . <br />
								20% extra free for a limited time only
							</p>
							<p>
								Learn English online and improve your <br />
								skils through our high-quality courses <br />
								and resources - all designed for adult <br />
								language learnes.
							</p>
							<button className="learn2">Learn more</button>
						</span>
					</div>
					<div className="writing">
						<Img link={writing} alt="writ" />
						<span className="spancha">
							<h2>Writing </h2>
							<p>
								One of the most important and extensive <br />
								areas of natural acience, the science the <br />
								studies substances, also their composition
							</p>
							<button className="learn2">Learn more</button>
						</span>
					</div>
					<div className="reding">
						<Img link={rading} alt="reding" />
						<span className="spancha">
							<h2>Reading </h2>
							<p>
								perception and response actions of the user <br />
								resulting from the use and/or upcoming use <br />
								of the product, system or service.
							</p>
							<button className="learn2">Learn more</button>
						</span>
					</div>
					<div className="liting">
					<span className="spanalr2">	<span className="spancha">
							<h2>Listening </h2>
							<p>
								Here you can find activities to practise <br />
								your listening skills. Listening will help you <br />
								to improve your understanding.
							</p>
							<button className="learn2">Learn more</button>
						</span>
						<Img link={Liking} alt="litinglar" /></span>
					</div>
				</div>
			</div>
		</>
	);
}

export default Skils;

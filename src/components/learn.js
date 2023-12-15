import React from "react";
import img1 from "../img/img1.png";
import Sivit from "../img/lanpichka.png";
import Img from "./kitop.js";

function Learn() {
  return (
    <>
      <div className="Learn">
        <div className="any">
          <h1 className="h1">
            Learn <br /> Any Foreign <br /> Language
          </h1>
          <Img link={Sivit} alt="sivit" />
          <p className="p">
            With our teachers who write a program for <br />
            each student, you will be able to make your <br />
            first sketch after the first lesson.
          </p>
          <button className="get">Get Started</button>
        </div>
        <div className="img1">
          <Img link={img1} alt="sale" />
        </div>
      </div>
    </>
  );
}

export default Learn;

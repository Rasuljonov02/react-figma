import React from "react";

function Img({ link, alt }) {
  return <img className={`${alt}`} src={link} alt={alt} />;
}

export default Img;

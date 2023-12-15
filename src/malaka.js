import React from "react";
import "./App.css";
import Navbar from "./components/navbar.js";

function App() {
  function img(link, alt) {
    return <img src={link} alt={alt} />;
  }

  return (
    <div>
      <Navbar />
      <h1>salom</h1>
      {img("path_to_image", "alt_text")}
    </div>
  );
}

export default App;

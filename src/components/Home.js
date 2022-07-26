import React from "react";
import coffee from "./imageone.jpeg";

function Home() {
  return (
    <div>
      <header>
        <a href="/"> Home |</a>
        <a href="/About"> About |</a>
        <a href="/Blog"> Blog |</a>
        <a href="/Items"> Items |</a>
        <a href="/Cart"> Cart |</a>
        <a href="/Contact"> Contact</a>
        <h1>Deets Coffee Cafe</h1>
      </header>
      <body>
        <p>Welcome to our coffee shop!</p>
        <br />
        <img src={coffee} alt="imageone" />
        <br />
        <p></p>
      </body>
    </div>
  );
}

export default Home;

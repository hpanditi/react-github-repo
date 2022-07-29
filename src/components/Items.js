import React from "react";
import light from "./lightroast.jpeg";
import medium from "./mediumroast.jpeg";
import dark from "./darkroast.jpeg";
import extradark from "./extradarkroast.jpeg";

function Items() {
  return (
    <div>
      <header>
        <a href="/"> Home |</a>
        <a href="/About"> About |</a>
        <a href="/Blog"> Blog |</a>
        <a href="/Menu"> Menu |</a>
        <a href="/Items"> Items |</a>
        <a href="/Cart"> Cart |</a>
        <a href="/Contact"> Contact</a>
        <h1>Items</h1>
      </header>
      <br />
      <body>
        <img
          src={light}
          alt="lightroast"
          style={{ width: "250px", height: "250 px", padding: "5px" }}
        />
        <p>Light Roast $12.95/pound</p>
        <a href="https://us-central1-react-gcp-pipeline.cloudfunctions.net/function-light">
          <button className="light-learn-more">Learn More</button>
        </a>
        <p></p>
        <br />
        <img
          src={medium}
          alt="mediumroast"
          style={{ width: "250px", height: "250 px", padding: "5px" }}
        />
        <p>Medium Roast $12.95/pound</p>
        <a href="https://us-central1-react-gcp-pipeline.cloudfunctions.net/function-medium">
          <button className="medium-learn-more">Learn more</button>
        </a>
        <p></p>
        <br />
        <img
          src={dark}
          alt="darkroast"
          style={{ width: "250px", height: "250 px", padding: "5px" }}
        />
        <p>Dark Roast $12.95/pound</p>
        <a href="https://us-central1-react-gcp-pipeline.cloudfunctions.net/function-dark">
          <button className="dark-learn-more">Learn more</button>
        </a>
        <p></p>
        <br />
        <img
          src={extradark}
          alt="extradarkroast"
          style={{ width: "250px", height: "250 px", padding: "5px" }}
        />
        <p>Extra Dark Roast $12.95/pound</p>
        <a href="https://us-central1-react-gcp-pipeline.cloudfunctions.net/function-extradark">
          <button className="extradark-learn-more">Learn more</button>
        </a>
      </body>
    </div>
  );
}

export default Items;

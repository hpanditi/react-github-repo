import React from "react";
import Button from "react-bootstrap/Button";
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
        <Button>Add to cart</Button>
        <Button>Learn more</Button>
        <p></p>
        <br />
        <img
          src={medium}
          alt="mediumroast"
          style={{ width: "250px", height: "250 px", padding: "5px" }}
        />
        <p>Medium Roast $12.95/pound</p>
        <Button>Add to cart</Button>
        <Button>Learn more</Button>
        <p></p>
        <br />
        <img
          src={dark}
          alt="darkroast"
          style={{ width: "250px", height: "250 px", padding: "5px" }}
        />
        <p>Dark Roast $12.95/pound</p>
        <Button>Add to cart</Button>
        <Button>Learn more</Button>
        <p></p>
        <br />
        <img
          src={extradark}
          alt="extradarkroast"
          style={{ width: "250px", height: "250 px", padding: "5px" }}
        />
        <p>Extra Dark Roast $12.95/pound</p>
        <Button>Add to cart</Button>
        <Button>Learn more</Button>
      </body>
    </div>
  );
}

export default Items;

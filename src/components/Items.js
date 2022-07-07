import React from "react";
import light from "./lightroast.jpeg";
import medium from "./mediumroast.jpeg";
import dark from "./darkroast.jpeg";
import extradark from "./extradarkroast.jpeg";

function Items() {
  const handleLightAddToCart = () => alert("Added to cart!");
  const handleLightLearnMore = () =>
    alert(
      "This is our lightest roast. There are hardly any traces of oil and they have the greatest acidity. This is perfect if you enjoy a mild taste!  "
    );
  const handleMediumAddToCart = () => alert("Added to cart!");
  const handleMediumLearnMore = () =>
    alert(
      "This medium roast is the most balanced. It is less acidic and a tad sweeter! "
    );
  const handleDarkAddToCart = () => alert("Added to cart!");
  const handleDarkLearnMore = () =>
    alert(
      "The dark roast has beans that have more oil. They are low in acidity and have a stronger flavor!"
    );
  const extradarkAddToCart = () => alert("Added to cart!");
  const extradarkLearnMore = () =>
    alert(
      "Our darkest roast features a flavor profile that has very low acidity and a bold, dark flavor!"
    );

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
        <button className="light-add-to-cart" onClick={handleLightAddToCart}>
          Add to cart
        </button>
        <button className="light-learn-more" onClick={handleLightLearnMore}>
          Learn more
        </button>
        <p></p>
        <br />
        <img
          src={medium}
          alt="mediumroast"
          style={{ width: "250px", height: "250 px", padding: "5px" }}
        />
        <p>Medium Roast $12.95/pound</p>
        <button className="medium-add-to-cart" onClick={handleMediumAddToCart}>
          Add to cart
        </button>
        <button className="medium-learn-more" onClick={handleMediumLearnMore}>
          Learn more
        </button>
        <p></p>
        <br />
        <img
          src={dark}
          alt="darkroast"
          style={{ width: "250px", height: "250 px", padding: "5px" }}
        />
        <p>Dark Roast $12.95/pound</p>
        <button className="dark-add-to-cart" onClick={handleDarkAddToCart}>
          Add to cart
        </button>
        <button className="dark-learn-more" onClick={handleDarkLearnMore}>
          Learn more
        </button>
        <p></p>
        <br />
        <img
          src={extradark}
          alt="extradarkroast"
          style={{ width: "250px", height: "250 px", padding: "5px" }}
        />
        <p>Extra Dark Roast $12.95/pound</p>
        <button className="extradark-add-to-cart" onClick={extradarkAddToCart}>
          Add to cart
        </button>
        <button className="extradark-learn-more" onClick={extradarkLearnMore}>
          Learn more
        </button>
      </body>
    </div>
  );
}

export default Items;

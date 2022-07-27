import React from "react";
import portrait from "./profilepicture.jpeg";

function About() {
  return (
    <div>
      <header>
        <a href="/"> Home |</a>
        <a href="/About"> About |</a>
        <a href="/Blog"> Blog |</a>
        <a href="/Items"> Items |</a>
        <a href="/Cart"> Cart |</a>
        <a href="/Contact"> Contact</a>
        <h1>About</h1>
      </header>
      <body>
        <div className="about-information">
          <p>A little bit about this shop...</p>
          <p>
            Over the years, I have always enjoyed drinking coffee. Whether it's
            just on a Saturday morning, making a cup before work or just
            relaxing on a rainy day, a cup of quality joe was always endearing.
            I came to appreciate coffee in a different way as the years went on,
            which lead me to give more importance and make it noteworthy! I
            believe each cup should be made with quality ingredients, special
            care, and warm compassion. This lead to this coffee shop where we
            work to make each cup memorable. We strive to provide ingredients
            from the best resources, have been perfecting a roasting process,
            and making sure it is wonderful! We hope you enjoy our items!
          </p>
        </div>
        <div className="self-image">
          <img
            src={portrait}
            alt="portrait"
            style={{ width: "250px", height: "250px" }}
          />
        </div>
      </body>
    </div>
  );
}

export default About;

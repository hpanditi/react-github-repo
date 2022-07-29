import React from "react";
import Button from "react-bootstrap/Button";

function Menu() {
  return (
    <div className="coffee-shop-menu">
      <header>
        <a href="/"> Home |</a>
        <a href="/About"> About |</a>
        <a href="/Blog"> Blog |</a>
        <a href="/Menu"> Menu |</a>
        <a href="/Items"> Items |</a>
        <a href="/Cart"> Cart |</a>
        <a href="/Contact"> Contact</a>
        <h1>Menu</h1>
        <link rel="stylesheet" href="Menu.css" />
      </header>
      <body>
        <p>Check out our menu and stop by for a cup of joe!</p>
        <table class="menu">
          <th>Item</th>
          <th>Price</th>
          <tr>
            <td>Espresso Shot</td>
            <td>$ 2.50</td>
          </tr>
          <tr>
            <td>Latte</td>
            <td>$ 4.75</td>
          </tr>
          <tr>
            <td>Cappucino</td>
            <td>$ 5.25</td>
          </tr>
        </table>
        <br />
        <p>
          Can't find what you're looking for? Check out the link below and ask
          us if we can make it!
        </p>
        <a href="https://www.youtube.com/watch?v=rLaVDQy0q8Y">
          <Button>Coffe Menu Explained</Button>
        </a>
      </body>
    </div>
  );
}

export default Menu;

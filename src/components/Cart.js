import React from "react";

const Product = (props) => {
  return <h1>Product Component!</h1>;
};

function Cart() {
  return (
    <div>
      <header>
        <a href="/"> Home |</a>
        <a href="/About"> About |</a>
        <a href="/Blog"> Blog |</a>
        <a href="/Items"> Items |</a>
        <a href="/Cart"> Cart |</a>
        <a href="/Contact"> Contact</a>
        <h1>Cart</h1>
      </header>
      <body>
        <Product />
      </body>
    </div>
  );
}

export default Cart;

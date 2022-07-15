import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Basket from "./Basket.js";

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
        <Header></Header>
        <div>
          <Main></Main>
          <Basket></Basket>
        </div>
      </body>
    </div>
  );
}

export default Cart;

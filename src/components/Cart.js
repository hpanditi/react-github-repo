import React from "react";

console.clear();

let productList = [
  { name: "light roast", price: 12.95, info: "light roast coffee" },
  { name: "medium roast", price: 12.95, info: "medium roast coffee" },
  { name: "dark roast", price: 12.95, info: "dark roast coffee" },
  { name: "extra dark roast", price: 12.95, info: "extra dark roast coffee" },
];

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
        <div>
          <div className="row form-group">
            <div className="col-sm-10">
              <h4>
                {this.props.name}: ${this.props.price}
              </h4>
            </div>
            <div className="col-sm-2 text-right">qty: {this.state.qty}</div>
          </div>
          <div className="row btn-toolbar">
            <div className="col-6">
              <button
                className="btn btn-outline-primary"
                onClick={this.showInfo}
              >
                show info
              </button>
            </div>
            <div className="col-6 text-right">
              <button className="btn btn-outline-primary" onClick={this.add}>
                +1
              </button>
              <button
                className="btn btn-outline-primary"
                onClick={this.subtract}
                disabled={this.state.qty < 1}
              >
                -1
              </button>
            </div>
          </div>
          <hr />
        </div>
      </body>
    </div>
  );
}

export default Cart;

import React from "react";
import Button from "react-bootstrap/Button";

function Checkout() {
  return (
    <div>
      <header>
        <h1>Checkout</h1>
      </header>
      <body>
        <div className="paymentform" style={{}}>
          <form action="payment-form">
            <label htmlFor="">
              Card Holder:{" "}
              <input type="text" name="cardholder" placeholder="Bob Smith" />
            </label>
            <p></p>
            <label htmlFor="">
              Credit Card Number:{" "}
              <input
                type="text"
                name="cardnumber"
                placeholder="****************"
              />
            </label>
            <p></p>
            <label htmlFor="">
              Expiration Date:{" "}
              <input type="text" name="date" placeholder="MM/YY" />
            </label>
            <p></p>
            <label htmlFor="">
              Security Code:{" "}
              <input type="text" name="securitycode" placeholder="***" />
            </label>
            <p></p>
            <a href="/ThankYou">
              {/* <input type="submit" value="Submit" />{" "} */}
              <Button>Submit</Button>
            </a>
          </form>
        </div>
      </body>
    </div>
  );
}

export default Checkout;

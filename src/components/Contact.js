import React from "react";
import Button from "react-bootstrap/Button";

function Contact() {
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
        <h1>Contact</h1>
      </header>
      <body>
        <p>
          Feel free to send us a message with any questions and/or comments! We
          would love to hear from you!
        </p>
        <br />
        <form>
          <div style={{ padding: 20 }}>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" required />
          </div>
          <div style={{ padding: 25 }}>
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" required />
          </div>
          <div>
            <label htmlFor="message">Message: </label>
            <textarea id="message" required />
          </div>
          <button type="submit">submit</button>
        </form>
        <p>Follow us on socials!</p>
        <a href="https://www.facebook.com">
          <Button>Facebook</Button>
        </a>
        <br />
        <a href="http://www.instagram.com">
          <Button>Instagram</Button>
        </a>
        <br />
        <a href="http://www.twitter.com">
          <Button>Twitter</Button>
        </a>
      </body>
    </div>
  );
}

export default Contact;

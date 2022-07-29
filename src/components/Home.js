import React from "react";
import coffee from "./imageone.jpeg";
import Button from "react-bootstrap/Button";

function Home() {
  const quoteGenerator = () => {
    alert('"Coffee smells like freshly ground heaven". - Jessi Lane Adams');
  };
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
        <h1>Deets Coffee Cafe</h1>
      </header>
      <body>
        <p>Welcome to our coffee shop!</p>
        <br />
        <img src={coffee} alt="imageone" />
        <br />
        <p></p>
        <button type="button" onClick={quoteGenerator}>
          Quote of The Day
        </button>
        <p></p>
        <p>Hours of Operation:</p>
        <table class="hours">
          <th>Day</th>
          <th>Hours</th>
          <tr>
            <td>Monday</td>
            <td> 6:00 a.m. - 9:00 p.m.</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td> 6:00 a.m. - 9:00 p.m.</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td> 6:00 a.m. - 9:00 p.m.</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td> 6:00 a.m. - 9:00 p.m.</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td> 6:00 a.m. - 9:00 p.m.</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td> 6:00 a.m. - 9:00 p.m.</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td> 6:00 a.m. - 6:00 p.m.</td>
          </tr>
        </table>
        <br />
        <a href="/Menu"><Button variant="primary">Menu</Button></a>
      </body>
    </div>
  );
}

export default Home;

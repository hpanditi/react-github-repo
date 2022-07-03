import React from "react";

function Blog() {
  return (
    <div>
      <header>
        <a href="/"> Home |</a>
        <a href="/About"> About |</a>
        <a href="/Blog"> Blog |</a>
        <a href="/Items"> Items |</a>
        <a href="/Cart"> Cart |</a>
        <a href="/Contact"> Contact</a>
        <h1>Blog</h1>
      </header>
      <body>
        <p>Here is more stuff about coffee!</p>
        <br />
        <div className="article-one">
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            facere assumenda vitae voluptate pariatur ducimus blanditiis
            sapiente atque corrupti harum eveniet animi magnam inventore, labore
            laboriosam fuga quisquam optio a!
          </article>
        </div>
      </body>
    </div>
  );
}

export default Blog;

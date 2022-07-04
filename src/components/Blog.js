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
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              harum inventore, voluptas natus ad neque odio incidunt! Id
              impedit, ipsa, autem consequatur corrupti tenetur harum iure rerum
              dolorum magnam recusandae.
            </p>
          </article>
        </div>
        <br />
        <div className="article-two">
          <article>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              necessitatibus consectetur, voluptatum repudiandae fugiat
              quibusdam autem. Iusto similique ad voluptates qui, quidem
              quisquam delectus ipsum provident maxime repudiandae aliquam
              porro?
            </p>
          </article>
        </div>
        <br />
        <div className="article-three">
          <article>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              accusantium nam aut expedita consequuntur nostrum dicta labore sit
              fuga tempora eum rem deleniti distinctio exercitationem magnam
              laboriosam, atque tenetur quidem.
            </p>
          </article>
        </div>
      </body>
    </div>
  );
}

export default Blog;

import "../styles/style.css";
import { DOMSelectors } from "./dom";
import { array } from "./array";
DOMSelectors.button.addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});

function allegory() {
  array
    .filter((array) => array.genre.includes("Allegory"))
    .forEach((book) => {
      let name = book.name;
      let price = book.price;
      let avgrating = book.avgrating;
      let author = book.author;
      let published = book.published;
      let img = book.img;
      DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
        `<div id=books> <img src= ${img}> <p>Book: ${name}</p> <p>Price: ${price}</p> <p>Rating: ${avgrating} </p><p>Author: ${author}</p> <p>Date Published: ${published}</p></p></div>`
      );
    });
}

function inject() {
  array.forEach((book) => {
    let name = book.name;
    let price = book.price;
    let avgrating = book.avgrating;
    let author = book.author;
    let published = book.published;
    let img = book.img;
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div id=books> <img src= ${img}> <p>Book: ${name}</p> <p>Price: ${price}</p> <p>Rating: ${avgrating} </p><p>Author: ${author}</p> <p>Date Published: ${published}</p></p></div>`
    );
  });
}

function bestrated() {
  array
    .filter((array) => array.avgrating >= 4.0)
    .forEach((book) => {
      let name = book.name;
      let price = book.price;
      let avgrating = book.avgrating;
      let author = book.author;
      let published = book.published;
      let img = book.img;
      DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
        `<div id=books> <img src= ${img}> <p>Book: ${name}</p> <p>Price: ${price}</p> <p>Rating: ${avgrating} </p><p>Author: ${author}</p> <p>Date Published: ${published}</p></p></div>`
      );
    });
}
inject();

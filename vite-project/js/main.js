import "../styles/style.css";
import { DOMSelectors } from "./dom";
import { array } from "./array";

function roman() {
  document.getElementById("romanbtn").style.backgroundColor = "#d4af37";
  array
    .filter((array) => array.genre.includes("Bildungsroman"))
    .forEach((book) => {
      let name = book.name;
      let price = book.price;
      let avgrating = book.avgrating;
      let author = book.author;
      let published = book.published;
      let img = book.img;
      DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
        `<div id=books> <img src= ${img} id="cover"> <p>Book: ${name}</p> <p>Price: $${price}</p> <p>Rating: ${avgrating} </p><p>Author: ${author}</p> <p>Date Published: ${published}</p></div>`
      );
    });
}
function inject() {
  document.getElementById("bookbtn").style.backgroundColor = "#d4af37";
  array.forEach((book) => {
    let name = book.name;
    let price = book.price;
    let avgrating = book.avgrating;
    let author = book.author;
    let published = book.published;
    let img = book.img;
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div id=books> <img src= ${img} id="cover"> <p>Book: ${name}</p> <p>Price: $${price}</p> <p>Rating: ${avgrating} </p><p>Author: ${author}</p> <p>Date Published: ${published}</p></div>`
    );
  });
}

function bestrated() {
  document.getElementById("bestratedbtn").style.backgroundColor = "#d4af37";
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
        `<div id=books> <img src= ${img} id="cover"> <p>Book: ${name}</p> <p>Price: $${price}</p> <p>Rating: ${avgrating} </p><p>Author: ${author}</p> <p>Date Published: ${published}</p></div>`
      );
    });
}
function remove() {
  const book = document.querySelectorAll("#books");
  const bookarray = Array.from(book);
  bookarray.forEach((book) => book.remove());
  document.getElementById("bestratedbtn").style.backgroundColor = "";
  document.getElementById("bookbtn").style.backgroundColor = "";
  document.getElementById("romanbtn").style.backgroundColor = "";
}

inject();

DOMSelectors.colorbtn.addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});
DOMSelectors.bestratedbtn.addEventListener("click", function () {
  remove();
  bestrated();
});
DOMSelectors.bookbtn.addEventListener("click", function () {
  remove();
  inject();
});
DOMSelectors.romanbtn.addEventListener("click", function () {
  remove();
  roman();
});

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
      DOMSelectors.content.insertAdjacentHTML(
        "beforeend",
        `<div class=books> <img src= ${img} class="cover"> <p>Book: ${name}</p> <p>Price: $${price}</p> <p>Rating: ${avgrating} </p><p>Author: ${author}</p> <p>Date Published: ${published}</p></div>`
      );
    });
}
function injectCards() {
  document.getElementById("bookbtn").style.backgroundColor = "#d4af37";
  array.forEach((book) => {
    let name = book.name;
    let price = book.price;
    let avgrating = book.avgrating;
    let author = book.author;
    let published = book.published;
    let img = book.img;
    DOMSelectors.content.insertAdjacentHTML(
      "beforeend",
      `<div class=books> <img src= ${img} class="cover"> <p>Book: ${name}</p> <p>Price: $${price}</p> <p>Rating: ${avgrating} </p><p>Author: ${author}</p> <p>Date Published: ${published}</p></div>`
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
      DOMSelectors.content.insertAdjacentHTML(
        "beforeend",
        `<div class=books> <img src= ${img} class="cover"> <p>Book: ${name}</p> <p>Price: $${price}</p> <p>Rating: ${avgrating} </p><p>Author: ${author}</p> <p>Date Published: ${published}</p></div>`
      );
    });
}
function removeCards() {
  const book = document.querySelectorAll(".books");
  const bookarray = Array.from(book);
  bookarray.forEach((book) => book.remove());
  document.getElementById("bestratedbtn").style.backgroundColor = "";
  document.getElementById("bookbtn").style.backgroundColor = "";
  document.getElementById("romanbtn").style.backgroundColor = "";
}

injectCards();

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
  removeCards();
  bestrated();
});
DOMSelectors.bookbtn.addEventListener("click", function () {
  removeCards();
  injectCards();
});
DOMSelectors.romanbtn.addEventListener("click", function () {
  removeCards();
  roman();
});

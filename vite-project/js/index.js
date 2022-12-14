import "../styles/style.css";
import { DOMSelectors } from "./dom";
import { array } from "./array";

const filterFunctions = {
  injectBooks: function () {
    DOMSelectors.bookbtn.style.backgroundColor = "#d4af37";
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
  },

  bestRated: function () {
    DOMSelectors.bestratedbtn.style.backgroundColor = "#d4af37";
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
  },

  roman: function () {
    DOMSelectors.romanbtn.style.backgroundColor = "#d4af37";
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
  },
};

const removeFunction = {
  removeBooks: function () {
    const bookArray = Array.from(document.querySelectorAll(".books"));
    bookArray.forEach((book) => book.remove());
    DOMSelectors.bestratedbtn.style.backgroundColor = "";
    DOMSelectors.bookbtn.style.backgroundColor = "";
    DOMSelectors.romanbtn.style.backgroundColor = "";
  },
};

filterFunctions.injectBooks();

DOMSelectors.colorbtn.addEventListener("click", function () {
  if (document.body.classList.contains("winter")) {
    document.body.classList.add("forest");
    document.body.classList.remove("winter");
  } else {
    document.body.classList.add("winter");
    document.body.classList.remove("forest");
  }
});
DOMSelectors.bestratedbtn.addEventListener("click", function () {
  removeFunction.removeBooks();
  filterFunctions.bestRated();
});
DOMSelectors.bookbtn.addEventListener("click", function () {
  removeFunction.removeBooks();
  filterFunctions.injectBooks();
});
DOMSelectors.romanbtn.addEventListener("click", function () {
  removeFunction.removeBooks();
  filterFunctions.roman();
});

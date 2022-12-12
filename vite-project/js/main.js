import "../styles/style.css";
import { DOMSelectors } from "./dom";
import { books } from "./array";
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
  books
    .filter((books) => books.genre.includes("Allegory"))
    .forEach((book) => {
      let name = book.name;
      let price = book.price;
      let avgrating = book.avgrating;
      let author = book.author;
      let published = book.published;
      let img = book.img;
      DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
        `<div id=books> <img src= ${img}> <p>${name} ${price} ${avgrating} ${author} ${published}</p></div>`
      );
    });
}

function inject() {
  books.forEach((book) => {
    let name = book.name;
    let price = book.price;
    let avgrating = book.avgrating;
    let author = book.author;
    let published = book.published;
    let img = book.img;
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `<div id=books>  <img src= ${img}> <p> ${name} ${price} ${avgrating} ${author} ${published}</p></div>`
    );
  });
}
allegory();

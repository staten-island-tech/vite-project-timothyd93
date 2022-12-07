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

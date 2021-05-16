"use strict";

const listWrapper = document.querySelector(".list-wrapper");
const listItem = document.querySelector(".list-item");
const sublistWrappers = document.querySelectorAll(".sublist-wrapper");

function resetList() {
  for (const item of sublistWrappers) {
    item.classList.add("hidden");
  }
}

function listHandler({ target: { firstElementChild, parentNode } }) {
  if (parentNode === listWrapper) {
    if (firstElementChild.classList.contains("hidden")) {
      resetList();
      firstElementChild.classList.remove("hidden");
      return;
    }
    firstElementChild.classList.add("hidden");
  }
}

listWrapper.addEventListener("click", listHandler);

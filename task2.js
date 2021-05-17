"use strict";

const table = document.querySelector(".blueTable");

function createInput(value) {
  const input = document.createElement("input");
  input.type = "text";
  input.classList.add("table-input");
  input.value = value;
  return input;
}

function deleteHandler(target) {
  const row = target.closest("tr");
  row.remove();
}

table.addEventListener("click", ({ target }) => {
  if (target.className === "delete-btn") {
    deleteHandler(target);
    return;
  }
  if (target.tagName === "SPAN") {
    const content = target.innerText;
    target.innerText = "";
    const input = createInput(content);
    target.append(input);
  }
});

table.addEventListener("keyup", ({ target, code }) => {
  if (target.tagName === "INPUT") {
    if (code === "Enter") {
      target.parentNode.textContent = target.value;
      target.remove();
    }
  }
});

//=============================================================

const addForm = document.querySelector(".addForm");

function createSpan(value) {
  const span = document.createElement("span");
  span.textContent = value;
  return span;
}

function createTD() {
  return document.createElement("td");
}

addForm.addEventListener("click", ({ target }) => {
  if (target.className === "add-btn") {
    const i1 = document.querySelector(".input-fname");
    const i2 = document.querySelector(".input-sname");
    const fname = createTD();
    fname.append(createSpan(i1.value));
    const sname = createTD();
    sname.append(createSpan(i2.value));
    const deleteTD = createTD();
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";
    deleteTD.append(deleteBtn);
    const tr = document.createElement("tr");

    tr.append(fname, sname, deleteTD);
    table.append(tr);

    i1.value = "";
    i2.value = "";
  }
});

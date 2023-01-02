// create divs
const container = document.getElementById("container");
const main = document.getElementById("main");
let rows = document.getElementsByClassName("gridRow");
let boxes = document.getElementsByClassName("cell");

defaultGrid();
function defaultGrid() {
  makeRows(16);
  makeColumns(16);
}

function makeRows(rowNum) {
  for (r = 0; r < rowNum; r++) {
    let row = document.createElement("div");
    container.appendChild(row).className = "gridRow";
  }
}

function makeColumns(cellNum) {
  for (i = 0; i < rows.length; i++) {
    for (j = 0; j < cellNum; j++) {
      let newCell = document.createElement("div");

      rows[j].appendChild(newCell).className = "cell";
    }
  }
}

const size = document.getElementById("grid-size");

size.addEventListener("click", function () {
  let sizing = prompt("Enter a new grid size: (max: 64)");
  console.log(sizing);

  let errorMessasge = document.querySelector(".error");
  if (!isNaN(sizing) && sizing < 65) {
    if (errorMessasge) {
      main.removeChild(errorMessasge);
    }
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    makeRows(sizing);
    makeColumns(sizing);
  } else {
    console.log("Please enter a valid number under 65.");
    if (!errorMessasge) {
      const errorMessasge = document.createElement("p");
      errorMessasge.classList.add("error");
      errorMessasge.textContent = "Please enter a valid number under 100.";
      errorMessasge.style.color = "red";
      main.appendChild(errorMessasge);
    }
  }
});

// Reset Canvas
window.onload = function () {
  const cells = document.getElementsByClassName("cell");
  const reset = document.getElementById("clear-grid");
  const blackButton = document.getElementById("black-button");
  const randomButton = document.getElementById("random-button");
  const eraser = document.getElementById("eraser");

  reset.addEventListener("click", function () {
    for (const cell of cells) {
      cell.classList.remove("active");
      cell.style.backgroundColor = "white";
    }
  });

  blackButton.addEventListener("click", function () {
    for (const cell of cells) {
      cell.addEventListener("mouseover", function () {
        cell.classList.add("active");
        cell.style.backgroundColor = "black";
      });
    }
  });

  randomButton.addEventListener("click", function () {
    for (const cell of cells) {
      cell.addEventListener("mouseover", function () {
        cell.classList.add("active");
        cell.style.backgroundColor = `rgb(
          ${Math.floor(Math.random() * 256)},
          ${Math.floor(Math.random() * 256)},
          ${Math.floor(Math.random() * 256)}
        )`;
      });
    }
  });

  eraser.addEventListener("click", function () {
    for (const cell of cells) {
      cell.addEventListener("mouseover", function () {
        cell.classList.remove("active");
        cell.style.backgroundColor = "white";
      });
    }
  });
};

// create divs
const container = document.getElementById("container");
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

const cells = document.getElementsByClassName("cell");
const blackButton = document.getElementById("black-button");
const randomButton = document.getElementById("random-button");

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

// for (const cell of cells) {
//   cell.addEventListener("mouseover", function () {
//     cell.classList.add("active");
//     cell.style.backgroundColor = `rgb(
//         ${Math.floor(Math.random() * 256)}
//         ${Math.floor(Math.random() * 256)}
//         ${Math.floor(Math.random() * 256)}
//     )`;
//   });
// }

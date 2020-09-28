const table = document.getElementById("table");
const btnResturt = document.getElementById("resturt");
const winResults = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["3", "6", "9"],
  ["1", "5", "9"],
  ["3", "5", "7"],
];

let counterClic = 0;
let arrX = [];
let arr0 = [];

table.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("elem-x") ||
    e.target.classList.contains("elem-0") ||
    !e.target.classList.contains("cell")
  ) {
    return;
  }

  counterClic++;

  const value = e.target.dataset.val;
  let result = null;

  if (counterClic % 2) {
    e.target.classList.add("elem-x");
    arrX.push(value);

    if (arrX.length > 2) {
      result = checkoutWin(arrX);
    }
  } else {
    e.target.classList.add("elem-0");
    arr0.push(value);

    if (arr0.length > 2) {
      result = checkoutWin(arr0);
    }
  }

  if (result !== null) {
    document.getElementById("wrapper").classList.add(`winner-${result}`);
    showButton();
  }

  if (counterClic > 8) {
    showButton();
  }
});

function checkoutWin(arr) {
  for (let i = 0; i < 8; i++) {
    if (
      arr.includes(winResults[i][0]) &&
      arr.includes(winResults[i][1]) &&
      arr.includes(winResults[i][2])
    ) {
      return i + 1;
    }
  }
  return null;
}

function showButton() {
  if (btnResturt.classList.contains("hidden")) {
    btnResturt.classList.remove("hidden");
  }
}

btnResturt.addEventListener("click", function (e) {
  counterClic = 0;
  arrX = [];
  arr0 = [];
  document.getElementById("wrapper").className = "";
  document.querySelectorAll("table td").forEach((elem) => {
    elem.classList = "cell";
  });
  e.target.classList.add("hidden");
});

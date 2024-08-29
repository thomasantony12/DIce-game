var first = Math.floor(Math.random() * 6) + 1;
var second = Math.floor(Math.random() * 6) + 1;
document
  .querySelector(".img1")
  .setAttribute("src", "images/dice" + first + ".png");
document
  .querySelector(".img2")
  .setAttribute("src", "images/dice" + second + ".png");

if (first > second) {
  document.querySelector("h1").innerHTML = "Player One wins";
} else if (first === second) {
  document.querySelector("h1").innerHTML = "Draw";
} else {
  document.querySelector("h1").innerHTML = "Player Two wins";
}

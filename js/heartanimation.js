let heartButtons = document.querySelectorAll("button");
let heartIcons = document.querySelectorAll(".heart-icon");

//I have read about "forEach" here https://www.freecodecamp.org/news/javascript-foreach-js-array-for-each-example///

heartButtons.forEach(function (heartButton, index) {
  heartButton.addEventListener("click", function () {
    heartIcons[index].classList.toggle("heart-icon-fill");
  });
});

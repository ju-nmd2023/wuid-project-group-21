const refs = {
  adding: document.querySelector("button"),
  removing: document.querySelector(".Remove-info-button"),
  input: document.getElementById("Additional-part"),
};
console.log(refs);

refs.adding.addEventListener("click", addingInfo);

function addingInfo() {
  console.log("Hello");
}

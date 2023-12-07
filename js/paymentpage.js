let adding = document.querySelector(".add-info-button");
let removing = document.querySelector(".remove-info-button-hidden");
let input = document.querySelector(".input-container-hidden");

adding.addEventListener("click", addingInfo);

function addingInfo() {
  input.classList.add("input-container-added");
  adding.classList.add("add-info-button-hidden");
  removing.classList.remove("remove-info-button-hidden");
  removing.classList.add("remove-info-button");
}

removing.addEventListener("click", removingInfo);

function removingInfo() {
  input.classList.remove("input-container-added");
  adding.classList.remove("add-info-button-hidden");
  removing.classList.remove("remove-info-button");
  removing.classList.add("remove-info-button-hidden");
}

let headerNav = document.querySelector("header");

window.addEventListener("scroll", headerChanging);

function headerChanging() {
  headerNav.classList.toggle("sticky", window.scrollY > 0);
}

//Header menu burger//

let menu = document.querySelector(".pop-up-menu-hidden");
let burgerIcon = document.querySelector(".menu-icon");
let closingIcon = document.querySelector(".close-icon-hidden");

burgerIcon.addEventListener("click", popUpMenu);

function popUpMenu() {
  menu.classList.remove("pop-up-menu-hidden");
  menu.classList.add("pop-up-menu");
  burgerIcon.classList.remove("menu-icon");
  burgerIcon.classList.add("menu-icon-hidden");
  closingIcon.classList.remove("close-icon-hidden");
  closingIcon.classList.add("close-icon");
}

closingIcon.addEventListener("click", popUpMenuClose);

function popUpMenuClose() {
  menu.classList.remove("pop-up-menu");
  menu.classList.add("pop-up-menu-hidden");
  burgerIcon.classList.remove("menu-icon-hidden");
  burgerIcon.classList.add("menu-icon");
  closingIcon.classList.remove("close-icon");
  closingIcon.classList.add("close-icon-hidden");
}

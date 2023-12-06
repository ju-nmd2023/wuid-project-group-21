let headerNav = document.querySelector("header");

window.addEventListener("scroll", headerChanging);

function headerChanging() {
  headerNav.classList.toggle("sticky", window.scrollY > 0);
}

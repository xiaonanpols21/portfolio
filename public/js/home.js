console.log("Xiao Portfolio");

// Menu
const menuBtn = document.querySelector("#menu-bars");
const menu = document.querySelector(".mobile-nav");
const crossBtn = document.querySelector("#menu-cross");

// Sticky header
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.querySelector(".sticky-header").style.top = "0";
  } else {
    document.querySelector(".sticky-header").style.top = "-100px";
  }
}
// Bron: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_navbar_slide

// Menu
function showMenu() {
  menu.classList.add("show");
}
menuBtn.addEventListener("click", showMenu);

function closeMenu() {
  menu.classList.remove("show");
}
crossBtn.addEventListener("click", closeMenu);

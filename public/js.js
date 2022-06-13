console.log("Xiao Portfolio");

const menuBtn = document.querySelector("#menu-bars");
const menu = document.querySelector(".mobile-nav");
const crossBtn = document.querySelector("#menu-cross");

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.querySelector(".sticky-header").style.top = "0";
  } else {
    document.querySelector(".sticky-header").style.top = "-100px";
  }
}

// window.onscroll = function() {scrollFunction2()};
// function scrollFunction2() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.querySelector("#desk-nav").style.top = "0";
//   } else {
//     document.querySelector("#desk-nav").style.top = "-90px";
//   }
// }

function showMenu() {
  menu.classList.add("show");
}
menuBtn.addEventListener("click", showMenu);

function closeMenu() {
  menu.classList.remove("show");
}
crossBtn.addEventListener("click", closeMenu);
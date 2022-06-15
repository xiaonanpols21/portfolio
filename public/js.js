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
// Bron: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_navbar_slide

function showMenu() {
  menu.classList.add("show");
}
menuBtn.addEventListener("click", showMenu);

function closeMenu() {
  menu.classList.remove("show");
}
crossBtn.addEventListener("click", closeMenu);

/*
const productContainers = [...document.querySelectorAll('#productContainer')];
const nxtBtn = [...document.querySelectorAll('#up')];
const preBtn = [...document.querySelectorAll('#down')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
*/
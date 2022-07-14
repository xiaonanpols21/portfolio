// img
const head1 = document.querySelector("#head-img-1");
const head2 = document.querySelector("#head-img-2");
const head3 = document.querySelector("#head-img-3");

const button1 = document.querySelector("#img-btn-1");
const button2 = document.querySelector("#img-btn-2");
const button3 = document.querySelector("#img-btn-3");

// Menu
const menuBtn = document.querySelector("#menu-bars");
const menu = document.querySelector(".mobile-nav");
const crossBtn = document.querySelector("#menu-cross");

// Img
function foto1() {
    if (head1.style.display === "none") {
      head1.style.display = "block";
      head2.style.display = "none";
      head3.style.display = "none";
    } else {
      head1.style.display = "block";
    }
}
button1.addEventListener("click", foto1);
  
function foto2() {
    if (head2.style.display === "none") {
      head2.style.display = "block";
      head1.style.display = "none";
      head3.style.display = "none";
    } else {
      head2.style.display = "block";
    }
}
button2.addEventListener("click", foto2);
  
function foto3() {
    if (head3.style.display === "none") {
      head3.style.display = "block";
      head2.style.display = "none";
      head1.style.display = "none";
    } else {
      head3.style.display = "block";
    }
}
button3.addEventListener("click", foto3);

head2.style.display = "none";
head3.style.display = "none";

// Menu
function showMenu() {
  menu.classList.add("show");
}
menuBtn.addEventListener("click", showMenu);

function closeMenu() {
  menu.classList.remove("show");
}
crossBtn.addEventListener("click", closeMenu);
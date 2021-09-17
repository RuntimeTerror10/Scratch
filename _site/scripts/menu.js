const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links-container");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    nav.style.left = 0;
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    nav.style.left = 100 + "%";
    menuOpen = false;
  }
});
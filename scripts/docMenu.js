const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".sidebar-container");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    nav.style.right = 0;
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    nav.style.right = "-263px";
    menuOpen = false;
  }
});

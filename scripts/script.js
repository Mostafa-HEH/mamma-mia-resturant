// nav full cover menu
const fullMenu = document.querySelector("#fullMenu");
const menuIcon = document.querySelector("#menuIcon");
const closeFullMenu = document.querySelector("#closeFullMenu");

// close full menu
closeFullMenu.addEventListener("click", () => {
  menuIcon.classList.remove("hambrger-menu--active");
  fullMenu.classList.add("full-menu--disable");
});

// open full menu
menuIcon.addEventListener("click", () => {
  menuIcon.classList.add("hambrger-menu--active");
  fullMenu.classList.remove("full-menu--disable");
});

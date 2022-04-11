// loading
const loading = document.getElementById("loading");

window.addEventListener("load", () => {
  loading.style.display = "none";
});

// navbar scroll
const navBar = document.querySelector(".navigation");

window.addEventListener("scroll", () => {
  if (this.scrollY >= 700) {
    navBar.classList.add("navigation--on-scroll");
  } else {
    navBar.classList.remove("navigation--on-scroll");
  }
});

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

// hero section
const slides = document.querySelectorAll(".hero-section__full-view .item");
const reviews = document.querySelectorAll(".hero-section__review .item");
const leftArrow = document.querySelector(".hero-section #leftArrow");
const rightArrow = document.querySelector(".hero-section #rightArrow");

let counter = 1;

// TODO uncomment this
// setInterval(() => {
//   changeSlide(slides[counter]);

//   if (counter === 3) {
//     counter = 0;
//   } else {
//     counter++;
//   }
// }, 10000);

leftArrow.addEventListener("click", () => {
  if (counter < 0) {
    counter = 3;
  }
  changeSlide(slides[counter--], counter);
});

rightArrow.addEventListener("click", () => {
  if (counter > 3) {
    counter = 0;
  }
  changeSlide(slides[counter++], counter);
});

reviews.forEach((review) => {
  review.addEventListener("click", () => {
    changeSlide(slides[review.dataset.id - 1], counter);
  });
});

const changeSlide = (current, counter) => {
  slides.forEach((slide) => slide.classList.remove("item--active"));
  current.classList.add("item--active");
  reviews.forEach((review) => {
    review.classList.remove("item--active");
    if (review.dataset.id === current.dataset.id) {
      review.classList.add("item--active");
    }
  });
};

// testmonial section
const tabs = document.querySelectorAll(".tabs .tab");
const comments = document.querySelectorAll(".comments .comment");

let tabCounter = 0;

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    changeComment(tab);
  });
});

// TODO uncomment this
// setInterval(() => {
//   changeComment(tabs[tabCounter]);
//   if (tabCounter === 2) {
//     tabCounter = 0;
//   } else {
//     tabCounter++;
//   }
// }, 5000);

const changeComment = (tab) => {
  comments.forEach((comment) => comment.classList.remove("comment--active"));
  tabs.forEach((tab) => tab.classList.remove("tab--active"));
  tab.classList.add("tab--active");
  comments[tab.dataset.id - 1].classList.add("comment--active");
};

// order online
const orderOnlineLeft = document.querySelector(
  ".order-online .arrows #leftArrow"
);
const orderOnlineRight = document.querySelector(
  ".order-online .arrows #rightArrow"
);
const rowContainer = document.querySelector(".order-online .row");

orderOnlineLeft.addEventListener("click", () => {
  rowContainer.scrollLeft = rowContainer.scrollLeft - 100;
});

orderOnlineRight.addEventListener("click", () => {
  rowContainer.scrollLeft = rowContainer.scrollLeft + 100;
});

const viewTabs = document.querySelectorAll(".order-online .view__tabs li");
const rows = document.querySelectorAll(".order-online .row");

viewTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    viewTabs.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");
    rows.forEach((row) => {
      if (row.dataset.id === tab.dataset.id) {
        row.classList.add("row--active");
      } else {
        row.classList.remove("row--active");
      }
    });
  });
});

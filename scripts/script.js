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
const leftArrow = document.querySelector("#leftArrow");
const rightArrow = document.querySelector("#rightArrow");

let counter = 1;

setInterval(() => {
  changeSlide(slides[counter]);

  if (counter === 3) {
    counter = 0;
  } else {
    counter++;
  }
}, 10000);

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

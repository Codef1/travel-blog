const carouselContainer = document.querySelector(".carousel");
const carouselItems = document.querySelector(".carousel__items");
const carouselNextBtn = document.querySelector(".carousel__btn--next");
const carouselPrevBtn = document.querySelector(".carousel__btn--prev");
const burgerIcon = document.querySelector(".burger-menu");
const mainMenu = document.querySelector(".main-menu");

let nextXPosition = 0;

carouselNextBtn.addEventListener("click", function () {
  if (
    Math.abs(nextXPosition - carouselContainer.offsetWidth) >
    carouselItems.scrollWidth
  )
    return;

  nextXPosition = nextXPosition - carouselContainer.offsetWidth;
  carouselItems.style = `transform: translateX(${nextXPosition}px)`;
  console.log(nextXPosition);
});

carouselPrevBtn.addEventListener("click", function () {
  if (nextXPosition == 0) return;

  nextXPosition = nextXPosition + carouselContainer.offsetWidth;
  carouselItems.style = `transform: translateX(${nextXPosition}px)`;
  console.log(nextXPosition);
});

burgerIcon.addEventListener("click", function () {
  console.log(mainMenu.style.display);
  mainMenu.style.display = mainMenu.style.display !== "flex" ? "flex" : "none";
});

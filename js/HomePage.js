const carouselContainer = document.querySelector(".carousel");
const carouselItems = document.querySelector(".carousel__items");
const carouselNextBtn = document.querySelector(".carousel__btn--next");
const carouselPrevBtn = document.querySelector(".carousel__btn--prev");

let nextXPosition = 0;

carouselNextBtn.addEventListener("click", function () {
  if (
    Math.abs(nextXPosition - carouselContainer.offsetWidth) >
    carouselItems.scrollWidth
  )
    return;

  nextXPosition = nextXPosition - carouselContainer.offsetWidth;
  carouselItems.style = `transform: translateX(${nextXPosition}px)`;
});

carouselPrevBtn.addEventListener("click", function () {
  if (nextXPosition == 0) return;

  nextXPosition = nextXPosition + carouselContainer.offsetWidth;
  carouselItems.style = `transform: translateX(${nextXPosition}px)`;
});

function generateCarouselItems() {
  let request = apiEndpoint + "/wp/v2/posts?_embed&per_page=50";
  let carouselItemHTML = "";
  fetch(request)
    .then((response) => response.json())
    .then((data) => {
      for (let el of data) {
        carouselItemHTML = `
            <div class="carousel__item card">
              <div class="card__header">
                <img
                  class="card__image"
                  src=${el._embedded["wp:featuredmedia"][0].source_url}
                  alt="solid gray"
                />
              </div>
              <div class="card__body">
                <div class="card__title">${el.title.rendered}</div>
                <div class="card__desc">
                  ${el.excerpt.rendered}
                </div>
                <a href="#" class="btn card__btn">read more</a>
              </div>
            </div>
        `;
        carouselItems.insertAdjacentHTML("afterbegin", carouselItemHTML);
      }
    });
}

generateCarouselItems();

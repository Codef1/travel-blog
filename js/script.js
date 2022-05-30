const apiEndpoint = "http://normaddict.com/wp-json";
const blogName = "Travel Blog";

const burgerIcon = document.querySelector(".burger-menu");
const mainMenu = document.querySelector(".main-menu");

document.title = blogName;
burgerIcon.addEventListener("click", function () {
  mainMenu.style.display = mainMenu.style.display !== "flex" ? "flex" : "none";
});

let imageModal = (src) => {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  document.querySelector(".content").append(modal);

  const modalImg = document.createElement("img");
  modalImg.setAttribute("src", src);
  modal.append(modalImg);

  modal.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.remove();
    }
  });
};

const galleryImg = document.querySelectorAll(".gallery__img");

galleryImg.forEach((img) =>
  img.addEventListener("click", (e) => {
    imageModal(e.target.src);
  })
);

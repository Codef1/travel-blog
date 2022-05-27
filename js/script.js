const apiEndpoint = "http://localhost:8888/headless_wp/wp-json";

const burgerIcon = document.querySelector(".burger-menu");
const mainMenu = document.querySelector(".main-menu");

burgerIcon.addEventListener("click", function () {
  mainMenu.style.display = mainMenu.style.display !== "flex" ? "flex" : "none";
});

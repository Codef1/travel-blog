const blogPost = document.querySelector(".blog-posts");
const btnLoadPosts = document.querySelector(".btn-old-posts");
const loading = document.querySelector(".loading");

let currentPage = 1;
let totalPages = 0;
let postsPerPage = 10;

loading.style.display = "none";

function generatePosts() {
  btnLoadPosts.style.display = "none";
  if (currentPage == totalPages) {
    btnLoadPosts.textContent = "show new posts";
  } else {
    btnLoadPosts.textContent = "show old posts";
  }
  let request =
    apiEndpoint +
    `/wp/v2/posts?_embed&page=${currentPage}&per_page=${postsPerPage}`;
  let postCard = "";

  fetch(request)
    .then((response) => {
      totalPages = response.headers.get("X-WP-TotalPages");
      if (currentPage < totalPages) {
        currentPage++;
      } else {
        currentPage--;
      }
      return response.json();
    })
    .then((data) => {
      loading.style.display = "none";
      btnLoadPosts.style.display = "block";
      blogPost.innerHTML = "";
      for (let el of data) {
        postCard = `
            <div class="card">
            <div class="card__header">
              <img
                class="card__image"
                src=${el._embedded["wp:featuredmedia"][0].source_url}
                alt=${el._embedded["wp:featuredmedia"][0].alt_text}
              />
            </div>
            <div class="card__body">
              <div class="card__title">${el.title.rendered}</div>
              <div class="card__desc">
                ${el.excerpt.rendered}
              </div>
              <a href='/BlogSingle.html?id=${el.id}' class="btn card__btn">read more</a>
            </div>
          </div>
        `;
        blogPost.insertAdjacentHTML("afterbegin", postCard);
      }
    });
}

generatePosts();

btnLoadPosts.addEventListener("click", function () {
  blogPost.innerHTML = "";
  loading.style.display = "block";
  generatePosts();
});

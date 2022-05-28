const loading = document.querySelector(".loading");
const postContainer = document.querySelector(".blog-post");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const request = apiEndpoint + `/wp/v2/posts/${id}?_embed`;

fetch(request)
  .then((res) => res.json())
  .then((data) => {
    document.title = `${blogName} | ${data.title.rendered}`;
    let date = new Date(data.date);
    let options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    let postContent = `
        <div class="post__header">
          <img src=${data._embedded["wp:featuredmedia"][0].source_url} alt="${
      data._embedded["wp:featuredmedia"][0].alt_text
    }" class="post__img" />
          <h3 class="post__title">${data.title.rendered}</h3>
          <div class="post__subtitle">
            <div>By <span class="post__author">${
              data._embedded.author[0].name
            }</span></div>
            <div class="post__date">${date.toLocaleDateString(
              "en-US",
              options
            )}</div>
          </div>
        </div>
        <div class="post__body">
          <p class="post__text">
            ${data.content.rendered}
          </p>
        </div>
    `;
    loading.style.display = "none";
    postContainer.insertAdjacentHTML("afterbegin", postContent);

    const postImage = document.querySelector(".post__img");

    postImage.addEventListener("click", (e) => {
      imageModal(e.target.src);
    });
  });

let imageModal = (src) => {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  document.querySelector(".main").append(modal);

  const modalImg = document.createElement("img");
  modalImg.setAttribute("src", src);
  modal.append(modalImg);

  modal.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.remove();
    }
  });
};

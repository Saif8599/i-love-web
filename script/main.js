document.addEventListener("DOMContentLoaded", () => {
  let bookCover = document.querySelector(".book-cover");

  bookCover.addEventListener("click", () => {
    bookCover.classList.toggle("visible");
  });
});

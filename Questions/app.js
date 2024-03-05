const btnQuestion = document.querySelectorAll(".question-btn");
const article = document.querySelectorAll(".question");

btnQuestion[0].addEventListener("click", () => {
  article[0].classList.toggle("show-text");
});

btnQuestion[1].addEventListener("click", () => {
  article[1].classList.toggle("show-text");
});

btnQuestion[2].addEventListener("click", () => {
  article[2].classList.toggle("show-text");
});

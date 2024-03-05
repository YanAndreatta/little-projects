// const btnQuestion = document.querySelectorAll(".question-btn");
const questions = document.querySelectorAll(".question");


// btnQuestion[0].addEventListener("click", () => {
//   questions[0].classList.toggle("show-text");
// });

// btnQuestion[1].addEventListener("click", () => {
//   questions[1].classList.toggle("show-text");
// });

// btnQuestion[2].addEventListener("click", () => {
//   questions[2].classList.toggle("show-text");
// });

questions.forEach(question => {
  console.log(question);
  const btn = question.querySelector(".question-btn");
  console.log(btn);
  btn.addEventListener("click", () => {
    questions.forEach(item => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});


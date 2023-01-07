const shadowImg = document.querySelector(".shadow-img");
const mainImg = document.querySelector(".main-img");
const questions = document.querySelectorAll(".question-wrapper");

// Changing the img src based on screen size
let screenWidth = window.matchMedia("(min-width: 1440px)");
adjustImgSrc(screenWidth);
screenWidth.addEventListener("change", adjustImgSrc);

function adjustImgSrc(screenWidth) {
  if (screenWidth.matches) {
    shadowImg.src = "./images/bg-pattern-desktop.svg";
    mainImg.src = "./images/illustration-woman-online-desktop.svg";
  } else {
    shadowImg.src = "./images/bg-pattern-mobile.svg";
    mainImg.src = "./images/illustration-woman-online-mobile.svg";
  }
}

// Unfolding and folding the answers
questions.forEach((question) => {
  question.addEventListener("click", () => {
    question.children.item(0).children.item(0).classList.toggle("active");
    question.children
      .item(0)
      .children.item(1)
      .classList.toggle("active--arrow");
    question.children.item(1).classList.toggle("active--answer");
  });
});

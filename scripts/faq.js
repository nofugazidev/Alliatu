const toggleArrows = document.querySelectorAll(".faq-box .icon");
const answerBoxes = document.querySelectorAll(".answer");
const faBoxes = document.querySelectorAll("#faqBox");

toggleArrows.forEach((arrow, index) => {
  arrow.addEventListener("click", () => {
    const matchingAnswer = answerBoxes[index];
    const faBox = faBoxes[index];

    matchingAnswer.classList.toggle("is-open");

    if (matchingAnswer.classList.contains("is-open")) {
      arrow.textContent = "-";
      faBox.style.backgroundColor = "#ffdd81";
    } else {
      arrow.textContent = "+";
      faBox.style.backgroundColor = "#f7f7f7";
    }
  });
});

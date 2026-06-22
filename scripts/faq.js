const toggleArrows = document.querySelectorAll(".faq-box i");
const answerBoxes = document.querySelectorAll(".answer")


toggleArrows.forEach((arrow, index) => {
    arrow.addEventListener('click', ()=> {
        const matchingAnswer = answerBoxes[index];

        matchingAnswer.classList.toggle('is-open')
        
        if(matchingAnswer.classList.contains('is-open')){
            arrow.classList.remove("fa-arrow-down")
            arrow.classList.add("fa-arrow-up")
        } else {
            arrow.classList.remove("fa-arrow-up")
            arrow.classList.add("fa-arrow-down")
        }
    })
})
function flipCard() {
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.toggle('flipped');
}

const flipcard = document.querySelector(`#flipcard`);
const form = document.querySelector(`form`);

form.addEventListener("submit", function(e) {
    e.preventDefault();
})

flipcard.addEventListener("click", function(e) {
    const answer = document.querySelector(`#answer`);
    const answerValue = answer.value;
    if(answerValue != "") {
        flipCard();
    }
})


// ================================================== flip card ==================================================
function flipCard() {
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.toggle('flipped');
}

const flipcard = document.querySelector(`#flipcard`);
flipcard.addEventListener("click", function(e) {
    flipCard();
})
// ================================================== prev next ==================================================
function countCLick(a) {
    i += a;
}

function disabled(idx) {
    prev.disabled = idx === 0;
    next.disabled = idx === listFront.length - 1;
}

// Chuyển thẻ
const next = document.querySelector(`.arrow__right`);
const prev = document.querySelector(`.arrow__left`);
const front = document.querySelector(`.front`);
const back = document.querySelector(`.back`);
const cnt = document.querySelector(`.count`);
let listFront = ["Cat","Dog","Bird","Elephant",];
let listBack = ["Mèo","Chó","Chim","Voi",];

let i = 0;
cnt.textContent = `${i+1}/${listFront.length}`;

next.addEventListener("click", function(e) {
    // xử lí
    countCLick(1);
    disabled(i);
    // thay đổi nội dung
    cnt.textContent = `${i+1}/${listFront.length}`
    front.textContent = listFront[i];
    back.textContent = listBack[i];

    
})

prev.addEventListener("click", function(e) {
    // xử lí
    countCLick(-1);
    disabled(i);
    // thay đổi nội dung
    cnt.textContent = `${i+1}/${listFront.length}`
    front.textContent = listFront[i];
    back.textContent = listBack[i];    
})
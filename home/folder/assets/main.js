// new
const newBox = document.querySelector(`.newflashcard`);
const newBoxBtn = document.querySelector(`.new__btn`);
const front = document.querySelector(`#front`);
const back = document.querySelector(`#back`);
const cardType = document.querySelector(`#cardtype`);
const cancel = document.querySelector(`#cancel`);
const create = document.querySelector(`#create`);

// edit
const editBox = document.querySelector(`.editflashcard`);
const editFront = document.querySelector(`#editfront`);
const editBack = document.querySelector(`#editback`);
const editCardType = document.querySelector(`#editcardtype`);
const editCancel = document.querySelector(`#editcancel`);
const editCreate = document.querySelector(`#editcreate`);

// delete
const del = document.querySelector(`.del`);
const delBtn = document.querySelector(`.del__btn`);
const delCancel = document.querySelector(`#delcancel`);
const delCreate = document.querySelector(`#delcreate`);

// delete all
const deleteAll = document.querySelector(`.delete_all`);
const deleteAllBtn = document.querySelector(`.delete__btn`);
const deleteCancel = document.querySelector(`#deletecancel`);
const deleteCreate = document.querySelector(`#deletecreate`);

// const flashCard = document.querySelectorAll(`tr`);
// const trash = document.querySelectorAll(`.fa-trash`);
// const edit = document.querySelectorAll(`.fa-pen-to-square`);

// table
let flashCard = Array.from(document.querySelectorAll('tr'));
let trash = Array.from(document.querySelectorAll('.fa-trash'));
let edit = Array.from(document.querySelectorAll('.fa-pen-to-square'));



// ===============================================NEW FLASHCARD===============================================
newBoxBtn.addEventListener("click", function(e) {
    newBox.hidden = false;
    front.focus();
})

cancel.addEventListener("click", function(e) {
    front.value = "";
    cardType.value = "";
    back.value = "";
    newBox.hidden = true;
})

create.addEventListener("click", function(e) {
    if(front.value === "") {
        alert("Vui lòng điền vào mặt trước của thẻ");
    }
    else if(back.value === "") {
        alert("Vui lòng điền vào mặt sau của thẻ")
    }
    else if(cardType.value === "") {
        alert("Vui lòng điền vào loại thẻ")
    }
    else {
        createTr();
        updateTr();
        deleteTr();
        editTr();
    }    
})
// ===============================================TẠO FLASHCARD===============================================
function createTr() {
    const newRow = document.createElement('tr');

    // Tạo các phần tử td
    const frontDesc = document.createElement('td');
    frontDesc.id = 'front__desc';
    frontDesc.textContent = front.value;

    const backDesc = document.createElement('td');
    backDesc.id = 'back__desc';
    backDesc.textContent = back.value;

    const cardTypeDesc = document.createElement('td');
    cardTypeDesc.id = 'cardtype__desc';
    cardTypeDesc.textContent = cardType.value;

    const tableTool = document.createElement('td');
    tableTool.className = 'table__tool';

    const editIcon = document.createElement('i');
    editIcon.className = 'fa-solid fa-pen-to-square';

    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa-solid fa-trash';

    // Thêm các biểu tượng vào tableTool
    tableTool.append(editIcon, deleteIcon);

    // Thêm tất cả các phần tử td vào newRow
    newRow.append(frontDesc, backDesc, cardTypeDesc, tableTool);

    // Append tr vào table
    document.querySelector('tbody').appendChild(newRow);
    
    front.value = "";
    cardType.value = "";
    back.value = "";
    newBox.hidden = true;
}
// ===============================================CẬP NHẬT FLASHCARD===============================================
function updateTr() {
    flashCard = Array.from(document.querySelectorAll('tr'));
    trash = Array.from(document.querySelectorAll('.fa-trash'));
    edit = Array.from(document.querySelectorAll('.fa-pen-to-square'));
}
// ===============================================CHỈNH SỬA FLASHCARD===============================================
function editTr() {
    edit.forEach(function(e, idx) {
        const td = flashCard[idx + 1].querySelectorAll(`td`);

        e.addEventListener("click", function() {
            editBox.hidden = false;            
            editFront.value = td[0].textContent;
            editBack.value = td[1].textContent;
            editCardType.value = td[2].textContent;
            editFront.focus();      
            editFront.select();
            editCancel.addEventListener("click", function() {
                
                editBox.hidden = true;
            })
            editCreate.addEventListener("click", function(ele) {
                // editContentTr();
                if(editFront.value === "") {
                    alert("Vui lòng điền vào mặt trước của thẻ");
                }
                else if(editBack.value === "") {
                    alert("Vui lòng điền vào mặt sau của thẻ")
                }
                else if(editCardType.value === "") {
                    alert("Vui lòng điền vào loại thẻ")
                }
                else {
                    // console.log(flashCard[idx+1]);
                    
                    // console.log(td);
                    td[0].innerText = editFront.value;
                    td[1].innerText = editBack.value;
                    td[2].innerText = editCardType.value;
                    editFront.value = "";
                    editCardType.value = "";
                    editBack.value = "";
                    editBox.hidden = true;
                }
            })
        })
    })
}
// ===============================================XÓA FLASHCARD===============================================
function deleteTr() {
    trash.forEach(function(e, idx) {
        e.addEventListener("click", function() {
            del.hidden = false;
            delCancel.addEventListener("click", function(e) {
                del.hidden = true;
            })
            delCreate.addEventListener("click", function(e) {
                flashCard[idx].remove();
                del.hidden = true;
            })
        })
    })
}

deleteTr();
editTr();

// ===============================================XÓA TOÀN BỘ FLASHCARD===============================================
deleteAllBtn.addEventListener("click", function(e) {
    deleteAll.hidden = false;
    deleteCancel.addEventListener("click", function(e) {
        deleteAll.hidden = true;
    })
    deleteCreate.addEventListener("click", function(e) {
        deleteAll.hidden = true;
        const tbody = document.querySelector(`tbody`);
        const allTr = tbody.querySelectorAll(`tr`);
        allTr.forEach(tr => tr.remove());
    })    
})
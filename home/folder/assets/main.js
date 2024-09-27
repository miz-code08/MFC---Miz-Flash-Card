const newBox = document.querySelector(`.newflashcard`);
const newBoxBtn = document.querySelector(`.new__btn`);

const front = document.querySelector(`#front`);
const back = document.querySelector(`#back`);
const cardType = document.querySelector(`#cardtype`);

const cancel = document.querySelector(`#cancel`);
const create = document.querySelector(`#create`);

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

    const newRow = document.createElement('tr');
    // Tạo và thêm các phần tử td vào tr
    const frontDesc = document.createElement('td');
    frontDesc.id = 'front__desc';
    frontDesc.textContent = front.value;
    newRow.appendChild(frontDesc);

    const cardTypeDesc = document.createElement('td');
    cardTypeDesc.id = 'cardtype__desc';
    cardTypeDesc.textContent = cardType.value;
    newRow.appendChild(cardTypeDesc);

    const backDesc = document.createElement('td');
    backDesc.id = 'back__desc';
    backDesc.textContent = back.value;
    newRow.appendChild(backDesc);

    const tableTool = document.createElement('td');
    tableTool.className = 'table__tool';

    const editIcon = document.createElement('i');
    editIcon.className = 'fa-solid fa-pen-to-square';
    tableTool.appendChild(editIcon);

    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa-solid fa-trash';
    tableTool.appendChild(deleteIcon);

    newRow.appendChild(tableTool);

    // Append tr vào table
    const tbody = document.querySelector('tbody');
    tbody.appendChild(newRow);

    front.value = "";
    cardType.value = "";
    back.value = "";
    newBox.hidden = true;
})
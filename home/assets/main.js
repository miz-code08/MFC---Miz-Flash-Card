const newBox = document.querySelector(`.newbox`);
const newBoxBtn = document.querySelector(`.new__btn`);
const input = document.querySelector(`#newbox`);
const cancel = document.querySelector(`#cancel`);
const create = document.querySelector(`#create`);

newBoxBtn.addEventListener("click", function(e) {
    newBox.hidden = false;
    input.focus();
    input.select();
})

cancel.addEventListener("click", function(e) {
    input.value = "New box no title";
    newBox.hidden = true;
})

create.addEventListener("click", function(e) {
    // Tạo phần tử div với class folder__item
    const folderItem = document.createElement('div');
    folderItem.className = 'folder__item';

    // Tạo phần tử a với class folder__a
    const folderLink = document.createElement('a');
    folderLink.href = './folder/index.html';
    folderLink.className = 'folder__a';

    // Tạo phần tử div với class folder__link
    const folderLinkDiv = document.createElement('div');
    folderLinkDiv.className = 'folder__link';

    // Tạo phần tử i với class fa-regular fa-folder-open
    const folderIcon = document.createElement('i');
    folderIcon.className = 'fa-regular fa-folder-open';

    // Tạo phần tử p với class folder_item__desc
    const folderDesc = document.createElement('p');
    folderDesc.className = 'folder_item__desc';
    folderDesc.textContent = input.value;

    // Gắn các phần tử vào nhau
    folderLinkDiv.appendChild(folderIcon);
    folderLinkDiv.appendChild(folderDesc);
    folderLink.appendChild(folderLinkDiv);
    folderItem.appendChild(folderLink);

    // Tạo phần tử a với class folder__more
    const folderMore = document.createElement('a');
    folderMore.href = '';
    folderMore.className = 'folder__more';

    // Tạo phần tử i với class fa-solid fa-ellipsis-vertical
    const moreIcon = document.createElement('i');
    moreIcon.className = 'fa-solid fa-ellipsis-vertical';

    // Gắn phần tử i vào a
    folderMore.appendChild(moreIcon);

    // Gắn phần tử a vào div folder__item
    folderItem.appendChild(folderMore);

    // Gắn div folder__item vào container
    document.querySelector(`.folder`).appendChild(folderItem);

    input.value = "New box no title";
    newBox.hidden = true;
})
let bookLibrary = [];



/*Handles popup add button */ 
let popup = document.getElementById("popup");
function showPopup() {
    popup.classList.add("open-popup");
};

function hidePopup() {
    popup.classList.remove("open-popup");
};

/* End of add button code */

/* Start of create book btn function*/
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

function addBooktoLibrary() {
    let title = document.getElementById('titlein').value;
    let author = document.getElementById('authorin').value;
    let pages = document.getElementById('pagesin').value;
    //let read = document.getElementById('popup');
    let read = document.querySelector("input[type='radio'][name=read]:checked").value;
    let newBook = new Book(title, author, pages, read);
    bookLibrary.push(newBook);
    //console.log(newBook);
    renderBook();
};
function renderBook() {
let libraryEle = document.querySelector("#library");
libraryEle.innerHTML = "";
for (let i=0; i<bookLibrary.length; i++) {
    //console.log(bookLibrary[i]);
    let book = bookLibrary[i];
    let bookEle = document.createElement("div");
    bookEle.innerHTML = `
    <div class="card">
    <div class="card-header">
    <h5 class="title">${book.title}</h5>
    <h5 class="author">by: ${book.author}</h5>
    </div>
    <div class="card-footer">
    <p class="page">pages: ${book.pages}</p>
    <div class="cardbtns">
    <button class="readToggle" onclick="toggle(this)">${book.read}</button>
    <button class="removeBook" onclick="removeBook(${i})" >Remove</button>
    </div>
    </div>
    </div>
    `;
    libraryEle.appendChild(bookEle);
}
}

function popupBox() {
    event.preventDefault();
    addBooktoLibrary();
    //alert("test");
}

function removeBook(index) {
    bookLibrary.splice(index, 1)
    renderBook();
}

toggle = function(e)  {
    
    
    if (e.innerText == "Read") {
        e.innerText = "Unread"
    }
    else {e.innerText = "Read"};
    
}
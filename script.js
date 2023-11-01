const addBookButton = document.getElementById("addBook-btn");
const submitButton = document.getElementById("submit");
const gridTable = document.getElementById("grid-table");

//enter book details when a button is clicked 
addBookButton.addEventListener("click", function() {
    document.getElementById("add-new-book").style.display = "block"
});

submitButton.addEventListener("click", function() {
    document.getElementById("add-new-book").style.display = "none";
    displayBook();
})

function displayBook() {
    let bookContainer = document.createElement('div');
    gridTable.appendChild(bookContainer).setAttribute('id', 'books-data');

    //create title of a book
    let titleContainer = document.createElement('div');
    bookContainer.appendChild(titleContainer).setAttribute('class', 'title-container');
    titleContainer.textContent = "Title: " + document.getElementById('titleBtn').value;
    
    //create name of a book
    let authorContainer = document.createElement('div');
    bookContainer.appendChild(authorContainer).setAttribute('class', 'author-container');
    authorContainer.textContent = "Author: " + document.getElementById('authorBtn').value;

    //create pages of a book
    let pagesContainer = document.createElement('div');
    bookContainer.appendChild(pagesContainer).setAttribute('class', 'pages-container');
    pagesContainer.textContent = document.getElementById('pagesBtn').value + " pages";

    //is book read or not yet
    const isRead = document.createElement('button');
    bookContainer.appendChild(isRead);

    if (document.getElementById('customCheck1').checked) {
        isRead.setAttribute('class', 'btn btn-success read-button');
        isRead.textContent = "Read";
    } else {
        isRead.setAttribute('class', 'btn btn-danger read-button');
        isRead.textContent = "Not Read";
    }
    //change the mode from "read" to "not read" and back
    isRead.addEventListener('click', function() {
        if (isRead.className === "btn btn-success read-button") {
            isRead.className = "btn btn-danger read-button";
            isRead.textContent = "Not Read";
        } else if (isRead.className === "btn btn-danger read-button") {
            isRead.className = "btn btn-success read-button";
            isRead.textContent = "Read";
        }
    })

    //add "Remove" button
    const removeButton = document.createElement('button');
    bookContainer.appendChild(removeButton);
    removeButton.setAttribute('class', 'btn btn-secondary remove-button');
    removeButton.textContent = "Remove";

    removeButton.addEventListener('click', function() {
        bookContainer.style.display = 'none';
    })
}

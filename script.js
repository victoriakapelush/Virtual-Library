const addBook = document.getElementById('addBook-btn');

const checkbox = document.getElementById('customCheck1');

const submit = document.getElementById('submit');

const titleBtn = document.getElementById('titleBtn');
const authorBtn = document.getElementById('authorBtn');
const pagesBtn = document.getElementById('pagesBtn');

const library = [];

addBook.addEventListener('click', function() {
    document.getElementById('add-new-book').style.display = "block";
})


submit.addEventListener('click', function() {
    document.getElementById('add-new-book').style.display='none';
    createNewBook();
})

    function createNewBook() {
    const index = library.length;
    library[index] = {
        title: titleBtn.value,
        author: authorBtn.value,
        pages: pagesBtn.value,
        isRead: checkbox.checked
    };

    const gridTable = document.getElementById('grid-table');
    const booksData = document.createElement('div');
    gridTable.append(booksData);
    booksData.setAttribute('class', 'books-data');
    
    const books_data1 = document.getElementsByClassName('books-data');
    const books_data = books_data1[books_data1.length-1];
    const titleDiv = document.createElement('div');
    books_data.append(titleDiv);
    titleDiv.setAttribute('id', 'added-title');
    titleDiv.textContent = library[index].title;

    const authorDiv = document.createElement('div');
    books_data.append(authorDiv);
    authorDiv.setAttribute('id', 'added-author');
    authorDiv.textContent = library[index].author;

    const pagesDiv = document.createElement('div');
    books_data.append(pagesDiv);
    pagesDiv.setAttribute('id', 'added-pages');
    pagesDiv.textContent = library[index].pages + " pages";

    const read = document.createElement('button');
    read.setAttribute('class', 'btn btn-success read-button');
    read.textContent = "Read";
    books_data.append(read);

    if (!library[index].isRead) {
        read.remove();
        const notread = document.createElement('button');
        notread.setAttribute('class', 'btn btn-danger read-button');
        notread.textContent = "Not Read";
        books_data.append(notread);
    }
    
    const remove = document.createElement('button');
    remove.setAttribute('class', 'btn btn-secondary remove-button');
    remove.textContent = "Remove";
    books_data.append(remove);

    const removeBook = document.getElementsByClassName('remove-button')[index];
    removeBook.addEventListener('click', function() {
        document.querySelectorAll('.books-data')[index].remove();
        library.splice(index, 1);
    })}



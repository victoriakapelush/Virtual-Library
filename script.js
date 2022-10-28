const addBook = document.getElementById('addBook-btn');
const titleBtn = document.getElementById('inputGroup-sizing-default');
const authorBtn = document.getElementById('inputGroup-sizing-default-author');
const pagesBtn = document.getElementById('inputGroup-sizing-default-pages');
const checkbox = document.getElementById('customCheck1');

addBook.addEventListener('click', function() {
    const hidden = document.getElementById('add-new-book').removeAttribute('hidden');
})

let addNewBook = {
    author: '',
    title: '',
    pages: '',
    isRead: false
};


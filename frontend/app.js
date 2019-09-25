import './styles/app.css';
import UI from './UI';

document.addEventListener('DOMContentLoader', () => {
    const ui = new UI();
    ui.renderBooks();
});

document.getElementById('book-form')
    .addEventListener('submit', e => {
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;
        const image = document.getElementById('image').files;

        const formData = new FormData();
        formData.append('image', image[0]);
        formData.append('title', title);
        formData.append('author', author);
        formData.append('isbn', isbn);
   
        //console.log(title, author, isbn, image)
        const ui = new UI();
        ui.addANewBook(formData);

        e.preventDefault();
    });
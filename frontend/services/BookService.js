import { exists } from "fs";
import { model } from "mongoose";

class BookService {
    constructor(){
        this.URI = '/api/books';
    }

    async getBooks() {
        const response = await fetch(this.URI);
        const books = await response.json();
        return books;
    }

    async postBook(book) {
        const res = await fetch(this.URI, {
            method: 'POST',
            body: book
        });
        const data = await res.json();
        console.log(data);
    }

    async deleteBook(bookId) {
        const res = await fetch(`${this.URI}/${"/"+bookId}`, {
            headers:{
                'Content-type': 'application/json'
            },
            method: 'DELETE'
        });
        const data = await res.json();
        console.log(data)
        console.log('ESTO APARECE AL QUERER ELIMINAR' +bookId )
    }
}

export default BookService;
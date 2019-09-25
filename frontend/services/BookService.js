import { exists } from "fs";
import { model } from "mongoose";

class BookService {
    constructor(){
        this.URI = 'http://localhost:4000/api/books';
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

    async deleteBooks(bookId) {
        await fetch(`$(this.URI)/$(bookID)`, {
            headers:{
                'Content-types': 'application/json'
            },
            method: 'DELETE'
        });
        const data = await res.json();
        console.log(data)
    }
}

export default BookService;
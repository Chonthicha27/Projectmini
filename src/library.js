"use strict";
// import { Book, Genre } from './book';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor() {
        this.books = [];
        this.nextId = 1;
    }
    addBook(book) {
        const newBook = Object.assign(Object.assign({}, book), { id: this.nextId++ });
        this.books.push(newBook);
        return newBook;
    }
    listBooks() {
        this.books.forEach((book) => console.log(book));
    }
    searchBooks(key, value) {
        return this.books.filter((book) => book[key] === value);
    }
    updateBook(id, updates) {
        const bookIndex = this.books.findIndex((book) => book.id === id);
        if (bookIndex !== -1) {
            this.books[bookIndex] = Object.assign(Object.assign({}, this.books[bookIndex]), updates);
        }
    }
    deleteBook(id) {
        this.books = this.books.filter((book) => book.id !== id);
    }
}
exports.Library = Library;

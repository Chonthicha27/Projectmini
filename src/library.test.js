"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const library_1 = require("./library");
const book_1 = require("./book");
describe('Library', () => {
    let library;
    beforeEach(() => {
        library = new library_1.Library();
    });
    it('should add a book to the library', () => {
        const book = {
            id: 1,
            title: 'The Hobbit',
            author: 'J.R.R. Tolkien',
            genre: book_1.Genre.Fiction,
            publishedYear: 1937,
            availability: true
        };
        library.addBook(book);
        expect(library.searchBooks('title', 'The Hobbit').length).toBe(1);
    });
    it('should delete a book from the library', () => {
        const book = {
            id: 1,
            title: 'The Hobbit',
            author: 'J.R.R. Tolkien',
            genre: book_1.Genre.Fiction,
            publishedYear: 1937,
            availability: true
        };
        library.addBook(book);
        library.deleteBook(1);
        expect(library.searchBooks('title', 'The Hobbit').length).toBe(0);
    });
    it("", () => {
        library.updateBook(1, { availability: false }); //updateสมุด
        library.listBooks(); //แสดงสมุดทั้งหมดในarray
    });
});

// src/library.ts
import { Book, Genre } from './book';

export class Library {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }
  listBooks(): void {
    this.books.forEach((book) => {
      console.log(`${book.id}: ${book.title} by ${book.author}`);
    });
  }
  searchBooks<K extends keyof Book>(property: K, value: Book[K]): Book[] {
    return this.books.filter((book) => book[property] === value);
  }
  updateBook(id: number, updatedFields: Partial<Book>): void {
    const book = this.books.find((book) => book.id === id);
    if (book) {
      Object.assign(book, updatedFields);
    }
  }
  deleteBook(id: number): void {
    const index = this.books.findIndex((book) => book.id === id);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }
  searchBooksByTitleOrYear(value: string | number): Book[] {
    return this.books.filter((book) =>
      typeof value === 'string'
        ? book.title === value
        : book.publishedYear === value
    );
  }
}


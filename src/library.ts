// import { Book, Genre } from './book';

// export class Library {
//   private books: Book[] = [];

//   addBook(book: Book): void {//addBook ไปเก็บในarray
//     this.books.push(book);
//   }
//   listBooks(): void { //แสดงรายชื่อสมุดในarray
//     this.books.forEach((book) => {
//       console.log(`${book.id}: ${book.title} by ${book.author}`);
//     });
//   }
//   searchBooks<K extends keyof Book>(property: K, value: Book[K]): Book[] { //หาสมุดในarrayโดยใช้ property แล้วแทนที่ข้อมูลด้วยข้อมูลที่ส่งมา
//     return this.books.filter((book) => book[property] === value);
//   }
//   updateBook(id: number, updatedFields: Partial<Book>): void { // update สมุดโดยใช้ID
//     const book = this.books.find((book) => book.id === id);
//     if (book) {
//       Object.assign(book, updatedFields);
//     }
//   }
//   deleteBook(id: number): void { // ลบสมุดโดยใช้ID
//     const index = this.books.findIndex((book) => book.id === id);
//     if (index !== -1) {
//       this.books.splice(index, 1);
//     }
//   }
//   searchBooksByTitleOrYear(value: string | number): Book[] { //ค้นหาสมุดด้วยข้อมูลที่ส่งเข้ามา ถ้าข้อมูลที่ส่งเข้ามาเป็นstring จะแทนที่ในtitle ถ้าข้อมูลที่ส่งเข้ามาไม่ใช้ string จะแทนที่เป็นpublishedYear
//     return this.books.filter((book) =>
//       typeof value === 'string'
//         ? book.title === value
//         : book.publishedYear === value
//     );
//   }
// }
// //เปิด terminalใน vscode
// //npm install

// //npx ts-node src/library.ts
// //npx ts-node src/book.ts
// //npx ts-node src/library.test.ts 
// //npx ts-jest config:init
// //npm install --save-dev jest ts-jest @types/jest
// //npx jest
import { Book , Genre } from './book';

export class Library {
  private books: Book[] = [];
  private nextId: number = 1;

  addBook(book: Omit<Book, 'id'>): Book {
    const newBook = { ...book, id: this.nextId++ };
    this.books.push(newBook);
    return newBook;
  }

  listBooks(): void {
    this.books.forEach((book) => console.log(book));
  }

  searchBooks<K extends keyof Book>(key: K, value: Book[K]): Book[] {
    return this.books.filter((book) => book[key] === value);
  }

  updateBook(id: number, updates: Partial<Omit<Book, 'id'>>): void {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex !== -1) {
      this.books[bookIndex] = { ...this.books[bookIndex], ...updates };
    }
  }

  deleteBook(id: number): void {
    this.books = this.books.filter((book) => book.id !== id);
  }
}


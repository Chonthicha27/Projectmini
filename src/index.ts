import * as readlineSync from 'readline-sync';
import { Library } from './library';
import { Genre } from './book';
import * as fs from 'fs';

const library = new Library();

function showMenu() {
  console.log(`
    1. Add a new book
    2. List all books
    3. Search books
    4. Update a book
    5. Delete a book
    6. save_to_Json_file
    7. Exit
  `);
}

function addBook() {
  const title = readlineSync.question('Enter the title: ');
  const author = readlineSync.question('Enter the author: ');
  const genre = readlineSync.keyInSelect(Object.values(Genre), 'Select the genre: ') as number;
  const publishedYear = Number(readlineSync.question('Enter the published year: '));
  const availability = readlineSync.keyInYN('Is the book available? ');

  const newBook = library.addBook({
    title,
    author,
    genre: Object.values(Genre)[genre],
    publishedYear,
    availability
  });

  console.log(`Added book with ID: ${newBook.id}`);
}

function searchBooks() {
  const field = readlineSync.question('Search by (title, author, genre): ') as keyof typeof Genre;
  const value = readlineSync.question(`Enter ${field}: `);
  const results = library.searchBooks(field as any, value as any);
  console.log(results);
}

function updateBook() {
  const id = Number(readlineSync.question('Enter book ID to update: '));
  const title = readlineSync.question('Enter new title (leave blank to skip): ');
  const author = readlineSync.question('Enter new author (leave blank to skip): ');
  const genre = readlineSync.keyInSelect(Object.values(Genre), 'Select new genre (leave blank to skip): ', { cancel: true }) as number;
  const publishedYear = Number(readlineSync.question('Enter new published year (leave blank to skip): '));
  const availability = readlineSync.keyInYN('Is the book available? (Y/N)');

  library.updateBook(id, {
    title: title || undefined,
    author: author || undefined,
    genre: genre >= 0 ? Object.values(Genre)[genre] : undefined,
    publishedYear: publishedYear || undefined,
    availability: availability || undefined
  });
}

function deleteBook() {
  const id = Number(readlineSync.question('Enter the book ID to delete: '));
  library.deleteBook(id);
  console.log(`Book with ID ${id} deleted.`);
}

function main() {
  let exit = false;
  while (!exit) {
    showMenu();
    const choice = readlineSync.question('Select an option: ');

    switch (choice) {
      case '1':
        addBook();
        break;
      case '2':
        library.listBooks();
        break;
      case '3':
        searchBooks();
        break;
      case '4':
        updateBook();
        break;
      case '5':
        deleteBook();
        break;
        case '6':
        save_to_Json_file();
            break
        case '7':
        exit = true;
            break;
      default:
        console.log('Invalid choice, please try again.');
    }
  }
}
function save_to_Json_file() {
    const json = JSON.stringify(library, null, 2);
    fs.writeFileSync('library.json', json);
    console.log('Library saved to library.json');
  }

main();
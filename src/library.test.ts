import { Library } from './library';
import { Genre } from './book';

describe('Library', () => {
  let library: Library;

  beforeEach(() => {
    library = new Library();
  });

  it('should add a book to the library', () => {
    const book = {
      id: 1,
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      genre: Genre.Fiction,
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
      genre: Genre.Fiction,
      publishedYear: 1937,
      availability: true
    };

    library.addBook(book);
    library.deleteBook(1);
    expect(library.searchBooks('title', 'The Hobbit').length).toBe(0);
  });

  // เพิ่มชุดทดสอบอื่นๆ เช่น การค้นหา การอัปเดตหนังสือ
  // อัปเดตสถานะความพร้อมใช้งานของหนังสือ
  it("",()=>{library.updateBook(1, { availability: false });
  library.listBooks();

  })
    // ตรวจสอบว่าหนังสือมีสถานะพร้อมใช้งานหรือไม่
});

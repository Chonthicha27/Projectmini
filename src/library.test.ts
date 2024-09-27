import { Library } from './library';
import { Genre } from './book';

describe('Library', () => {
  let library: Library;

  beforeEach(() => {
    library = new Library();
  });

  it('should add a book to the library', () => { //เรียกใช้ ฟังชั่นสมุดในarray
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

  it('should delete a book from the library', () => { //ลบข้อมูล,ที่ส่งเข้าไปในarray
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
  it("",()=>{
    library.updateBook(1, { availability: false });//updateสมุด
    library.listBooks();//แสดงสมุดทั้งหมดในarray

  })
    
});

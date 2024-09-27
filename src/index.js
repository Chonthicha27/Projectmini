"use strict";

let library = {
    books: [],
    addBook(book) {
        this.books.push({...book, id: this.books.length + 1}); // เพิ่ม ID
        return this.books[this.books.length - 1];
    },
    listBooks() {
        return this.books;
    },
    searchBooks(field, value) {
        return this.books.filter(book => book[field].toLowerCase().includes(value.toLowerCase()));
    },
    updateBook(id, updates) {
        const book = this.books.find(b => b.id === id);
        Object.assign(book, updates);
    },
    deleteBook(id) {
        this.books = this.books.filter(book => book.id !== id);
    }
};

function showAddBookForm() {
    document.getElementById('formContainer').style.display = 'block';
}

function hideAddBookForm() {
    document.getElementById('formContainer').style.display = 'none';
}

function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;
    const publishedYear = Number(document.getElementById('publishedYear').value);
    const availability = document.getElementById('availability').checked;

    const newBook = library.addBook({
        title,
        author,
        genre,
        publishedYear,
        availability
    });

    document.getElementById('output').innerHTML += `<p>เพิ่มหนังสือใหม่: ${newBook.title} โดย ${newBook.author}</p>`;
    hideAddBookForm(); // ซ่อนฟอร์มหลังจากบันทึก
}

function listBooks() {
    const books = library.listBooks();
    let output = '<p>รายการหนังสือทั้งหมด:</p><ul>';
    books.forEach(book => {
        output += `<li>${book.title} โดย ${book.author}</li>`;
    });
    output += '</ul>';
    document.getElementById('output').innerHTML = output;
}

function searchBooks() {
    const field = prompt('ค้นหาตาม (title, author, genre):');
    const value = prompt(`กรุณาใส่ ${field}:`);
    const results = library.searchBooks(field, value);
    let output = `<p>ผลการค้นหาสำหรับ "${value}":</p><ul>`;
    results.forEach(book => {
        output += `<li>${book.title} โดย ${book.author}</li>`;
    });
    output += '</ul>';
    document.getElementById('output').innerHTML = output;
}

function updateBook() {
    const id = Number(prompt('กรุณาใส่ ID ของหนังสือที่ต้องการอัปเดต:'));
    const newTitle = prompt('กรุณาใส่ชื่อหนังสือใหม่ (ถ้าไม่ต้องการเปลี่ยนให้กด Enter):');
    
    // อัปเดตข้อมูล
    library.updateBook(id, {
        title: newTitle || undefined,
    });
    document.getElementById('output').innerHTML += `<p>อัปเดตหนังสือ ID ${id} เป็น "${newTitle}"</p>`;
}

function deleteBook() {
    const id = Number(prompt('กรุณาใส่ ID ของหนังสือที่ต้องการลบ:'));
    library.deleteBook(id);
    document.getElementById('output').innerHTML += `<p>ลบหนังสือ ID ${id} เสร็จเรียบร้อยแล้ว</p>`;
}

function saveToJsonFile() {
    const json = JSON.stringify(library, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'library.json';
    a.click();
    URL.revokeObjectURL(url); // ลบ URL เพื่อไม่ให้เปลืองทรัพยากร
    document.getElementById('output').innerHTML += `<p>ข้อมูลห้องสมุดถูกบันทึกลงไฟล์ library.json</p>`;
}


// เริ่มระบบ
document.getElementById('output').innerHTML = '<p>ระบบจัดการห้องสมุดเริ่มทำงานแล้ว</p>';


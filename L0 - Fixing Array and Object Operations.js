
const library = {
    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],
    addBook(book) {
        if (!book.title || !book.author || !book.year) {
            console.log("Book information is incomplete.");
        return;
        }
        this.books.push(book);
    },
    findBookByTitle(title) {
        const finding = this.books.find(book => book.title === title);
        if(finding)
         return finding
        else
         return "Not found"
    },
    removeBook(title) {
        const index = this.books.findIndex(book => book.title === title);
        if (index !== -1) {
            this.books.splice(index, 1);
            return `"${title} Book removed successfully"`
        } else {
            return "Book not found."
        } 
    } 
};

library.addBook({ title: "Habit", author: "George Orwell", year: 1949 });
library.addBook({ title: "All of us", author: "Orwell", year: 1919 });
library.addBook({ title: "God Grace", author: "George", year: 1941 });
console.log(library.books.length);
console.log(library.findBookByTitle("The Hobbit"))
console.log(library.removeBook("The Hobbit"))
console.log(library.books.length);
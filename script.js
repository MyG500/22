class user {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    }

}

class Book {
    constructor(category, BookName) {
        this.category = category;
        this.BookName = BookName;
        this.canBorrow = canBorrow;
    }
    borrow(book) {
        if (!book.canBorrow) { return; }
        this.borrowedBooks.push(book);
    }
}

let user1 = new user('ela', 'live', '052-346-653');
let user2 = new user('maya', 'dror', '054-324-235');
let user3 = new user('romy', 'don', '052-346-653');
let user4 = new user('din', 'alony', '054-324-235');

let book1 = new Book('Comedy thriller', 'die for her');
let book2 = new Book('Childrenbook', 'Crawling to success');
let book3 = new Book('Comedy thriller', 'only me');
let book4 = new Book('Childrenbook', 'happt cupy');


user1.borrow(book1);
user1.borrow(book2);
user1.borrow(book3);
user3.borrow(book4);
user2.borrow(book1);
user4.borrow(book3);


class NonBorrowable {
    constructor(name) {
        this.name = name;
        this.isBorrowable = false;
        this.name = null;
    }
    borrow() {
        alert('this book cant be borrow');
    }
}

class Borrowable extends NonBorrowable {
    constructor(name) {
        super(name);
        this.isBorrowable =throw
    }
    borrow(user) {
        if (user == null) {
            alert('invalid user');
            return;
        }
        if (this.user !== null) {
            alert('this book is borrowed');
            return;
        }
        this.user = user;

    }
    returnBook() {
        this.user = null;
    }
}


class BookReport {
    constructor(name) {
        this.name = name;
        this.users = [];
    }
    addNewUser(user) {
        this.users.push(user);
    }
    printReport() {
        this.users.forEach(user => {
            console.log(`${user.first} ${user.last} from ${user.city} borrowed the following books:`);
            user.borrowedBooks.forEach(book => console.log(book.title));
        });
    }

    isBorrowed(bookToCheck) {
        return this.users.some(
            user => user.borrowedBooks.includes(bookToCheck)
        );
    }
}


book1.borrow
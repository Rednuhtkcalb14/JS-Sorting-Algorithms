const books = require("./bookList")
const lowerValue = require("./lowerValue")


for (let i = 0; i < books.length; i++) {
    const lower = lowerValue(books, i)
    if (books[lower].price < books[i].price) {
        const temp = books[i]
        books[i] = books[lower]
        books[lower] = temp
    }
}

console.log(books)

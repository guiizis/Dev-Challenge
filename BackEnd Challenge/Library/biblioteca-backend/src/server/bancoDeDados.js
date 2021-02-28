const createID = {
    _id: 0,
    getId() {
        return this._id++
    }
}
const books = {}

const returnAllBooks = () => {
    return Object.values(books)
}

const returnABook = (id) => {
    return books[id] || 'Produto Não Encontrado'
}

const createBook = (book) => {
    if (!book.id) {

        book.id = createID.getId()
    }

    books[book.id] = book

    return book
}

const modifyBook = (id, book) => {
    books[id] = book
    return book
}

const deleteBook = (id) => {
    let productToReturn = books[id]
    delete books[id]
    return productToReturn
}


module.exports = {
    returnAllBooks,
    createBook,
    returnABook,
    modifyBook,
    deleteBook
}
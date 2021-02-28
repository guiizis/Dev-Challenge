const port = 8080

const bancoDeDados = require("./bancoDeDados")

const bodyParser = require('body-parser')

const express = require('express')

const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.json())


// ========= Get All Books ========= 
app.get("/books", (req, res) => {
    res.send(bancoDeDados.returnAllBooks())
})

// ========= Get A Book =========
app.get("/book/:id", (req, res) => {

    res.send(bancoDeDados.returnABook(req.params.id))
})

// ========= Create A Book =========
app.post("/createBook", (req, res) => {
    let book = bancoDeDados.createBook({
        titulo: req.body.titulo,
        editora: req.body.editora,
        autores: req.body.autores
    })
    res.send(book)
})

// ========= Modify A Book =========
app.put("/modifyBook/:id", (req, res) => {
    let book = bancoDeDados.modifyBook(req.params.id, {
        titulo: req.body.titulo,
        editora: req.body.editora,
        autores: req.body.autores
    })
    res.send(book)
})

// ========= Delete A Book =========
app.delete("/book/:id", (req, res) => {

    res.send(bancoDeDados.deleteBook(req.params.id))
})



app.listen(port, () => {
    console.log("server on")
})
const express = require("express"); //node js format
const app = express();

app.use(express.json());

let book = [
    {
        id: 1,
        title: "Application Programming",
        author: "Sir. Elmer",
    },
    {
        id: 2,
        title: "ISPM",
        author: "Ma'am. Giselle",
    },
];

app.get("/", (req, res) => {
    res.send("Simple Book API using Node.js and Express");
});

app.get("/api/books", (req, res) => {
    res.json(book);
});

app.get("/api/books/:id", (req, res) => {
    const bookId = parseInt(req.params.id);
    const foundBook = book.find((b) => b.id === bookId);
    if (!foundBook) {
        return res.status(404).json({ message: "Book not found! "});
    }
    res.json(foundBook);
});

app.post("/api/books", (req, res) => {
    const newBook = {
        id: book.length + 1, 
        title: req.body.title,
        author: req.body.author,
    };
    book.push(newBook);
    res.status(201).json(newBook);
});

app.patch("/api/books/:id", (req, res) => {
    const bookId = parseInt(req.params.id);
    const foundBook = book.find((b) => b.id === bookId);
    if (!foundBook) {
        return res.status(404).json({ message: "Book not found! "});
    };
    foundBook.title;
    foundBook.author;
    res.json(foundBook);
});

app.delete("/api/books/:id", (req, res) => {
    const bookId = parseInt(req.params.id);
    const foundBookIndex = book.findIndex((b) => b.id === bookId);
    if (!foundBook === -1) {
        return res.status(404).json({ message: "Book not found! "});
    }
    book.splice(foundBookIndex, 1);
    res.status(204).send();
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serving is running on http://localhost:${PORT}`);
});
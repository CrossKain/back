const Book = require("../../models/book/book");

const getAllBooks = (req, res) => {
  return Book.find({})
    .then((books) => {
      res.status(200).send(books);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

const getBookById = (req, res) => {
  const { book_id } = req.params;
  return Book.findById(book_id)
    .then((book) => {
      if (!book) {
        res.status(404).send("Книга не найдена");
      } else {
        res.status(200).send(book);
      }
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

const createdBook = (req, res) => {
  const { body } = req;
  return Book.create({ ...body })
    .then((book) => {
      res.status(201).send(book);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

const updateBook = (req, res) => {
  const { book_id } = req.params;
  const { body } = req;
  return Book.findByIdAndUpdate(book_id, { ...body })
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

const deleteBook = (req, res) => {
  const { book_id } = req.params;
  return Book.findByIdAndDelete(book_id)
    .then((book) => {
      if (!book) {
        res.status(404).send("Книга не найдена");
      } else {
        res.status(200).send(book);
      }
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};


module.exports = {getAllBooks, getBookById, createdBook, updateBook, deleteBook}
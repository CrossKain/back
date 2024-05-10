const router = require("express").Router();
const {
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
  createdBook,
} = require ("../controlers/books/bookController");


router.get("/books", getAllBooks)
router.get("/books/:book_id", getBookById)
router.post("/books", createdBook)
router.patch("/books/:book_id", updateBook)
router.delete("/books/:book_id", deleteBook)


module.exports = router
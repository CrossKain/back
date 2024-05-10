const mongoose = require("mongoose");

const bookModel = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 2,
  },
  author: {
    type: String,
    required: true,
    minlength: 2,
  },
  release: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("book", bookModel);

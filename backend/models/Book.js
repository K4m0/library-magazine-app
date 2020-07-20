const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let bookSchema = new Schema(
  {
    isbn: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    published_date: {
      type: Date,
    },
    publisher: {
      type: String,
    },
    updated_date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "books",
  }
);

module.exports = mongoose.model("Book", bookSchema);

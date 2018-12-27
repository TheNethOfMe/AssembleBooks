"use strict";

const bookData = require("./data/FED_Books.json");
const books = bookData.items;

const articles = ["The", "A", "An"];

function booksGetAll(req, res) {
  const dataAM = books.filter(book => {
    return /^[A-M]/.test(book.volumeInfo.title);
  });
  const dataNZ = books.filter(book => {
    return /^[N-Z]/.test(book.volumeInfo.title);
  });
  res.render("index", {
    dataAM,
    dataNZ
  });
}

module.exports = {
  booksGetAll
};

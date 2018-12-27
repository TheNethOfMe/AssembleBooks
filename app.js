"use strict";

const express = require("express");
const app = express();
const PORT = 3000;
const ctrl = require("./controllers");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

app.set("view engine", "ejs");

app.get("/", ctrl.booksGetAll);

app.listen(PORT, () => {
  console.log(`We are listening on port ${PORT}.`);
});

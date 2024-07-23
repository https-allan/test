const handlebars = require("express-handlebars");

const express = require("express");
const app = express();
const path = require("path");

app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(9090, () => {
  console.log("Server running http://localhost:9090");
});

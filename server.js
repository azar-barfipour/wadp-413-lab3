const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const routes = require("./routes");

const app = express();
app.set("view engin", "ejs");
app.set("views", "public/views");

app.use(bodyParser.urlencoded({ extended: false }));
console.log(bodyParser);
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

const notes = [];

app.use((req, res, next) => {
  req.notes = notes;
  next();
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "public/views", "404.html"));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT);

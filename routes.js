const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "public/views", "home.html"));
});

router.get("/leave-note", (req, res, next) => {
  res.sendFile(path.join(__dirname, "public/views", "leave.html"));
});

router.post("/leave-note", (req, res, next) => {
  const { note } = req.body;
  const notes = req.notes;

  notes?.push(note);
  res.redirect("/");
});

router.get("/read-note", (req, res, next) => {
  const notes = req.notes;
  res.sendFile(path.join(__dirname, "public/views", "read.html"));
});

module.exports = router;

const express = require("express");
const app = express();
require("dotenv").config();

const loanRouter = require("./routes/ltk/loan");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    message: "✨ 👋🌏 ✨",
    stage: process.env.NODE_ENV,
  });
});

app.get("/ping", (req, res) => {
  res.json({
    message: "🏓",
  });
});

app.use(loanRouter);

module.exports = app;

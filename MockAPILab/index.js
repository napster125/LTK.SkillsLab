const express = require("express");
const app = express();
const port = 3000;
const isLocal = true;
require("dotenv").config();

const mongoDB = require("./connector/mongoose");
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

if (isLocal) {
  //local host
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
} else {
  //for lambda export
  module.exports = app;
}

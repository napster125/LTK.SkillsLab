const app = require("./app");
const mongoose = require("./connector/mongoose");

const port = 4000;

const isLocal = true;

if (isLocal) {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
} else {
  module.exports = app;
}

const mongoose = require("mongoose");
const mongodbUri = process.env.MONGODB_URI;

mongoose.connect(mongodbUri, { dbName: "ltk_loan_test" });

const db = mongoose.connection;

db.once("open", () => {
  console.log("MongoDB connected");
});

module.exports = mongoose;

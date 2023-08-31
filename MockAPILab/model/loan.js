const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  loanId: { type: Number, required: true, unique: true },
  borrowers: [
    {
      pairId: { type: Number, required: true },
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      phone: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model("Loan", schema);

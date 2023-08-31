const LoanModel = require("../model/loan");

const addLoan = async (req, res) => {
  const loanInfo = req.body;
  try {
    const loan = new LoanModel(loanInfo);
    await loan.save();
    res.status(201).json({ success: true, message: "New loan created" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error, please try again.",
      error: error.message,
    });
  }
};
const getLoan = async (req, res) => {
  const loanId = req.params.loanId;
  try {
    const loan = await LoanModel.findOne({ loanId });
    res.status(201).json({ success: true, loan });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
const getLoans = async (req, res) => {
  try {
    const loans = await LoanModel.find({});
    res.status(201).json({ success: true, loans });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
const deleteLoan = async (req, res) => {
  const loanId = req.params.loanId;
  try {
    const result = await LoanModel.deleteOne({ loanId });
    res.status(201).json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
const updateLoanBorrower = async (req, res) => {
  const { loanId, pairId, updatingBorrower } = req.body;
  try {
    const result = await LoanModel.updateOne(
      { loanId, "borrowers.pairId": pairId },
      {
        $set: {
          "borrowers.$.firstName": updatingBorrower.firstName,
          "borrowers.$.lastName": updatingBorrower.lastName,
          "borrowers.$.phone": updatingBorrower.phone,
        },
      }
    );
    res.status(201).json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
const deleteLoanBorrower = async (req, res) => {
  const { loanId, pairId } = req.body;
  try {
    const result = await LoanModel.updateOne(
      { loanId },
      {
        $pull: {
          borrowers: { pairId },
        },
      }
    );
    res.status(201).json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  getLoan,
  addLoan,
  getLoans,
  deleteLoan,
  updateLoanBorrower,
  deleteLoanBorrower,
};

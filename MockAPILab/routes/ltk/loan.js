const express = require("express");
const router = express.Router();

const loanController = require("../../controller/loan");

router.post("/loan", loanController.addLoan);
router.get("/loans", loanController.getLoans);

router
  .route("/loan/:loanId")
  .get(loanController.getLoan)
  .delete(loanController.deleteLoan);

router
  .route("/borrower")
  .patch(loanController.updateLoanBorrower)
  .delete(loanController.deleteLoanBorrower);

module.exports = router;

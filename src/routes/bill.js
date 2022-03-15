const express = require("express");
const router = express.Router();
const {
  addBill,
  getBillByID,
} = require("../controllers");



router.route("/").post(addBill);
router.route("/:id").get(getBillByID);

module.exports = router;

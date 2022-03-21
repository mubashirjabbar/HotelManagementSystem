const express = require("express");
const router = express.Router();
const {
  addReservation,
  getReservationByID,
} = require("../controllers");


router.route("/").post(addReservation);
router.route("/:id").get(getReservationByID);

module.exports = router;

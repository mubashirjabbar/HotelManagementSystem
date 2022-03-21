const express = require("express");
const router = express.Router();
const {
  addHotel,
  getAllHotels,
} = require("../controllers");

router.route("/").get(getAllHotels);
router.route("/").post(addHotel);

module.exports = router;

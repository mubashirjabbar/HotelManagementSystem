const express = require("express");
const router = express.Router();
const {
  addHotel,
  getAllHotels,
  getHotalByID,
} = require("../controllers");

router.route("/").get(getAllHotels);
router.route("/").post(addHotel);
router.route("/:id").get(getHotalByID);


module.exports = router;

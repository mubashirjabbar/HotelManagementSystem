const express = require("express");
const router = express.Router();
const {
  addRoom,
  getAllRooms,
} = require("../controllers");



router.route("/").get(getAllRooms);
router.route("/").post(addRoom);

module.exports = router;

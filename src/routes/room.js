const express = require("express");
const router = express.Router();
const {
  addRoom,
  getAllRooms,
  getRoomByID,
} = require("../controllers");


router.route("/").get(getAllRooms);
router.route("/").post(addRoom);
router.route("/:id").get(getRoomByID);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  addUser,
  getAllUsers,
} = require("../controllers");

router.route("/").get(getAllUsers);
router.route("/").post(addUser);

module.exports = router;

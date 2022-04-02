const express = require("express");
const router = express.Router();
const { addUser, getAllUsers, updateUser } = require("../controllers");

router.route("/").get(getAllUsers);
router.route("/").post(addUser);
router.route("/:id").put(updateUser);

module.exports = router;

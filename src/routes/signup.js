const express = require("express");
const router = express.Router();
const { signupUser } = require("../controllers");


router.route("/").post(signupUser);


module.exports = router;

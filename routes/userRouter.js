const express = require("express");
const router = express.Router();
const {signupUser,loginUser,currentUser} = require("../controller/userController");

router.route("/signup").post(signupUser);
router.route("/login").get(loginUser);
router.route("/current").get(currentUser);

module.exports = router;



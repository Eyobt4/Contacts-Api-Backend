const express = require("express");
const router = express.Router();
const {getContact,postContact,updateContact,creatContact,deleteContact} = require("../controller/contactController");


router.route("/").get(getContact);
router.route("/").post(creatContact);
router.route("/:id").put(updateContact);
router.route("/:id").delete(deleteContact);

module.exports = router;
const express = require("express");
const router = express.Router();
const adminController = require("../controller/adminController");

router.post("/register", adminController.registeruser);

router.post("/login",adminController.loginAdmin);

module.exports = router;
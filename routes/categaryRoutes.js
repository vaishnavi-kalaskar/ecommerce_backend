const express = require("express");
const router = express.Router();
const taskController = require("../controller/categoryController");
const verifyToken = require("../middleware/auth");

router.post("/create", verifyToken, taskController.createcategary);

router.delete("/delete", verifyToken, taskController.deletecategary);

router.put("/update", verifyToken, taskController.updatecategary);

router.put("/get", taskController.getcategary);

module.exports = router;

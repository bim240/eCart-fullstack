var express = require("express");
var router = express.Router();
var adminController = require("../../controller/v1/admin");

router.get("/allitem", adminController.getAllItems);

module.exports = router;

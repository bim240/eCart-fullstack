var express = require("express");
var router = express.Router();
var userController = require("../../controller/v1/user");
var Auth = require("../../modules/auth");

router.put("/", Auth.userAuth, userController.updateUserInfo);

module.exports = router;

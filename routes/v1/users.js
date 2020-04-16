var express = require("express");
var router = express.Router();
var UserController = require("../../controller/v1/users");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.post("/", UserController.register);
router.get("/login", UserController.login);
module.exports = router;

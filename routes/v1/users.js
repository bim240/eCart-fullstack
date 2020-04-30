var express = require("express");
var router = express.Router();
var passport = require("passport");

var UserController = require("../../controller/v1/users");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.post("/", UserController.register);
router.post("/login", UserController.login);
router.get("/auth/github", passport.authenticate("github"));
router.get(
  "/auth/github/redirect",
  passport.authenticate("github", {
    failureRedirect: "/login",
    session: false,
  }),
  UserController.githubLogin
);

module.exports = router;

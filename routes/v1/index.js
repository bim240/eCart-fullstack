var express = require("express");
var router = express.Router();
var usersRouter = require("./users");
var itemsRouteer = require("./items");
var adminRouter = require("./admin");
var userRouter = require("./user");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/users", usersRouter);
router.use("/user", userRouter);
router.use("/items", itemsRouteer);
router.use("/user/adimin", adminRouter);
module.exports = router;

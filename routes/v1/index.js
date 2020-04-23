var express = require("express");
var router = express.Router();
var usersRouter = require("./users");
var itemsRouteer = require("./items");
var adminRouter = require("./admin");
var userRouter = require("./user");
var commentRouter = require("./comment");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/users", usersRouter);
router.use("/user", userRouter);
router.use("/items", itemsRouteer);
router.use("/admin", adminRouter);
router.use("/comments", commentRouter);
module.exports = router;

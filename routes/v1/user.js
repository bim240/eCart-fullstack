var express = require("express");
var router = express.Router();

var userController = require("../../controller/v1/user");
var Auth = require("../../modules/auth");
var cartController = require("../../controller/v1/cart");

router.put("/", Auth.userAuth, userController.updateUserInfo);
router.post("/fav", Auth.userAuth, userController.addToFavList);
router.put("fav", Auth.userAuth, userController.removeFromFavList);
router.delete("/", Auth.userAuth, userController.deleteAccount);
router.get("/cart", Auth.userAuth, cartController.getCart);
router.post("/cart", Auth.userAuth, cartController.addToCart);

module.exports = router;

var express = require("express");
var router = express.Router();

var userController = require("../../controller/v1/user");
var Auth = require("../../modules/auth");
var cartController = require("../../controller/v1/cart");
var addressController = require("../../controller/v1/address");

router.put("/", Auth.userAuth, userController.updateUserInfo);
router.post("/fav", Auth.userAuth, userController.addToFavList);
router.put("/fav", Auth.userAuth, userController.removeFromFavList);
router.delete("/", Auth.userAuth, userController.deleteAccount);
router.get("/cart", Auth.userAuth, cartController.getCart);
router.post("/cart", Auth.userAuth, cartController.addToCart);
router.delete("/cart", Auth.userAuth, cartController.removeFromCart);
router.get("/address", Auth.userAuth, addressController.getAllAddress);
router.post("/address", Auth.userAuth, addressController.addAddress);
router.put("/address", Auth.userAuth, addressController.updateAddress);
router.delete("/address", Auth.userAuth, addressController.deleteAddress);

module.exports = router;

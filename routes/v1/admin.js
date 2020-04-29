var express = require("express");
var router = express.Router();
var adminController = require("../../controller/v1/admin");
var Auth = require("../../modules/auth");
var itemController = require("../../controller/v1/items");

router.post("/user/login", adminController.login);
router.post("/add", Auth.adminAuth, adminController.addNewItems);
router.get("/all", Auth.adminAuth, adminController.getAllItems);
router.put("/update", Auth.adminAuth, adminController.updateItem);
router.delete("/delete", Auth.adminAuth, adminController.deleteItem);
router.get("/allUsers", Auth.adminAuth, adminController.getAllUsers);
router.post("/allUsers/block", Auth.adminAuth, adminController.blockUser);
router.post("/allUsers/unBlock", Auth.adminAuth, adminController.unBlockUser);

module.exports = router;

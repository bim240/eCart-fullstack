var express = require("express");
var router = express.Router();
var Auth = require("../../modules/auth");
var commentController = require("../../controller/v1/comment");

router.get("/", commentController.getAllComments);
router.post("/", Auth.userAuth, commentController.addComment);
router.delete("/", Auth.userAuth, commentController.deleteComment);
router.put("/", Auth.userAuth, commentController.updateComments);
module.exports = router;

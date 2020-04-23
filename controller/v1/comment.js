var Comment = require("../../models/comment");
var foramtData = require("../../modules/formatData");
var Product = require("../../models/products");

module.exports = {
  getAllComments: async (req, res, next) => {
    try {
      var allComments = await Comment.find({
        productId: req.body.comments.productId,
      }).sort({
        id: -1,
      });
      if (allComments) {
        var populatedComments = [];
        for (let comment of allComments) {
          var populatedComment = await Comment.findById(comment.id).populate(
            "author"
          );
          populatedComments.push(populatedComment);
        }
        var formatComments = foramtData.formatComments(populatedComments);
      } else {
        var formatComments = [];
      }
      res.status(200).json({ comments: formatComments });
    } catch (error) {
      next(error);
    }
  },
  addComment: async (req, res, next) => {
    try {
      req.body.comment.author = req.user.userId;
      var newComment = await Comment.create(req.body.comment, { new: true });
      await Product.findByIdAndUpdate(req.body.comment.productId, {
        $push: { reviews: newComment.id },
      });
      var newComment = await Comment.findById(newComment[0].id).populate(
        "author"
      );
      console.log(newComment);
      var formatComment = foramtData.formatComments([newComment]);
      res.status(200).json({ comment: formatComment });
    } catch (error) {
      next(error);
    }
  },
  deleteComment: async (req, res, next) => {
    try {
      req.body.comment.author = req.user.userId;
      var comment = await Comment.findById(req.body.comment.id);
      if (comment.author == req.user.userId) {
        await Product.findByIdAndUpdate(req.body.comment.productId, {
          $pull: { reviews: comment.id },
        });
        var newComment = await Comment.findByIdAndDelete(req.body.comment.id);
        var formatComment = foramtData.formatComments([newComment]);
        res.status(200).json({ comment: formatComment });
      } else {
        res.status(400).json({ msg: "You cant delete this comment" });
      }
    } catch (error) {
      next(error);
    }
  },
  updateComments: async (req, res, next) => {
    try {
      req.body.comment.author = req.user.userId;
      var comment = await Comment.findById(req.body.comment.id);
      if (comment.author == req.user.userId) {
        var updatedComment = await Comment.findByIdAndUpdate(
          req.body.comment.id,
          req.body.comment,
          { new: true }
        ).populate("author");
        var formatComment = foramtData.formatComments([updatedComment]);
        res.status(200).json({ comment: formatComment });
      } else {
        res.status(400).json({ msg: "You cant update this comment" });
      }
    } catch (error) {
      next(error);
    }
  },
};

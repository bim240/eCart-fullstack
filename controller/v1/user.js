var User = require("../../models/user");
var FormatData = require("../../modules/formatData");
var Address = require("../../models/address");
var Cart = require("../../models/cart");
var Comment = require("../../models/comment");
var Auth = require("../../modules/auth");

module.exports = {
  getUserInfo: async (req, res, next) => {
    try {
      var userinfo = await User.findById(req.user.userId);
      var token = req.headers["authorization"] || "";
      userinfo.token = token;
      userinfo = FormatData.userData(userinfo);
      res.status(200).json({ user: userinfo });
    } catch (error) {
      next(error);
    }
  },
  // update user info
  updateUserInfo: async (req, res, next) => {
    try {
      // console.log(req.body.user);
      var previousUser = await User.findById(req.user.userId);
      req.body.user.isAdmin = previousUser.isAdmin;
      req.body.user.isBlocked = previousUser.isBlocked;
      var updateduser = await User.findByIdAndUpdate(
        req.user.userId,
        req.body.user,
        { new: true }
      ).populate("cart");
      const token = await Auth.geneateJWT(updateduser, process.env.SECRET);
      updateduser.token = token;
      // console.log(updateduser);
      updateduser = FormatData.userData(updateduser);

      res.status(200).json({ user: updateduser });
    } catch (error) {
      next(error);
    }
  },
  // get all fav list
  getAllFav: async (req, res, next) => {
    try {
      var allFav = await User.findById(req.user.userId).populate("fav");
      res.status(200).json({ allFav: FormatData.foramtFav(allFav) });
    } catch (error) {
      next(error);
    }
  },
  // add to fav list
  addToFavList: async (req, res, next) => {
    try {
      // console.log(req.body);
      var updatedFavList = await User.findByIdAndUpdate(
        req.user.userId,
        {
          $push: { fav: req.body.itemId },
        },
        { new: true }
      ).populate("fav");
      res.status(200).json({ favList: FormatData.foramtFav(updatedFavList) });
    } catch (error) {
      next(error);
    }
  },
  // remove from fav list
  removeFromFavList: async (req, res, next) => {
    try {
      var updatedFavList = await User.findByIdAndUpdate(
        req.user.userId,
        {
          $pull: { fav: req.body.itemId },
        },
        { new: true }
      ).populate("fav");
      res.status(200).json({ msg: "removed from fav list" });
    } catch (error) {
      next(error);
    }
  },
  // delete account
  deleteAccount: async (req, res, next) => {
    try {
      var result = await User.findByIdAndDelete(req.user.userId);
      for (let add in result.address) {
        await Address.findByIdAndDelete(add);
      }
      await Cart.findByIdAndDelete(result.cart);
      var allComments = await Comment.find({ author: req.user.userId });
      for (let comment in allComments) {
        await Comment.findByIdAndDelete(comment.id);
      }
      res.status(200).json({ user: result });
    } catch (error) {
      next(error);
    }
  },
};

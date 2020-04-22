var User = require("../../models/user");
var FormatData = require("../../modules/formatData");

module.exports = {
  // update user info
  updateUserInfo: async (req, res, next) => {
    try {
      // console.log(req.user);
      var previousUser = await User.findById(req.user.userId);
      req.body.user.isAdmin = previousUser.isAdmin;
      req.body.user.isBlocked = previousUser.isBlocked;
      var updateduser = await User.findByIdAndUpdate(
        req.user.userId,
        req.body.user,
        { new: true }
      );
      // console.log(updateduser);
      updateduser = FormatData.userData(updateduser);

      res.status(200).json({ user: updateduser });
    } catch (error) {
      next(error);
    }
  },
  // add to fav list
  addToFavList: async (req, res, next) => {
    try {
      var updatedFavList = await User.findByIdAndUpdate(
        req.user.userId,
        {
          $push: { fav: req.body.itemId },
        },
        { new: true }
      ).populate("Product");
      res.status(100).json({ favList: updatedFavList });
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
      ).populate("Product");
      res.status(100).json({ favList: updatedFavList });
    } catch (error) {
      next(error);
    }
  },
  deleteAccount: async (req, res, next) => {
    try {
      var result = await User.findByIdAndDelete(req.user.userId);
      res.status(200).json({ msg: success });
    } catch (error) {
      next(error);
    }
  },
};

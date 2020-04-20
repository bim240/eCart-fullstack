var User = require("../../models/user");
var FormatData = require("../../modules/formatData");

module.exports = {
  // update user info
  updateUserInfo: async (req, res, next) => {
    try {
      console.log(req.user);
      var updateduser = await User.findByIdAndUpdate(
        req.user.userId,
        req.body.user,
        { new: true }
      );
      console.log(updateduser);
      updateduser = FormatData.userData(updateduser);

      res.status(200).json({ user: updateduser });
    } catch (error) {
      next(error);
    }
  },
};

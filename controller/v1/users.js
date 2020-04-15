var User = require("../../models/user");
var Auth = require("../../modules/auth");
var FormatData = require("../../modules/formatData");

module.exports = {
  register: async (req, res, next) => {
    try {
      const user = await User.create(req.body.user);
      // console.log(user);
      const token = await Auth.geneateJWT(user, process.env.SECRET);
      // console.log(token);
      user.token = token;
      userInfo = FormatData.userData(user, token);
      console.log(userInfo);
      res.status(200).json({ user: userInfo, token });
    } catch (err) {
      return next(err);
    }
  },
};

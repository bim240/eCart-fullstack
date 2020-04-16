var User = require("../../models/user");
var Auth = require("../../modules/auth");
var FormatData = require("../../modules/formatData");

module.exports = {
  // sign up
  register: async (req, res, next) => {
    try {
      const user = await User.create(req.body.user);
      const token = await Auth.geneateJWT(user, process.env.SECRET);
      user.token = token;
      // userInfo = FormatData.userData(user, token);
      // console.log(userInfo);
      res.status(200).json({ user: FormatData.userData(user, token) });
    } catch (err) {
      return next(err);
    }
  },
  // login
  login: async (req, res, next) => {
    var { email, password } = req.body.user;
    if (!email || !password) {
      res.status(400).json({ err: "eamil and password required" });
    }
    var user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ err: "invalid user" });
    }
    var result = await user.verifyPassword(password);
    if (!result) {
      res.status(400).json({ err: "invalid password" });
    }
    var token = await Auth.geneateJWT(user);
    user.token = token;
    // var userInfo = await FormatData.userData(user, token);
    // console.log(FormatData.userData(user, token), "user details in controller");
    res.status(200).json({ user: FormatData.userData(user, token) });
    try {
    } catch (error) {
      next(errror);
    }
  },
};
var User = require("../../models/user");
var Cart = require("../../models/cart");
var Auth = require("../../modules/auth");
var FormatData = require("../../modules/formatData");
var mailController = require("./mail");

module.exports = {
  // sign up
  register: async (req, res, next) => {
    try {
      if (req.body.user.email === "bimlendu357@gmail.com") {
        req.body.user.isAdmin = true;
      } else {
        req.body.user.isAdmin = false;
        req.body.user.isBlocked = false;
      }
      // console.log(req.body.user);
      let user = await User.create(req.body.user);
      let cart = await Cart.create({ userId: user.id });
      user = await User.findByIdAndUpdate(
        user.id,
        { cart: cart.id },
        { new: true }
      ).populate("cart");
      const token = await Auth.geneateJWT(user, process.env.SECRET);
      user.token = token;
      // userInfo = FormatData.userData(user, token);
      // console.log(user);
      var mail = await mailController.sendMailOnSignUp("name", "email");
      // console.log(mail, "after mail");
      res.status(200).json({
        user: FormatData.userData(user, token),
        email: mail,
      });
    } catch (err) {
      return next(err);
    }
  },
  // login
  login: async (req, res, next) => {
    var { email, password } = req.body.user;
    try {
      if (!email || !password) {
        res.status(400).json({ err: "eamil and password required" });
      }
      var user = await User.findOne({ email }).populate("cart");
      if (!user) {
        res.status(400).json({ err: "invalid user" });
      }
      var result = await user.verifyPassword(password);
      if (!result) {
        res.status(400).json({ err: "invalid password" });
      }
      if (user.isBlocked) {
        res.status(400).json({
          msg:
            "Your account has been blocked in regards to your recent activity",
        });
      }
      var token = await Auth.geneateJWT(user);
      user.token = token;
      // var userInfo = await FormatData.userData(user, token);
      // console.log(FormatData.userData(user, token), "user details in controller");
      res.status(200).json({ user: FormatData.userData(user, token) });
    } catch (error) {
      next(error);
    }
  },

  // github login
  githubLogin: async (req, res, next) => {
    try {
      var token = await Auth.geneateJWT(req.user);
      var cart = await Cart.create({ userId: req.user.Id });
      req.user.token = token;
      res
        .status(200)
        .json({ user: FormatData.userData(req.user, token), cart });
    } catch (error) {
      next(error);
    }
  },
  // google login
  googleLogin: async (req, res, next) => {
    try {
      var token = await Auth.geneateJWT(req.user);
      req.user.token = token;
      res.status(200).json({ user: FormatData.userData(req.user, token) });
    } catch (error) {
      next(error);
    }
  },
};

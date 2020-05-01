var Product = require("../../models/products");
var User = require("../../models/user");
var Auth = require("../../modules/auth");
var FormatData = require("../../modules/formatData");

module.exports = {
  // login
  login: async (req, res, next) => {
    var { email, password } = req.body.user;
    // console.log("login server", email, password);
    try {
      if (!email || !password) {
        res.status(400).json({ err: "eamil and password required" });
      }
      var user = await User.findOne({ email }).populate("cart");
      if (!user) {
        res.status(400).json({ err: "invalid user" });
      }
      if (!user.isAdmin) {
        res.status(400).json({ msg: "You are not an admin" });
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
    } catch (error) {
      next(error);
    }
  },
  // get all the items
  getAllItems: async (req, res, next) => {
    try {
      var allProduct = await Product.find();
      res.status(200).json({ products: allProduct });
    } catch (error) {
      next(error);
    }
  },
  // add items
  addNewItems: async (req, res, next) => {
    try {
      var createdItems = [];

      for (let item of req.body.items) {
        let newItem = await Product.create(item);
        createdItems.push(newItem);
      }
      res.status(200).json({ items: createdItems });
    } catch (error) {
      next(error);
    }
  },
  // update item
  updateItem: async (req, res, next) => {
    try {
      var updatedItem = await Product.findByIdAndUpdate(
        req.body.item.id,
        req.body.item,
        { new: true }
      );
      res.status(200).json({ item: updatedItem });
    } catch (error) {
      next(error);
    }
  },
  // delete item
  deleteItem: async (req, res, next) => {
    try {
      var deletedItem = await Product.findByIdAndDelete(req.body.item.id);
      res.status(200).json({ product: deletedItem });
    } catch (error) {
      next(error);
    }
  },
  // get all the user
  getAllUsers: async (req, res, next) => {
    try {
      var allUsers = await User.find();
      var filterUser = [];
      for (let user of allUsers) {
        if (!user.isAdmin) {
          user = FormatData.adminAllUser(user);
          filterUser.push(user);
        }
      }
      // console.log(filterUser);
      res.status(200).json({ allUsers: filterUser });
    } catch (error) {
      next(error);
    }
  },
  // block a user
  blockUser: async (req, res, next) => {
    try {
      var blockedUser = await User.findByIdAndUpdate(
        req.body.user.id,
        {
          isBlocked: true,
        },
        { new: true }
      );
      var updatedUser = FormatData.adminAllUser(blockedUser);
      res.status(200).json({ updatedUser });
    } catch (error) {
      next(error);
    }
  },
  // unblock a user
  unBlockUser: async (req, res, next) => {
    try {
      var blockedUser = await User.findByIdAndUpdate(
        req.body.user.id,
        {
          isBlocked: false,
        },
        { new: true }
      );
      var updatedUser = FormatData.adminAllUser(blockedUser);
      res.status(200).json({ updatedUser });
    } catch (error) {
      next(error);
    }
  },
};

var User = require("../../models/user");
var Product = require("../../models/products");
var mailController = require("./mail");

module.exports = {
  placeOrder: async (req, res, next) => {
    try {
      var orders = req.body.orders;
      for (let order of orders) {
        await User.findByIdAndUpdate(req.user.userId, {
          $push: { order: order.id },
        });
        await Product.findByIdAndUpdate(order.id, {
          $inc: { quantity: -order.quantity },
        });
      }
      var mail = mailController.sendMailOnOrder("name", "mail");
      res.status(200).json({ orders, mail });
    } catch (error) {
      next(error);
    }
  },
};

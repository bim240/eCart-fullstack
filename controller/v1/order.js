var User = require("../../models/user");
var Product = require("../../models/products");
var mailController = require("./mail");
var Cart = require("../../models/cart");

module.exports = {
  placeOrder: async (req, res, next) => {
    try {
      // console.log()

      var orders = req.body.orders;
      var user = await User.findById(req.user.userId);
      for (let order of orders) {
        await User.findByIdAndUpdate(req.user.userId, {
          $push: { order: order.productId },
        });
        await Product.findByIdAndUpdate(order.id, {
          $inc: { quantity: -order.quantity },
        });
      }
      var cartItem = await Cart.findByIdAndUpdate(
        user.cart,
        {
          $set: { product: [] },
        },
        { new: true }
      );
      // console.log(cartItem, "cart");
      // console.log(user.cart, "cart id from user");
      var mail = mailController.sendMailOnOrder("name", "mail");
      res.status(200).json({ orders: "placed", mail: "sent" });
    } catch (error) {
      next(error);
    }
  },
};

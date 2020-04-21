var Cart = require("../../models/cart");

module.exports = {
  getCart: async (req, res, next) => {
    try {
      let cartInfo = await Cart.findOne({ userId: req.user.userId });
      res.status(200).json({ cart: cartInfo });
    } catch (error) {
      next(error);
    }
  },
  addToCart: async (req, res, next) => {
    try {
      let cart = await Cart.findOne({ userId: req.user.userId });
      let updatedCart = await Cart.findByIdAndUpdate(
        cart.id,
        req.body.cartItem,
        { new: true }
      );
      res.status(200).json({ cart: updatedCart });
    } catch (error) {
      next(error);
    }
  },
};

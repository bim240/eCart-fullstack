var Product = require("../../models/products");

module.exports = {
  getAllItems: async (req, res, next) => {
    try {
      var allProduct = await Product.find();
      res.status(200).json({ products: allProduct });
    } catch (error) {
      next(error);
    }
  },
};

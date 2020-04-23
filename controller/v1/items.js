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
  getItemsByName: async (req, res, next) => {
    try {
      var category = req.params.name;
      var product = await Product.find({ category });
      res.status(200).json({ items: product });
    } catch (error) {
      next(error);
    }
  },
};

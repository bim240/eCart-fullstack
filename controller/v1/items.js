var Product = require("../../models/products");

module.exports = {
  addItems: async (req, res, next) => {
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
};

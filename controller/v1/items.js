var Furniture = require("../../models/items/furniture");

module.exports = {
  addItems: async (req, res, next) => {
    try {
      var createdItems = [];
      if ((req.params.name = "furniture")) {
        for (let item of req.body.items) {
          let newItem = await Furniture.create(item);
          createdItems.push(newItem);
        }
        res.status(200).json({ items: createdItems });
      }
    } catch (error) {
      next(error);
    }
  },
};

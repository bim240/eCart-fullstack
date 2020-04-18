var Furniture = require("../../models/items/furniture");

module.exports = {
  addItems: async (req, res, next) => {
    try {
      var createdItems = [];
      // var newitem = await Furniture.create(req.body.items[0]);
      // console.log(newitem);
      if ((req.params.name = "furniture")) {
        for (let item of req.body.items) {
          // console.log(item);
          let newItem = await Furniture.create(item);
          createdItems.push(newItem);
        }
        res.status(200).json({ items: createdItems });
      }
      // console.log(req.params);
      // await Furniture.create(item);
      // switch (req.params.name) {
      //   case "furniture":
      //     createdItems = await req.body.items.map((item) => {
      //       return Furniture.create(item);
      //     });
      //     // .then((res) => console.log(createdItems));
      //     // createdItems.then((res) => console.log(res));
      //     console.log(createdItems);
      //   // res.status(200).json({ items: createdItems });

      //   default:
      //   res.status(300).json({ msg: "unknown req" });
      // }
      // res.status(200).json({ items: req.body });
    } catch (error) {
      next(error);
    }
  },
};

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var cartSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: User,
  },
  productId: [
    {
      type: Schema.Types.ObjectId,
      ref: Product,
      count: Number,
    },
  ],
});

module.exports = mongoose.model("Cart", cartSchema);

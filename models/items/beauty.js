var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BeautySchema = new Schema(
  {
    name: String,
    image: [String],
    weight: Number,
    price: Number,
    brand: String,
    stars: Number,
    seller: String,
    soldCount: Number,
    discount: Number,
    // comments: [{ type: Schema.Types.ObjectId, ref: Comment }],
    subCatogery: String,
    available: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Beauty", BeautySchema);

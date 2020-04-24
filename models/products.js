var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProductSchema = new Schema(
  {
    category: String,
    subCatogery: String,
    name: String,
    image: [String],
    price: Number,
    brand: String,
    stars: Number,
    seller: String,
    soldCount: Number,
    discount: Number,
    size: String,
    discription: [String],
    review: [{ type: Schema.Types.ObjectId, ref: "Review" }],
    quantity: Number,
    varient: {
      gender: String,
      ageGroup: String,
      genere: String,
      weight: Number,
      color: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);

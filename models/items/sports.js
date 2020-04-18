var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SportSchema = new Schema(
  {
    name: String,
    image: [String],
    price: Number,
    brand: String,
    size: String,
    gender: String,
    ageGroup: String,
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

module.exports = mongoose.model("Sport", SportSchema);

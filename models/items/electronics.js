var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ElectronicSchema = new Schema(
  {
    name: String,
    image: [String],
    brand: String,
    price: Number,
    stars: Number,
    seller: String,
    soldCount: Number,
    discount: Number,
    // comments: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: Comment,
    //   },
    // ],
    subCategory: String,
    available: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Electronic", ElectronicSchema);

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var reviewSchema = new Schema(
  {
    productId: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    body: String,
    stars: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);

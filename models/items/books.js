var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BookSchema = new Schema(
  {
    name: String,
    image: [String],
    price: Number,
    stars: Number,
    author: String,
    genre: String,
    publisher: String,
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

module.exports = mongoose.model("Book", BookSchema);

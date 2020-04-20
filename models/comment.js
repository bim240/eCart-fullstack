var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var commentSchema = new Schema(
  {
    productId: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: User,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);

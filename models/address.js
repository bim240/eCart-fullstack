var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var addressSchema = new Schema(
  {
    resident: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    address: [
      {
        name: String,
        sonOf: String,
        mobNumber: Number,
        address1: String,
        address2: String,
        area: String,
        district: String,
        state: String,
        pinCode: Number,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Address", addressSchema);

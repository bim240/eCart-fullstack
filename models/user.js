var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcryptjs");

var userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      // unique: true,
      minlength: 6,
      maxlength: 12,
    },
    email: {
      type: String,
      required: true,
      // unique: true,
      lowercase: true,
      match: /@/,
    },
    password: {
      type: String,
      required: true,
    },
    image: String,
    phone: Number,
    fav: [String],
    coupon: [String],
    wallet: Number,
    isBlocked: Boolean,
    admin: Boolean,
    cart: [{ type: Schema.Types.ObjectId, ref: "Cart" }],
    address: [{ type: Schema.Types.ObjectId, ref: "Address" }],
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
    order: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  try {
    console.log("inside hash");
    if (this.password && this.isModified("password")) {
      console.log("inside hash");
      this.password = await bcrypt.hash(this.password, 10);
      next();
    }
  } catch (error) {
    next(error);
  }
});

userSchema.methods.verifyPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", userSchema);

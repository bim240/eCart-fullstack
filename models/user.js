var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcryptjs");

var userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 6,
      maxlength: 12,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: /@/,
    },
    password: {
      type: String,
      required: true,
    },
    image: String,
    phone: Number,
    coupon: [String],
    wallet: Number,
    isBlocked: Boolean,
    isAdmin: Boolean,
    fav: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    cart: { type: Schema.Types.ObjectId, ref: "Cart" },
    address: [{ type: Schema.Types.ObjectId, ref: "Address" }],
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
    order: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  try {
    // console.log("inside hash");
    if (this.password && this.isModified("password")) {
      // console.log("inside hash");
      this.password = await bcrypt.hash(this.password, 10);
      next();
    }
  } catch (error) {
    next(error);
  }
});
userSchema.pre("findOneAndUpdate", async function (next) {
  try {
    // console.log("inside hash find by id", this._update.password);
    if (this._update.password) {
      // console.log("inside hash");
      this._update.password = await bcrypt.hash(this._update.password, 10);
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

var Address = require("../../models/address");
var User = require("../../models/user");

module.exports = {
  // get all address
  getAllAddress: async (req, res, next) => {
    try {
      var alladdress = await Address.find({ resident: req.user.userId });
      res.status(200).json({ address: alladdress });
    } catch (error) {
      next(error);
    }
  },
  // add address
  addAddress: async (req, res, next) => {
    try {
      // console.log(req.body.address);
      req.body.address.resident = req.user.userId;
      var newAddresss = await Address.create(req.body.address, { new: true });
      await User.findByIdAndUpdate(req.user.userId, {
        $push: { address: newAddresss.id },
      });
      res.status(200).json({ address: newAddresss });
    } catch (error) {
      next(error);
    }
  },
  // update address
  updateAddress: async (req, res, next) => {
    try {
      var newAddresss = await Address.findByIdAndUpdate(
        req.body.address.id,
        req.body.address,
        { new: true }
      );
      res.status(200).json({ address: newAddresss });
    } catch (error) {
      next(error);
    }
  },
  // delete address
  deleteAddress: async (req, res, next) => {
    try {
      req.body.address.resident = req.user.userId;
      var newAddresss = await Address.findByIdAndDelete(req.body.address.id);
      await User.findByIdAndUpdate(req.user.userId, {
        $pull: { address: newAddresss.id },
      });
      res.status(200).json({ address: newAddresss });
    } catch (error) {
      next(error);
    }
  },
};

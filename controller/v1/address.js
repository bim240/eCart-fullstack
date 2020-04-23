var Address = require("../../models/address");
var User = require("../../models/user");

module.exports = {
  getAllAddress: async (req, res, next) => {
    try {
      var alladdress = await Address.find({ resident: req.user.userId });
      res.status(200).json({ address: alladdress });
    } catch (error) {
      next(error);
    }
  },
  addAddress: async (req, res, next) => {
    try {
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

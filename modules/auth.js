var bcypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

module.exports = {
  geneateJWT: async (user) => {
    try {
      var payload = { userId: user.id, email: user.email };
      var token = await jwt.sign(payload, process.env.SECRET);
      return token;
    } catch (error) {
      next(error);
    }
  },
  userAuth: async (req, res, next) => {
    var token = req.headers["authorization"] || "";
    try {
      if (token) {
        var payload = await jwt.verify(token, process.env.SECRET);
        req.user = payload;
        req.user.token = token;
        next();
      } else {
        res.status(400).json({ err: "token required" });
      }
    } catch (error) {
      next(error);
    }
  },
};

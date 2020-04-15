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
};

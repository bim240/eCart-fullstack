var passport = require("passport");
var gitHubStrategy = require("passport-github").Strategy;

var User = require("../models/user");
var mailController = require("../controller/v1/mail");

passport.use(
  new gitHubStrategy(
    {
      clientID: process.env.CLIENTID,
      clientSecret: process.env.CLIENTSECRET,
      callbackURL: "/api/v1/users/auth/github/redirect",
    },
    async function (refreshToken, accessToken, profile, done) {
      // console.log(profile);
      var user;
      var currentUser = await User.findOne({ eamil: profile._json.email });
      if (currentUser) {
        user = currentUser;
        done(null, user);
      } else {
        newUser = {
          name: profile.displayName,
          username: profile.username,
          email: profile._json.email,
          image: profile._json.avatar_url,
          password: process.env.PASSWORD,
          isAdmin: false,
          isBlocked: false,
        };
        if (newUser.email === "bimlendu357@gmail.com") {
          newUser.isAdmin = true;
        }
        mailController.sendMailOnSignUp("name", "email");
        var newUser = await User.create(newUser);
        let cart = await Cart.create({ userId: newUser.id });
        newUser = await User.findByIdAndUpdate(
          newUser.id,
          { cart: cart.id },
          { new: true }
        ).populate("cart");
        user = newUser;
        done(null, user);
      }

      // console.log(user, "from passprt");
    }
  )
);

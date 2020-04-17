var passport = require("passport");
var gitHubStrategy = require("passport-github").Strategy;
var User = require("../models/user");

passport.use(
  new gitHubStrategy(
    {
      clientID: process.env.CLIENTID,
      clientSecret: process.env.CLIENTSECRET,
      callbackURL: "/api/v1/users/auth/github/redirect",
    },
    function (refreshToken, accessToken, profile, done) {
      // console.log(profile);
      var user;
      User.findOne({ eamil: profile._json.email }).then((currentUser) => {
        if (currentUser) {
          user = currentUser;
          done(null, user);
        } else {
          newUser = {
            name: profile.displayName,
            username: profile.username,
            email: profile._json.email,
            image: profile._json.avatar_url,
            password: "9610585256jhgvbjh",
          };
          User.create(newUser).then((newUser) => {
            user = newUser;
            done(null, user);
          });
        }
      });

      // console.log(user, "from passprt");
    }
  )
);

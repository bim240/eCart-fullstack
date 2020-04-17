var passport = require("passport");
var googleStrategy = require("passport-google-oauth20");
var User = require("../models/user");

passport.use(
  new googleStrategy(
    {
      clientID: process.env.GOOGLECLIENTID,
      clientSecret: process.env.GOOGLECLIENTSECRET,
      callbackURL: "/api/v1/users/auth/google/redirect",
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
            password: process.env.PASSWORD,
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

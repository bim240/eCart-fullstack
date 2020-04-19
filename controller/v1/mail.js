module.exports = {
  sendMailOnSignUp: async (name, email) => {
    try {
      var api_key = process.env.MAILAPIKEY;
      var domain = process.env.MAILDOMAIN;
      var mailgun = require("mailgun-js")({ apiKey: api_key, domain: domain });

      var data = {
        from: "Bimlendu <bimlendu357@gmail.com>",
        to: "bimlendu357@gmail.com",
        subject: "signup",
        text: "You are now a valued customer of eCart",
      };

      mailgun.messages().send(data, function (error, body) {
        if (error) {
          console.log(error);
          return "Email not sent";
          // res.status(400).json({ msg: "error while sending mail" });
        }
        console.log(body);
        return "Email sent";
        // res.status(200).json({ email: body });
      });
    } catch (error) {
      return error;
    }
  },
};

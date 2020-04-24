module.exports = {
  sendMailOnSignUp: (name, email) => {
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: "bimlendu357@gmail.com",
      from: "bimlendu357@gmail.com",
      subject: "Sending with Twilio SendGrid is Fun",
      text: "and easy to do anywhere, even with Node.js",
      html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };
    return (async () => {
      try {
        await sgMail.send(msg);
        return { msg: "success" };
      } catch (error) {
        console.error(error);

        if (error.response) {
          console.error(error.response.body);
          return { error: error.response.body };
        }
      }
    })();
  },
  sendMailOnOrder: (name, email) => {
    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: "bimlendu357@gmail.com",
      from: "bimlendu357@gmail.com",
      subject: "Sending with Twilio SendGrid is Fun",
      text: "Your order has been placed",
      html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };
    return (async () => {
      try {
        await sgMail.send(msg);
        return { msg: "success" };
      } catch (error) {
        console.error(error);

        if (error.response) {
          console.error(error.response.body);
          return { error: error.response.body };
        }
      }
    })();
  },
};

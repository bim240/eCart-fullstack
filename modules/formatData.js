// module.exports = {
//   userData: (user, token) => {
//     // console.log(token);
//     const userInfo = {
//       username: user.username,
//       email: user.email,
//       token: user.token,
//       image: user.image,
//       phone: user.phone,
//       coupons: user.coupon,
//       wallet: user.wallet,
//       token: user.token,
//     };
//     return userInfo;
//   },
// };
exports.userData = (user, token) => {
  // console.log(token, "token in format data");
  return (userInfo = {
    username: user.username,
    email: user.email,
    token,
    image: user.image,
    phone: user.phone,
    coupons: user.coupon,
    wallet: user.wallet,
    token: user.token,
  });
};

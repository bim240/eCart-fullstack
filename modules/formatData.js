exports.userData = (user, token) => {
  // console.log(token, "token in format data");
  return (userInfo = {
    username: user.username,
    email: user.email,
    token,
    image: user.image,
    phone: user.phone,
    wallet: user.wallet,
    coupons: user.coupon,
    token: user.token,
    address: user.address,
    order: user.order,
    fav: user.fav,
    cart: user.cart,
  });
};

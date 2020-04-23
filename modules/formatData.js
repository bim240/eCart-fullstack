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

exports.adminAllUser = (user) => {
  return {
    username: user.username,
    email: user.email,
    image: user.image,
    phone: user.phone,
    wallet: user.wallet,
    coupons: user.coupon,
    token: user.token,
    address: user.address,
    order: user.order,
    fav: user.fav,
    cart: user.cart,
    isBlocked: user.isBlocked,
  };
};

exports.formatComments = (comments) => {
  // console.log(comments);
  return comments.map((comment) => {
    return {
      id: comment.id,
      productId: comment.productId,
      body: comment.body,
      stars: comment.stars,
      username: comment.author.username,
      image: comment.author.image,
    };
  });
};

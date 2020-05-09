import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Address from "./address";
import { placeYourOrder } from "../../store/actions/user/cartActions";

const ChooseAddress = (props) => {
  let orders = props.cart.reduce((acc, product) => {
    let order = {};
    order.productId = product._id;
    order.quantity = 1;
    acc = acc.concat(order);
    return acc;
  }, []);
  const handleOrder = () => {
    console.log(orders);
    props.dispatch(placeYourOrder(orders));
    props.history.push("/");
  };
  return (
    <>
      <div className="container my-4">
        <h3 className="font-weight-bold">Choose your addresss</h3>
        <Address className="my-3" />
        <Link>
          {" "}
          <button
            onClick={() => handleOrder()}
            className="btn btn-primary btn-sm font-weight-bold"
          >
            Place Order
          </button>
        </Link>
      </div>
    </>
  );
};
function mapStateToProps(state) {
  return {
    cart: state.Cart.cart,
  };
}
export default connect(mapStateToProps)(ChooseAddress);

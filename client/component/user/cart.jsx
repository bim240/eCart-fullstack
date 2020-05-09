import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { FaRupeeSign } from "react-icons/fa";
import { v4 as uuid } from "uuid";
import { deleteItemFromCart } from "../../store/actions/user/cartActions";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      count: 1,
      totalPrice: 0,
    };
  }
  handleInput = (e, id) => {
    this.setState({ [e.target.name]: e.target.value, id });
  };
  handleTotal = (price) => {
    let totalPrice = this.state.totalPrice + price;
    this.setState({ totalPrice: totalPrice });
  };
  handleDelete = (id) => {
    this.props.dispatch(deleteItemFromCart(id));
  };
  render() {
    return (
      <>
        <section class="jumbotron text-center">
          <div class="container">
            <h1 class="jumbotron-heading">E-CART</h1>
          </div>
        </section>

        {this.props.cart.length > 0 ? (
          <div class="container mb-4">
            <div class="row">
              <div class="col-12">
                <div class="table-responsive">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col"> </th>
                        <th scope="col">Product</th>
                        <th scope="col">Available</th>
                        <th scope="col" class="text-center">
                          Quantity
                        </th>
                        <th scope="col" class="text-right">
                          Price
                        </th>
                        <th> </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.cart.map((product) => {
                        return (
                          <tr key={uuid()}>
                            <td>
                              <img
                                className=" img-thumbnail cart_image "
                                src={
                                  product.image
                                    ? product.image
                                    : "https://dummyimage.com/50x50/55595c/fff"
                                }
                              />{" "}
                            </td>
                            <td>{product.name}</td>
                            <td>In stock</td>
                            <td>
                              <input
                                name="count"
                                onChange={(e) =>
                                  this.handleInput(e, product._id)
                                }
                                class="form-control"
                                type="number"
                                value={
                                  this.state.id === product._id
                                    ? this.state.count
                                    : 1
                                }
                              />
                            </td>

                            <td class="text-right">
                              <FaRupeeSign />{" "}
                              {product._id === this.state.id
                                ? product.price * this.state.count
                                : product.price}
                              {/* {this.countTotalPrice} */}
                            </td>
                            <td class="text-right">
                              <button
                                onClick={(e) => this.handleDelete(product._id)}
                                class="btn btn-sm btn-danger"
                              >
                                <AiFillDelete />{" "}
                              </button>{" "}
                            </td>
                          </tr>
                        );
                      })}

                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Sub-Total</td>
                        <td class="text-right">
                          <FaRupeeSign />
                          {this.props.cart.reduce((acc, product) => {
                            acc += product.price * 1;
                            return acc;
                          }, 0)}
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Shipping</td>
                        <td class="text-right">
                          <FaRupeeSign /> 100
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <strong>Total</strong>
                        </td>
                        <td class="text-right">
                          <strong>
                            <FaRupeeSign />{" "}
                            {this.props.cart.reduce((acc, product) => {
                              acc += product.price * 1;
                              return acc;
                            }, 100)}{" "}
                          </strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="col mb-2">
                <div class="row">
                  <div class="col-sm-12  col-md-6">
                    <Link to="/" class="btn btn-block btn-light">
                      Continue Shopping
                    </Link>
                  </div>
                  <div class="col-sm-12 col-md-6 text-right">
                    <Link
                      to="/user/order/address"
                      class="btn btn-lg btn-block btn-success text-uppercase"
                    >
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div class="col mb-2">
              <div class="row">
                <div class="col-sm-12 col-md-6 text-right">
                  <button class="btn btn-lg btn-block ">Cart empty</button>
                </div>
                <div class="col-sm-12  col-md-6">
                  <Link to="/" class="btn btn-block btn-light">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    cart: state.Cart.cart,
  };
}
export default connect(mapStateToProps)(Cart);

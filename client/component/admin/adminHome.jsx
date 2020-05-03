import React from "react";
import { connect } from "react-redux";

import Additems from "./additems";
import {
  getAllUserInfo,
  blockUnblockUser,
} from "../../store/actions/admin/adminCRUDonUsers";
import {
  getAllProducts,
  deleteProduct,
} from "../../store/actions/admin/adminCRUDonProducts";

class AdminHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // sdm
  componentDidMount() {
    // console.log(getAllUsers);
    this.props.dispatch(getAllUserInfo());
    this.props.dispatch(getAllProducts());
  }
  // block a user

  handleBlock = (user) => {
    this.props.dispatch(blockUnblockUser(user));
  };
  // delte a user
  handleDeleteItem = (product) => {
    // console.log(product._id);
    this.props.dispatch(deleteProduct(product));
  };
  render() {
    return (
      <>
        {this.props.allUsersInfo ? (
          <div className="container-fluid mt-3  text-dark font-weight-bold">
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a
                  className="nav-item nav-link active"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Users
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Products
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-contact-tab"
                  data-toggle="tab"
                  href="#nav-contact"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  Add Product
                </a>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              {/* get all the users */}
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div
                  className="container my-3"
                  // style={{ border: "1px solid green" }}
                >
                  <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
                    {/* <div className="card-deck"> */}
                    {this.props.allUsersInfo
                      ? this.props.allUsersInfo.map((user) => {
                          return (
                            <div className="col mb-4">
                              <div
                                className={`card ${
                                  user.isBlocked
                                    ? "border-danger"
                                    : "border-success"
                                }`}
                                style={{ maxWidth: "540px" }}
                              >
                                <div className="row no-gutters">
                                  <div className="col-md-4">
                                    <img
                                      src={
                                        user.image
                                          ? user.image
                                          : "https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"
                                      }
                                      className="card-img"
                                      alt="profile image"
                                    />
                                  </div>
                                  <div className="col-md-8">
                                    <div className="card-body">
                                      <h5 className="card-title font-weight-bold">
                                        {user.username}
                                      </h5>
                                      <p class="card-text">{user.email}</p>
                                      <button
                                        onClick={() => this.handleBlock(user)}
                                        type="button"
                                        className={`btn ${
                                          user.isBlocked
                                            ? "btn-success"
                                            : "btn-danger"
                                        }`}
                                      >
                                        {user.isBlocked ? "Unblock" : "Block"}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      : ""}
                  </div>
                </div>
              </div>
              {/* get all the products */}
              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <div className="container-fluid my-3">
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                    {this.props.allProductInfo
                      ? this.props.allProductInfo.map((product) => {
                          return (
                            <div className="col m-4">
                              <div className="card" style={{ width: "18rem" }}>
                                <img
                                  src={
                                    product.image[0] != "String"
                                      ? product.image[0]
                                      : "https://www.creativefabrica.com/wp-content/uploads/2018/05/Classical-furniture-SVG-DXF-EPS-PNG-AI-by-retrowalldecor.jpg"
                                  }
                                  className="card-img-top"
                                  alt="..."
                                />
                                <div className="card-body">
                                  <h5 className="card-title">
                                    Name : {product.name}
                                  </h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                  <li className="list-group-item">
                                    Category : {product.category}
                                  </li>
                                  <li className="list-group-item">
                                    Sub Category : {product.subCatogery}
                                  </li>
                                  <li className="list-group-item">
                                    Brand : {product.brand}{" "}
                                  </li>
                                  <li className="list-group-item">
                                    Price : {product.price}{" "}
                                  </li>
                                </ul>
                                <div className="card-body">
                                  <button className="btn btn-success mr-3">
                                    Update
                                  </button>
                                  <button
                                    className="btn btn-danger"
                                    onClick={() =>
                                      this.handleDeleteItem(product)
                                    }
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      : ""}
                  </div>
                </div>
              </div>
              {/* add new products */}
              <div
                class="tab-pane fade"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                <div className="container my-3">
                  <Additems />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        )}
      </>
    );
  }
}

function filterProducts(products, key) {
  // console.log(products, "indide filter products");
  if (key === "all") {
    return products;
  }
}
function mapStateToProps(state) {
  console.log(state.AdminOnProducts.allProduct, "insode adminHome");
  return {
    allUsersInfo: state.AdminOnUser.allUser,
    allProductInfo: filterProducts(
      state.AdminOnProducts.allProduct,
      state.AdminOnProducts.filterKey
    ),
  };
}
export default connect(mapStateToProps)(AdminHome);

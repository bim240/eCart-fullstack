import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./style.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleLogout = () => {
    localStorage.clear();
    this.props.dispatch({ type: "LOGOUT", payload: "" });
  };
  render() {
    // console.log(this.props.user ? this.props.user : "", "header");
    return (
      <div className="bg_header ">
        <div
          className="container "
          // style={{ border: "1px solid green" }}
        >
          {" "}
          <nav className="navbar navbar-expand-lg navbar-dark  ">
            <Link to="google.com" className="navbar-brand font-weight-bolder ">
              <i style={{ color: "white" }} className="fas fa-dolly mr-1"></i>
              eCart
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              style={{ padding: "0 !importent" }}
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li>
                  <form className=" nav-item form-inline">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 17 18"
                            className=""
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g fill="#2874F1" fill-rule="evenodd">
                              <path
                                className="_2BhAHa"
                                d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"
                              ></path>
                              <path
                                className="_2BhAHa"
                                d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search for products"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </form>
                </li>
                {!this.props.user ? (
                  <>
                    <li className="nav-item ">
                      <Link
                        to="/login"
                        className=" nav-link ml-3 text-light font-weight-bold"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/register"
                        className=" nav-link ml-3 text-light font-weight-bold"
                      >
                        Signup
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    {this.props.user.isAdmin ? (
                      <li>
                        <Link
                          to="/admin"
                          className="nav-link ml-3 text-light font-weight-bold"
                        >
                          Admin
                        </Link>
                      </li>
                    ) : (
                      ""
                    )}
                    <li>
                      <Link
                        to="/"
                        onClick={this.handleLogout}
                        className="nav-link ml-3 text-light font-weight-bold"
                      >
                        Logout
                      </Link>
                    </li>
                  </>
                )}
                <li>
                  <Link
                    to="cart"
                    className="nav-link ml-3  text-light font-weight-bold"
                  >
                    <svg
                      className="mr-1"
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="_2JpNOH"
                        d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86"
                        fill="#fff"
                      ></path>
                    </svg>
                    <span>Cart</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state);
  return {
    user: state.User.UserInfo,
  };
}
export default connect(mapStateToProps)(Header);

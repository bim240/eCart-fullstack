import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { RiAdminLine, RiCoupon3Line } from "react-icons/ri";
import { FaUser, FaWallet, FaAddressBook } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import {
  AiOutlineUnorderedList,
  AiFillSetting,
  AiOutlineLogout,
  AiFillDelete,
} from "react-icons/ai";

import { updateUserInfo } from "../../store/actions/user/userAction";
import Address from "./address";
import Wallet from "./wallet";
import Order from "./order";
import Setting from "./setting";
import Favorite from "./favorite";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editKey: false,
      username: this.props.userInfo.username,
      email: this.props.userInfo.email,
      phone: this.props.userInfo.phone,
      password: "",
      image: this.props.userInfo.image,
    };
  }
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleEdit = (e) => {
    e.preventDefault();
    this.setState({ editKey: false });
    var user = {};
    if (this.state.username) {
      user.username = this.state.username;
    }
    if (this.state.email) {
      user.email = this.state.email;
    }
    if (this.state.image) {
      user.image = this.state.image;
    }
    if (this.state.phone) {
      user.phone = this.state.phone;
    }
    if (this.state.password) {
      user.password = this.state.password;
    }
    // console.log(user, "formated user");
    this.props.dispatch(updateUserInfo(this.props, user));
    // console.log(this.state, "user info in profile");
  };
  handleLogout = () => {
    localStorage.clear();
    this.props.history.push("/");
    this.props.dispatch({ type: "LOGOUT", payload: "" });
  };
  render() {
    return (
      <>
        <div class="container ">
          <div class="row">
            <div class="col-sm-3 border  rounded my-3">
              <div class="text-center rounded-circle">
                <img
                  src={
                    this.props.userInfo.image
                      ? this.props.userInfo.image
                      : "http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
                  }
                  class="avatar rounded-circle img-circle img-thumbnail my-2"
                  alt="avatar"
                />
                <h3>User Name</h3>
              </div>
              <hr />
              <br />
              <Link
                to="/user/profile"
                className="dropdown-item font-weight-bold border-bottom letter_spacing mb-1"
                href="#"
              >
                <FaUser /> Profile
              </Link>
              <a
                className="dropdown-item font-weight-bold border-bottom letter_spacing mb-1"
                href="#"
              >
                <MdFavorite /> Favorite
              </a>
              <a
                className="dropdown-item font-weight-bold border-bottom letter_spacing mb-1"
                href="#"
              >
                <FaAddressBook /> Address
              </a>
              <a
                className="dropdown-item font-weight-bold border-bottom letter_spacing mb-1 "
                href="#"
              >
                <AiOutlineUnorderedList /> Order
              </a>
              <a
                className="dropdown-item font-weight-bold border-bottom letter_spacing mb-1 "
                href="#"
              >
                <FaWallet /> Wallet
              </a>
              <a
                className="dropdown-item font-weight-bold border-bottom letter_spacing mb-1 "
                href="#"
              >
                <RiCoupon3Line /> Coupons
              </a>
              <a
                className="dropdown-item font-weight-bold border-bottom letter_spacing mb-1 "
                href="#"
              >
                <AiFillSetting /> Setting
              </a>
              <Link
                className="dropdown-item font-weight-bold border-bottom letter_spacing mb-3 "
                to="/"
                onClick={() => this.handleLogout()}
              >
                <AiOutlineLogout /> Logout
              </Link>
            </div>
            <div class="col-sm-8 border rounded my-3 mx-1 ">
              {/* personal information */}
              <div className="container my-2 mx-1 p-2 ">
                <div className="oneSection_title_show">
                  <h4 className="font-weight-bold">Personal Information</h4>
                  <Link onClick={() => (this.state.editKey = true)}>
                    <h6>Edit</h6>
                  </Link>
                </div>
                <br />
                {!this.state.editKey ? (
                  <>
                    <h5 className="">Name : {this.props.userInfo.username}</h5>
                    <h5 className="">Email : {this.props.userInfo.email}</h5>
                    <h5 className="">
                      Mobile Number :{" "}
                      {this.props.userInfo.phone
                        ? this.props.userInfo.phone
                        : ""}
                    </h5>
                  </>
                ) : (
                  <form>
                    <div class="form-group">
                      <label for="username">User Name</label>
                      <input
                        onChange={(e) => this.handleInput(e)}
                        type="email"
                        class="form-control"
                        id="username"
                        value={this.state.username}
                        name="username"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input
                        onChange={(e) => this.handleInput(e)}
                        value={this.state.email}
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="email"
                      />
                    </div>
                    <div class="form-group">
                      <label for="image">Image URL</label>
                      <input
                        onChange={(e) => this.handleInput(e)}
                        value={this.state.image}
                        type="text"
                        class="form-control"
                        id="image"
                        aria-describedby="emailHelp"
                        name="image"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input
                        onChange={(e) => this.handleInput(e)}
                        value={this.state.password}
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        name="password"
                      />
                    </div>
                    <div class="form-group">
                      <label for="phone">Mobile Number</label>
                      <input
                        onChange={(e) => this.handleInput(e)}
                        value={this.state.phone}
                        type="number"
                        class="form-control"
                        id="phone"
                        name="phone"
                      />
                    </div>
                    <button
                      onClick={(e) => this.handleEdit(e)}
                      type="submit"
                      class="btn btn-primary"
                    >
                      Submit
                    </button>
                  </form>
                )}
              </div>
              <br />
              <hr />
              {/* fav */}
              <div className="container  mx-1 my-3 p2">
                <h4 className="font-weight-bold"> Favorite</h4>
                <Favorite />
              </div>
              <br />
              <hr />
              {/* Order */}
              <div className="container  mx-1 my-3 p2">
                <h4 className="font-weight-bold"> Order</h4>
                <Order />
              </div>
              <br />
              <hr />
              {/* address */}

              <Address />
              <br />
              <hr />
              {/* wallet */}
              <div className="container  mx-1 my-3 p2">
                <h4 className="font-weight-bold"> Wallet</h4>
                <Wallet />
              </div>
              <br />
              <hr />
              {/* coupon */}
              <div className="container  mx-1 my-3 p2">
                <h4 className="font-weight-bold"> Coupons</h4>
              </div>
              <br />
              <hr />
              {/* setting */}
              <div className="container  mx-1 my-3 p2">
                <h4 className="font-weight-bold"> Setting</h4>
                <Setting history={this.props.history} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.User.UserInfo,
  };
}
export default connect(mapStateToProps)(UserProfile);

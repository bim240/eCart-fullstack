import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { RiAdminLine, RiCoupon3Line } from "react-icons/ri";
import { FaUser, FaWallet } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import {
  AiOutlineUnorderedList,
  AiFillSetting,
  AiOutlineLogout,
} from "react-icons/ai";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div class="container ">
          <div class="row">
            <div class="col-sm-3 border  rounded my-3">
              <div class="text-center rounded-circle">
                <img
                  src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
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
                <MdFavorite /> Favroite
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
              <a
                className="dropdown-item font-weight-bold border-bottom letter_spacing mb-3 "
                href="#"
              >
                <AiOutlineLogout /> Logout
              </a>
            </div>
            <div class="col-sm-8 border rounded my-3 mx-1 "></div>
          </div>
        </div>
      </>
    );
  }
}

export default connect()(UserProfile);

import React from "react";
import { connect } from "react-redux";
import {
  getAllUserInfo,
  blockUnblockUser,
} from "../../store/actions/admin/adminCRUDonUsers";

class AdminHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // console.log(getAllUsers);
    this.props.dispatch(getAllUserInfo());
  }
  handleBlock = (user) => {
    this.props.dispatch(blockUnblockUser(user));
  };
  render() {
    return (
      <>
        <div className="container mt-3  text-dark font-weight-bold">
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
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
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
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              all the product
            </div>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    allUsersInfo: state.AdminOnUser.allUser,
  };
}
export default connect(mapStateToProps)(AdminHome);

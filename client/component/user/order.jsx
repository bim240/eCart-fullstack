import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUserInfo } from "../../store/actions/user/userAction";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let user = {};
    user.order =
      parseInt(this.state.order) + parseInt(this.props.userInfo.order);
    // console.log(this.state.order, { user });
    this.props.dispatch(updateUserInfo(this.props, user));
    this.setState({ order: "" });
  }

  render() {
    return (
      <>
        {" "}
        {this.props.userInfo.order ? (
          <> {this.props.userInfo.order}</>
        ) : (
          <>No Previous Order</>
        )}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.User.UserInfo,
  };
}
export default connect(mapStateToProps)(Order);

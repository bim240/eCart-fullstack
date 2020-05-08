import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUserInfo } from "../../store/actions/user/userAction";

class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let user = {};
    user.fav = this.state.fav;
    // console.log(this.state.fav, { user });
    this.props.dispatch(updateUserInfo(this.props, user));
    this.setState({ fav: "" });
  }

  render() {
    return (
      <>
        {" "}
        {this.props.userInfo.fav.length > 1 ? (
          <> {this.props.userInfo.fav}</>
        ) : (
          <>No Favorite yet</>
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
export default connect(mapStateToProps)(Favorite);

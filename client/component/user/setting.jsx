import React, { Component } from "react";
import { AiFillDelete } from "react-icons/ai";
import { connect } from "react-redux";
import { deleteUser } from "../../store/actions/user/userAction";

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleDeleteUser = () => {
    this.props.history.push("/");
    this.props.dispatch(deleteUser(this.props));
    // localStorage.clear();
  };
  render() {
    return (
      <>
        <button
          onClick={() => this.handleDeleteUser()}
          className="btn btn-danger btn-sm"
        >
          <AiFillDelete /> Delete Account
        </button>
      </>
    );
  }
}

export default connect()(Setting);
